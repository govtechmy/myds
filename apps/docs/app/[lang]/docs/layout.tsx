import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { getMYDSConfig } from "@/app/[lang]/layout.config";
import { source } from "@/app/[lang]/source";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";

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
        banner: (
          <RootToggle
            className="border-otl-gray-200 shadow-button hover:bg-bg-washed mx-0.5 rounded-md border transition"
            options={menu}
          />
        ),
      }}
      tree={source.pageTree[lang]}
      {...config}
    >
      {children}
    </DocsLayout>
  );
}
