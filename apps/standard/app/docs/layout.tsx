import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { getDocsConfig } from "@/app/layout.config";
import { source } from "@/app/source";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";

export default function Layout({ children }: { children: ReactNode }) {
  const { config, menu } = getDocsConfig();
  return (
    <DocsLayout
      sidebar={{
        banner: (
          <RootToggle
            className="bg-bg-white border-otl-gray-200 text-txt-black-700 shadow-button hover:bg-bg-white-hover hover:border-otl-gray-300 hover:text-txt-black-900 rounded-lg border"
            options={menu}
          />
        ),
      }}
      tree={source.pageTree}
      {...config}
    >
      {children}
    </DocsLayout>
  );
}
