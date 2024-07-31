import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = async (request) => {
  const cookieStore = cookies(request);
  const token =
    cookieStore.get("next-auth.session-token") ||
    cookieStore.get("__Secure-next-auth.session-token");

  if (!token) {
    console.info("No valid session token found. Redirecting to login page.");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  console.info("Valid session token found. Proceeding to requested page.");
  return NextResponse.next();
};

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/blogs",
    "/dashboard/users",
    "/dashboard/seo",
  ],
};
