import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

/**
  * You could also check for any property on the session object,
  * like role === "admin" or name === "John Doe", etc.
  * ※ Next13 > 절대경로로 redirect시켜야함. 상대경로로 할 시 작동하지 않음
  * ※ Next13 > _ underscore config 사용되지 않음. {root} path에 _ underscore 빼고 사용해야 함 
*/
export async function middleware(req) {

    const {pathname, origin} = req.nextUrl;

  if (pathname === "/") {
      const session = await getToken({
          req,
          secret: process.env.JWT_SECRET,
          secureCookie: process.env.NODE_ENV === "production",
      });
    
      if (!session) return NextResponse.redirect(`${origin}/home`);
    // If user is authenticated, continue.
  }
}
