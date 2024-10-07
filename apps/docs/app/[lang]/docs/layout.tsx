import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/[lang]/layout.config";
import { source } from "@/app/[lang]/source";

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <DocsLayout tree={source.pageTree[params.lang]} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
