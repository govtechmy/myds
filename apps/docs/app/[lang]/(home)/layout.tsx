import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/home-layout";
import { getMYDSConfig } from "@/app/[lang]/layout.config";
import Masthead from "@/components/Masthead";

export default function Layout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: "en" | "ms" };
}): React.ReactElement {
  const { config } = getMYDSConfig(lang);

  return (
    <div>
      <Masthead lang={lang} />
      <HomeLayout {...config}>{children}</HomeLayout>
    </div>
  );
}
