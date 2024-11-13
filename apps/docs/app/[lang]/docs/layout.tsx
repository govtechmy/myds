import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { getMYDSConfig } from "@/app/[lang]/layout.config";
import { source } from "@/app/[lang]/source";
import DocsTab from "@/components/docs-tab";

export default function Layout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: "en" | "ms" };
}) {
  const { config, menu } = getMYDSConfig(lang);
  return (
    <DocsLayout
      sidebar={{
        banner: <DocsTab menus={menu} />,
      }}
      tree={source.pageTree[lang]}
      {...config}
    >
      {children}
    </DocsLayout>
  );
}
