"use client";

import { MyDSConfig } from "@/app/[lang]/layout.config";
import { Tabs, TabsList, TabsTrigger } from "@govtechmy/myds-react/tabs";
import { usePathname, useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface DocsTabProps {
  menus: MyDSConfig["menu"];
}

const DocsTab: FunctionComponent<DocsTabProps> = ({ menus }) => {
  const pathname = usePathname();
  const { push } = useRouter();

  return (
    <Tabs
      defaultValue={menus.find((menu) => pathname.includes(menu.url))?.url}
      variant="enclosed"
      size="small"
      onValueChange={(value) => push(value)}
    >
      <TabsList width="full" className="my-1">
        {menus.map((menu) => (
          <TabsTrigger
            key={menu.url}
            className="w-full justify-center"
            value={menu.url}
          >
            {menu.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default DocsTab;
