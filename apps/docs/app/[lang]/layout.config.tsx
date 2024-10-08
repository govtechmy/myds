import { Tag } from "@/components/Tag";
import { getRosetta } from "@/locales/_server";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const getMYDSConfig = (lang: "en" | "ms"): HomeLayoutProps => {
  const { t } = getRosetta(lang);

  return {
    i18n: true,
    nav: {
      title: (
        <div className="flex items-center gap-3">
          <Image width={24} height={24} src="/assets/logo.svg" alt="Logo" />
          <h3>MYDS</h3>
          <Tag className="text-accent text-xs">Beta</Tag>
        </div>
      ),
    },
    links: [
      {
        text: t("menu.design"),
        url: "/docs/design",
        active: "nested-url",
      },
      {
        text: t("menu.component"),
        url: "/docs/component",
        active: "nested-url",
      },
    ],
  };
};
