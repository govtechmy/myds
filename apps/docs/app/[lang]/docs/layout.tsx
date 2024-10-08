import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { getMYDSConfig } from "@/app/[lang]/layout.config";
import { source } from "@/app/[lang]/source";

export default function Layout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: "en" | "ms" };
}) {
  const baseOptions = getMYDSConfig(lang);
  return (
    <DocsLayout tree={source.pageTree[lang]} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
