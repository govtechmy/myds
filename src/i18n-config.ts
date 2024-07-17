import { LocalePrefix } from "next-intl/routing";

export type Locale = "en-MY" | "ms-MY";
export const defaultLocale = "en-MY";
export const locales = [defaultLocale, "ms-MY"];
export const localePrefix: LocalePrefix = "as-needed";
