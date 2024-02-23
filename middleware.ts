import { NextRequest, NextResponse } from "next/server";
import { match } from "path-to-regexp";

export async function middleware(request: NextRequest) {
  const notAllowedWhileLoggedIn = [
    "/signup",
    "/login"
  ];
  const allowedWhileLoggedIn = [
    "/",
    "/audit"
  ];

  const has_token = request.cookies.get("ActualToken")?.value;
  console.log(has_token);
  let isLoggedIn = Boolean(has_token);
  if (isLoggedIn) {
    if (
      notAllowedWhileLoggedIn.some((matcher) => {
        return match?.(matcher, { decode: decodeURIComponent })(
          request.nextUrl.pathname
        );
      })
    ) {
      request.nextUrl.pathname = "/";
      return NextResponse.redirect(request.nextUrl);
    }
  }

  if (!isLoggedIn) {
    if (
      allowedWhileLoggedIn.some((matcher) => {
        return match?.(matcher, { decode: decodeURIComponent })(
          request.nextUrl.pathname
        );
      })
    ) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:any*"],
};