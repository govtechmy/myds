import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/home-layout";
import Masthead from "@/components/Masthead";
import { getMYDSConfig } from "@/app/[lang]/layout.config";
import Image from "next/image";
import { Tag } from "@/components/Tag";

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
      <HomeLayout
        {...config}
        nav={{
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
              <Tag className="text-txt-accent text-xs">Beta</Tag>
            </div>
          ),
          enableSearch: false,
        }}
      >
        {children}
      </HomeLayout>
    </div>
  );
}
