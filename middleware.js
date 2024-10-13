import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./next-i18next.config";

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
  //   matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
  //   matcher: ["/", "/about", "/online-classes"],
};
