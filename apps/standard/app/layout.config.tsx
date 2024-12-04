import { links } from "@/lib/constant";
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

type DocsConfig = {
  config: HomeLayoutProps;
  menu: Array<Option>;
};

export const getDocsConfig = (): DocsConfig => {
  const menu: Array<LinkItemType & Option> = [
    {
      title: "Prinsip Rekabentuk",
      text: "Prinsip Rekabentuk",
      description: "Prinsip & motivasi reka bentuk",
      url: "/docs/prinsip",
      active: "nested-url",
    },
    {
      title: "Arkitektur Perkhidmatan",
      text: "Arkitektur Perkhidmatan",
      description: "Arkitektur perkhidmatan",
      url: "/docs/arkitektur-perkhidmatan",
      active: "nested-url",
    },
  ];

  return {
    config: {
      nav: {
        title: (
          <div className="flex items-center gap-3">
            <Image
              width={24}
              height={24}
              src="/assets/jata-negara.png"
              alt="Jata Negara"
            />
            <h3>Panduan Reka Bentuk Perkhidmatan Digital Kerajaan</h3>
          </div>
        ),
      },
      links: menu,
      githubUrl: links.github,
    },

    menu,
  };
};
