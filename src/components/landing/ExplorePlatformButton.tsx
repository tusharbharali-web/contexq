"use client";

/**
 * Hero "Explore Platform": opens the Platform view of the pie (same as tapping the
 * Platform slice). It used to be a "#solutions" link, which scrolled the page down to
 * the Solutions section and left "#solutions" in the address, so a refresh then opened
 * the Solutions pie view on top of a scrolled page.
 */
export default function ExplorePlatformButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        window.dispatchEvent(new CustomEvent("open-pie-view", { detail: "Platform" }));
      }}
    >
      Explore Platform
    </button>
  );
}
