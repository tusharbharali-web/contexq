import { NextRequest, NextResponse } from 'next/server';

const MOBILE_UA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname !== '/') return NextResponse.next();
  if (searchParams.get('desktop') === '1') return NextResponse.next();

  const ua = request.headers.get('user-agent') || '';
  if (MOBILE_UA.test(ua)) {
    return NextResponse.redirect(new URL('/mobile-home.html', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
