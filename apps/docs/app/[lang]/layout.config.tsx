import { Tag } from "@/components/Tag";
import { links } from "@/lib/constant";
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

export type MYDSConfig = {
  config: HomeLayoutProps;
  menu: Array<Option>;
};

export const getMYDSConfig = (lang: "en" | "ms"): MYDSConfig => {
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
    {
      title: t("menu.icon"),
      text: t("menu.icon"),
      description: t("icon.description"),
      url: `/${lang}/icon`,
      active: "nested-url",
    },
  ];

  return {
    config: {
      i18n: true,
      nav: {
        title: (
          <div className="flex items-center gap-3">
            <Image
              width={32}
              height={32}
              src="/common/logo.svg"
              alt="MYDS Logo"
            />
            <h3 className="font-heading text-[18px] font-semibold leading-[26px]">
              MYDS
            </h3>
            <Tag className="text-accent text-xs">Beta</Tag>
          </div>
        ),
      },
      links: menu,
      githubUrl: links.github,
    },

    menu,
  };
};
