import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/home-layout";
import { getDocsConfig } from "@/app/layout.config";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  const { config } = getDocsConfig();

  return <HomeLayout {...config}>{children}</HomeLayout>;
}
