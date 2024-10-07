import { defaultLocale, localePrefix, locales } from "@/i18n-config";
import createIntlMiddleware from "next-intl/middleware";

export const handleI18nRouting = createIntlMiddleware({
  locales,
  localePrefix,
  defaultLocale,
});
