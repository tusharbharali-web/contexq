import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  return NextResponse.json({ isMobile });
}
