import 'server-only';

/**
 * Server-side lead enrichment. Adds what can be learned from the request itself:
 *  - location from Netlify's built-in geolocation header (free, no key)
 *  - network owner from IPinfo Lite (free, needs IPINFO_TOKEN): for visitors on a company
 *    network this is the company; for home/mobile visitors it is their internet provider
 *  - company domain from a business email address
 */

export interface Enrichment {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  timezone?: string;
  network?: string;
  networkDomain?: string;
  asn?: string;
  emailDomain?: string;
  businessEmail?: boolean;
  device?: string;
  userAgent?: string;
}

const FREE_MAIL = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.in', 'yahoo.com.sg', 'ymail.com', 'outlook.com', 'hotmail.com',
  'live.com', 'msn.com', 'icloud.com', 'me.com', 'mac.com', 'aol.com', 'proton.me', 'protonmail.com', 'gmx.com',
  'gmx.net', 'mail.com', 'zoho.com', 'yandex.com', 'yandex.ru', 'qq.com', '163.com', '126.com', 'rediffmail.com',
]);

export function clientIp(req: Request): string | undefined {
  return (
    req.headers.get('x-nf-client-connection-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    undefined
  );
}

function isPublicIp(ip: string) {
  return !/^(127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|::1$|fc|fd|fe80)/i.test(ip);
}

/** Netlify adds `x-nf-geo` (base64 JSON) to requests on its network. Missing locally. */
function netlifyGeo(req: Request) {
  const raw = req.headers.get('x-nf-geo');
  if (!raw) return {};
  try {
    const json = JSON.parse(raw.trim().startsWith('{') ? raw : Buffer.from(raw, 'base64').toString('utf8'));
    return {
      city: json.city as string | undefined,
      region: json.subdivision?.name as string | undefined,
      country: (json.country?.name || json.country?.code) as string | undefined,
      timezone: json.timezone as string | undefined,
    };
  } catch {
    return {};
  }
}

async function ipinfoLite(ip: string) {
  const token = process.env.IPINFO_TOKEN?.trim();
  if (!token || !isPublicIp(ip)) return {};
  try {
    const res = await fetch(`https://api.ipinfo.io/lite/${encodeURIComponent(ip)}?token=${encodeURIComponent(token)}`, {
      signal: AbortSignal.timeout(2500),
      cache: 'no-store',
    });
    if (!res.ok) return {};
    const d = (await res.json()) as { country?: string; asn?: string; as_name?: string; as_domain?: string };
    return { country: d.country, network: d.as_name, networkDomain: d.as_domain, asn: d.asn };
  } catch {
    return {};
  }
}

export async function enrichLead(req: Request, email?: string): Promise<Enrichment> {
  const ip = clientIp(req);
  const geo = netlifyGeo(req);
  const info = ip ? await ipinfoLite(ip) : {};
  const ua = req.headers.get('user-agent') || undefined;
  const emailDomain = email?.split('@')[1]?.toLowerCase();

  return {
    ip,
    city: geo.city,
    region: geo.region,
    country: geo.country || info.country,
    timezone: geo.timezone,
    network: info.network,
    networkDomain: info.networkDomain,
    asn: info.asn,
    emailDomain,
    businessEmail: emailDomain ? !FREE_MAIL.has(emailDomain) : undefined,
    device: ua ? (/Mobi|Android|iPhone|iPad/i.test(ua) ? 'Mobile' : 'Desktop') : undefined,
    userAgent: ua?.slice(0, 200),
  };
}
