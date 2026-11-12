/**
 * Runtime environment for a view's behavior script.
 *
 * The page scripts were written for standalone HTML documents. Instead of
 * rewriting them, each script receives this environment: `window`, `document`,
 * `location`, timers and observers that behave like the original document but
 * are confined to the view's DOM and are fully cleaned up when the view unmounts
 * (client-side navigation). This replaces the old iframe isolation.
 */

// Page scripts pass arbitrary callbacks; this is the honest type for them.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFn = (...args: any[]) => any;
/** `window` viewed as a plain bag of globals (page scripts read/write arbitrary keys). */
type Globals = Record<PropertyKey, unknown>;
const globals = () => window as unknown as Globals;

export interface ViewEnvOptions {
  /** `.cq-html` wrapper – stands in for <html>. */
  root: HTMLElement;
  /** `.cq-body` wrapper – stands in for <body>. */
  body: HTMLElement;
  /** URL of the original HTML file, used to resolve relative URLs. */
  legacyUrl: string;
  /** Navigate to a URL written for the old page (handled by the Next router). */
  navigate: (href: string, replace?: boolean) => void;
}

export interface ViewEnv {
  env: Record<string, unknown>;
  /** Flushes DOMContentLoaded / load listeners registered by the scripts. */
  fireReady: () => void;
  dispose: () => void;
  /** Exposes functions referenced by inline on* attributes as globals while mounted. */
  exposeGlobals: (fns: Record<string, AnyFn | undefined>) => void;
}

const isNative = (fn: AnyFn) => {
  try {
    return /\{\s*\[native code\]\s*\}\s*$/.test(Function.prototype.toString.call(fn));
  } catch {
    return false;
  }
};

