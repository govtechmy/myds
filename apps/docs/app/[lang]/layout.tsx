import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { I18nProvider as FumaI18n } from "fumadocs-ui/i18n";
import { RosettaProvider } from "@/locales/_client";
import { clx } from "@myds/react/utils";
import en from "@/locales/en";
import ms from "@/locales/ms";
import Masthead from "@/components/Masthead";
import { getRosetta } from "@/locales/_server";

import type { Metadata } from "next";

interface MetadataProps {
  params: { lang: "en" | "ms" };
}

export async function generateMetadata({
  params: { lang },
}: MetadataProps): Promise<Metadata> {
  const { t } = getRosetta(lang as "en" | "ms");

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      siteName: t("metadata.openGraph.url.index", {
        baseUrl: process.env.APP_URL,
      }),
      type: "website",
      images: [
        {
          url: t("metadata.openGraph.images.1.url"),
          alt: t("metadata.openGraph.images.1.alt"),
          width: 1200,
          height: 630,
        },
      ],
    },
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
    <html lang={params.lang} className={clx("font-body")}>
      <body>
        <FumaI18n
          locale={params.lang}
          locales={[
            {
              name: "English",
              locale: "en",
            },
            {
              name: "Bahasa Melayu",
              locale: "ms",
            },
          ]}
          // translations={{
          // }}
        >
          <Masthead lang={params.lang as "en" | "ms"} />
          <RosettaProvider locales={{ en, ms }}>
            <RootProvider>{children}</RootProvider>
          </RosettaProvider>
        </FumaI18n>
      </body>
    </html>
  );
}
