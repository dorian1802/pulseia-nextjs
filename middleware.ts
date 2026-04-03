import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip API routes, static files, and _next
  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next();
  }
  
  // Root path → redirect to /en
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }
  
  // Already has a lang prefix
  if (['/fr', '/en', '/es', '/nl'].some(l => pathname.startsWith(l))) {
    return NextResponse.next();
  }
  
  // Unknown path → redirect to /en
  return NextResponse.redirect(new URL('/en', request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