export function createViewEnv({ root, body, legacyUrl, navigate }: ViewEnvOptions): ViewEnv {
  let disposed = false;
  const disposers: Array<() => void> = [];
  const timeouts = new Set<number>();
  const intervals = new Set<number>();
  const frames = new Set<number>();
  const createdGlobals = new Set<PropertyKey>();
  const savedHandlers = new Map<PropertyKey, unknown>();
  const headNodes: Node[] = [];
  let readyFired = false;
  const readyQueue: AnyFn[] = [];
  const loadQueue: AnyFn[] = [];

  const safeCall = (fn: AnyFn, thisArg: unknown, ...args: unknown[]) => {
    if (disposed) return;
    try {
      fn.apply(thisArg, args);
    } catch (err) {
      console.error(`[view ${legacyUrl}]`, err);
    }
  };

  // ---- timers -------------------------------------------------------------
  const timers = {
    setTimeout: (fn: AnyFn | string, ms?: number, ...args: unknown[]) => {
      const id = window.setTimeout(() => {
        timeouts.delete(id);
        if (typeof fn === "function") safeCall(fn, window, ...args);
      }, ms);
      timeouts.add(id);
      return id;
    },
    clearTimeout: (id?: number) => {
      if (id === undefined) return;
      timeouts.delete(id);
      window.clearTimeout(id);
    },
    setInterval: (fn: AnyFn | string, ms?: number, ...args: unknown[]) => {
      const id = window.setInterval(() => {
        if (typeof fn === "function") safeCall(fn, window, ...args);
      }, ms);
      intervals.add(id);
      return id;
    },
    clearInterval: (id?: number) => {
      if (id === undefined) return;
      intervals.delete(id);
      window.clearInterval(id);
    },
    requestAnimationFrame: (fn: FrameRequestCallback) => {
      const id = window.requestAnimationFrame((t) => {
        frames.delete(id);
        if (!disposed) fn(t);
      });
      frames.add(id);
      return id;
    },
    cancelAnimationFrame: (id: number) => {
      frames.delete(id);
      window.cancelAnimationFrame(id);
    },
  };

  // ---- event listeners ----------------------------------------------------
  const unwrap = (t: unknown) => (t === docProxy ? document : t === winProxy ? window : t);
  const trackedAdd =
    (target: EventTarget) =>
    (type: string, fn: EventListenerOrEventListenerObject | null, opts?: boolean | AddEventListenerOptions) => {
      if (!fn) return;
      if (target === document && type === "DOMContentLoaded") {
        const cb = typeof fn === "function" ? fn : () => fn.handleEvent(new Event(type));
        if (readyFired) queueMicrotask(() => safeCall(cb, docProxy, new Event(type)));
        else readyQueue.push(cb);
        return;
      }
      if (target === window && type === "load") {
        const cb = typeof fn === "function" ? fn : () => fn.handleEvent(new Event(type));
        if (readyFired) window.setTimeout(() => safeCall(cb, winProxy, new Event(type)), 0);
        else loadQueue.push(cb);
        return;
      }
      target.addEventListener(type, fn, opts);
      disposers.push(() => target.removeEventListener(type, fn, opts));
    };
  const trackedRemove =
    (target: EventTarget) =>
    (type: string, fn: EventListenerOrEventListenerObject | null, opts?: boolean | EventListenerOptions) => {
      if (fn) target.removeEventListener(type, fn, opts);
    };

  // ---- observers ----------------------------------------------------------
  // Mixin constructors must be typed with any[] (TypeScript mixin rule).
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trackObserver = <T extends { new (...a: any[]): { disconnect(): void } }>(Base: T): T =>
    class extends Base {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(...args: any[]) {
        super(...args);
        disposers.push(() => this.disconnect());
      }
    };
  const TrackedIO = trackObserver(IntersectionObserver);
  const TrackedRO = trackObserver(ResizeObserver);
  const BaseMO = trackObserver(MutationObserver);
  class TrackedMO extends BaseMO {
    observe(target: Node, options?: MutationObserverInit) {
      return super.observe(unwrap(target) as Node, options);
    }
  }

  // ---- location -----------------------------------------------------------
  const legacy = new URL(legacyUrl, window.location.origin);
  const virtualLocation = {
    get href() {
      return legacy.origin + legacy.pathname + window.location.search + window.location.hash;
    },
    set href(v: string) {
      navigate(String(v));
    },
    get pathname() {
      return legacy.pathname;
    },
    get search() {
      return window.location.search;
    },
    get hash() {
      return window.location.hash;
    },
    set hash(v: string) {
      window.location.hash = v;
    },
    get origin() {
      return window.location.origin;
    },
    get host() {
      return window.location.host;
    },
    get hostname() {
      return window.location.hostname;
    },
    get protocol() {
      return window.location.protocol;
    },
    get port() {
      return window.location.port;
    },
    assign: (v: string) => navigate(String(v)),
    replace: (v: string) => navigate(String(v), true),
    reload: () => window.location.reload(),
    toString() {
      return this.href;
    },
  };

  // ---- <head> (style/script nodes added by a page are removed on unmount) --
  const trackHead = (fn: AnyFn) =>
    function (this: unknown, ...nodes: Node[]) {
      for (const n of nodes) if (n instanceof Node) headNodes.push(n);
      return fn.apply(document.head, nodes);
    };
  const headProxy = new Proxy(document.head, {
    get(target, key) {
      if (key === "appendChild" || key === "append" || key === "prepend") return trackHead((target as unknown as Record<string, AnyFn>)[key]);
      if (key === "insertBefore") {
        return (n: Node, ref: Node | null) => {
          headNodes.push(n);
          return target.insertBefore(n, ref);
        };
      }
      const v = Reflect.get(target, key, target);
      return typeof v === "function" ? v.bind(target) : v;
    },
  });

  // ---- document -----------------------------------------------------------
  const mapSelector = (sel: string) =>
    sel
      .replace(/(^|[\s>+~,(])html(?=[\s.#[:>+~,)]|$)/g, "$1.cq-html")
      .replace(/(^|[\s>+~,(])body(?=[\s.#[:>+~,)]|$)/g, "$1.cq-body");
  const docFnCache = new Map<PropertyKey, AnyFn>();
  const docOverrides: Record<PropertyKey, unknown> = {
    addEventListener: trackedAdd(document),
    removeEventListener: trackedRemove(document),
    getElementById: (id: string) => root.querySelector(`#${CSS.escape(id)}`) ?? document.getElementById(id),
    querySelector: (sel: string) => {
      const s = mapSelector(sel);
      return root.matches(s) ? root : root.querySelector(s);
    },
    querySelectorAll: (sel: string) => root.querySelectorAll(mapSelector(sel)),
    getElementsByClassName: (c: string) => root.getElementsByClassName(c),
    getElementsByTagName: (t: string) =>
      t.toLowerCase() === "body" ? [body] : t.toLowerCase() === "html" ? [root] : root.getElementsByTagName(t),
  };
  const docProxy: Document = new Proxy(document, {
    get(target, key) {
      switch (key) {
        case "documentElement":
          return root;
        case "body":
          return body;
        case "head":
          return headProxy;
        case "location":
          return virtualLocation;
        case "defaultView":
          return winProxy;
        case "readyState":
          return "complete";
      }
      if (key in docOverrides) return docOverrides[key];
      const v = Reflect.get(target, key, target);
      if (typeof v === "function") {
        if (!docFnCache.has(key)) docFnCache.set(key, v.bind(target));
        return docFnCache.get(key);
      }
      return v;
    },
    set(target, key, value) {
      return Reflect.set(target, key, value, target);
    },
  });

  // ---- window -------------------------------------------------------------
  const winFnCache = new Map<PropertyKey, AnyFn>();
  const winOverrides: Record<PropertyKey, unknown> = {
    ...timers,
    addEventListener: trackedAdd(window),
    removeEventListener: trackedRemove(window),
    IntersectionObserver: TrackedIO,
    ResizeObserver: TrackedRO,
    MutationObserver: TrackedMO,
  };
  const winProxy: Window & typeof globalThis = new Proxy(window, {
    get(target, key) {
      switch (key) {
        case "window":
        case "self":
        case "globalThis":
        case "frames":
          return winProxy;
        // The pages were designed to run embedded (inside the site); keep that mode.
        case "top":
        case "parent":
          return window;
        case "document":
          return docProxy;
        case "location":
          return virtualLocation;
      }
      if (key in winOverrides) return winOverrides[key];
      const v = Reflect.get(target, key, target);
      if (typeof v === "function" && typeof key === "string" && !/^[A-Z]/.test(key) && isNative(v)) {
        if (!winFnCache.has(key)) winFnCache.set(key, v.bind(target));
        return winFnCache.get(key);
      }
      return v;
    },
    set(target, key, value) {
      if (key === "onload") {
        if (typeof value === "function") {
          if (readyFired) window.setTimeout(() => safeCall(value, winProxy, new Event("load")), 0);
          else loadQueue.push(value);
        }
        return true;
      }
      if (key === "location") {
        navigate(String(value));
        return true;
      }
      if (typeof key === "string" && /^on[a-z]+$/.test(key)) {
        if (!savedHandlers.has(key)) savedHandlers.set(key, (target as unknown as Globals)[key]);
      } else if (!(key in target)) {
        createdGlobals.add(key);
      }
      return Reflect.set(target, key, value, target);
    },
  }) as Window & typeof globalThis;

  const env = {
    window: winProxy,
    self: winProxy,
    globalThis: winProxy,
    top: window,
    parent: window,
    document: docProxy,
    location: virtualLocation,
    history: window.history,
    ...timers,
    IntersectionObserver: TrackedIO,
    ResizeObserver: TrackedRO,
    MutationObserver: TrackedMO,
    addEventListener: trackedAdd(window),
    removeEventListener: trackedRemove(window),
    onReady: (fn: AnyFn) => trackedAdd(document)("DOMContentLoaded", fn),
  };

  return {
    env,
    fireReady() {
      if (readyFired) return;
      readyFired = true;
      for (const fn of readyQueue.splice(0)) safeCall(fn, docProxy, new Event("DOMContentLoaded"));
      window.setTimeout(() => {
        for (const fn of loadQueue.splice(0)) safeCall(fn, winProxy, new Event("load"));
      }, 0);
    },
    exposeGlobals(fns) {
      for (const [name, fn] of Object.entries(fns)) {
        if (typeof fn !== "function") continue;
        if (!(name in window)) createdGlobals.add(name);
        globals()[name] = fn;
      }
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      timeouts.forEach((id) => window.clearTimeout(id));
      intervals.forEach((id) => window.clearInterval(id));
      frames.forEach((id) => window.cancelAnimationFrame(id));
      for (const d of disposers.splice(0).reverse()) {
        try {
          d();
        } catch {
          /* already gone */
        }
      }
      for (const n of headNodes.splice(0)) n.parentNode?.removeChild(n);
      for (const key of createdGlobals) {
        try {
          delete globals()[key];
        } catch {
          globals()[key] = undefined;
        }
      }
      savedHandlers.forEach((v, key) => {
        globals()[key] = v;
      });
      const gsap = globals().gsap as { killTweensOf?: (t: unknown) => void } | undefined;
      gsap?.killTweensOf?.(root.querySelectorAll("*"));
    },
  };
}
