import { Tag } from "@/components/Tag";
import { getRosetta } from "@/locales/_server";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { LinkItemType } from "fumadocs-ui/layout";
import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

/**
 * Taken from fumadocs-ui/components/layout/root-toggle.tsx
 * Redirect URL of the folder, usually the index page
 */
interface Option {
  url: string;
  icon?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  props?: HTMLAttributes<HTMLElement>;
}

type MyDSConfig = {
  config: HomeLayoutProps;
  menu: Array<Option>;
};

export const getMYDSConfig = (lang: "en" | "ms"): MyDSConfig => {
  const { t } = getRosetta(lang);

  const menu: Array<LinkItemType & Option> = [
    {
      title: t("menu.design"),
      text: t("menu.design"),
      description: t("design.description"),
      url: `/${lang}/docs/design`,
      active: "nested-url",
    },
    {
      title: t("menu.develop"),
      text: t("menu.develop"),
      description: t("develop.description"),
      url: `/${lang}/docs/develop`,
      active: "nested-url",
    },
  ];

  return {
    config: {
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
      links: menu,
    },
    menu,
  };
};
