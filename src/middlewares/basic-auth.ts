import { NextRequest, NextResponse } from "next/server";

export function handleBasicAuth(request: NextRequest) {
  // Disable auth in development
  if (process.env.APP_ENV === "development") {
    return null;
  }

  const auth = request.headers.get("authorization");

  if (auth) {
    const authValue = auth.split(" ")[1];
    const [user, password] = atob(authValue).split(":");

    if (user === "admin" && password === process.env.AUTH_TOKEN) {
      return null;
    }
  }

  return new NextResponse<unknown>("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="Secure Area"`,
    },
  });
}
