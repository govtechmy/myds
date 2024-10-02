import { NextRequest, NextResponse } from "next/server";
import { handleBasicAuth } from "@/middlewares/basic-auth";
import { handleI18nRouting } from "@/middlewares/i18n";

export default async function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);
  const authResponse = handleBasicAuth(request);
  return authResponse || response;
}

export const config = {
  matcher: [
    // // Match only internationalized pathnames
    "/(en-MY|ms-MY)/:path*",
    // // Match all pathnames except for those starting with `/api`, `/_next` or `/_vercel` or those containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
