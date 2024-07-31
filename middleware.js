import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = async (request) => {
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token"); // Assuming the token is stored as 'session_token'

  if (!token) {
    console.log("Redirecting to login page (missing token)");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  } else {
    console.log("Valid token found, proceeding to dashboard");
  }

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
