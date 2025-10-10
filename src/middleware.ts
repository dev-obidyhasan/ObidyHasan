import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const email = request.cookies.get("email")?.value;
  if (!token || !email) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
