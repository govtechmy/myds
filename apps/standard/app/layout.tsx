import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { clx } from "@govtechmy/myds-react/utils";
import Masthead from "@/components/Masthead";

import type { Metadata } from "next";

interface MetadataProps {}

export async function generateMetadata({}: MetadataProps): Promise<Metadata> {
  return {
    title: "Panduan Reka Bentuk Perkhidmatan Digital Kerajaan",
    description: "Panduan Reka Bentuk Perkhidmatan Digital Kerajaan",
  };
}

export default async function RootLayout({
  params,
  children,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {
  return (
    <html className={clx("font-body")}>
      <body>
        <Masthead />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
