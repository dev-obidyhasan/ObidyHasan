import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  console.log(token);
  // const encodedEmail = request.cookies.get("email")?.value;
  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // let email = "";
  // try {
  //   email = Buffer.from(encodedEmail, "base64").toString("utf-8");
  // } catch (error) {
  //   console.error("Failed to decode email:", error);
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // if (email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
