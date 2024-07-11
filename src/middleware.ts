import { sessionStatus } from './app/gaurd/session';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/', '/country', '/city', '/state', '/accounts', '/cms', '/profile', '/categories', '/customer', '/store', '/web-order', '/store-category'];

export default function middleware(req: any) {
  //   const session = sessionStatus();
  const session = true;
  console.log('session', !session);
  if (!session && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL('/login', req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
}
