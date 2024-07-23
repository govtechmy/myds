import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../i18n-config";
import { AbstractIntlMessages } from "next-intl";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

export function extract(messages: AbstractIntlMessages, path: string): string {
  const keys = path.split(".");

  let current = messages;

  for (const key of keys) {
    const value = current[key];

    if (typeof value === "string") {
      return value;
    }

    current = value;
  }

  return "";
}
