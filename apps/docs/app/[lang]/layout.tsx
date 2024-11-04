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
          translations={
            {
              en: {
                search: "Search",
                searchNoResult: "No results found",
                toc: "On this page",
                tocNoHeadings: "No Headings",
                lastUpdate: "Last updated on",
                chooseLanguage: "Choose a language",
                nextPage: "Next",
                previousPage: "Previous",
                chooseTheme: "Theme",
                editOnGithub: "Edit on GitHub",
              },
              ms: {
                search: "Cari",
                searchNoResult: "Tiada hasil ditemui",
                toc: "Di halaman ini",
                tocNoHeadings: "Tiada Tajuk",
                lastUpdate: "Dikemaskini pada",
                chooseLanguage: "Pilih bahasa",
                nextPage: "Seterusnya",
                previousPage: "Sebelumnya",
                chooseTheme: "Tema",
                editOnGithub: "Edit di GitHub",
              },
            }[params.lang]
          }
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
