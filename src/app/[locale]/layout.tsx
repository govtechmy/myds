import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Masthead from "@/components/Masthead";
import {
  DESIGN_STANDARDS_URL,
  FIGMA_BETA_URL,
  FIGMA_URL,
  GITHUB_REPO_URL,
} from "@/constants";
import { extract } from "@/lib/i18n";
import { type MetadataProps } from "@/lib/page";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export async function generateMetadata({
  params: { locale },
}: MetadataProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: t("openGraph.url.index"),
      type: "website",
      images: [
        {
          url: t("openGraph.images.1.url"),
          alt: t("openGraph.images.1.alt"),
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          inter.className,
          poppins.variable,
          "flex min-w-[320px] flex-col",
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Masthead />
            <Header locale={locale} />
            <div className="flex-1">{children}</div>
            <Footer
              ministry={extract(messages, "common.name")}
              descriptionWithNewlines={extract(messages, "Footer.address")}
              links={[
                {
                  title: extract(messages, "Footer.designSystem"),
                  links: [
                    {
                      name: extract(messages, "Footer.designStandards"),
                      href: DESIGN_STANDARDS_URL,
                    },
                    {
                      name: extract(messages, "Footer.figmaBeta"),
                      href: FIGMA_BETA_URL,
                    },
                  ],
                },
                {
                  title: extract(messages, "Footer.openSource"),
                  links: [
                    {
                      name: extract(messages, "Footer.github"),
                      href: GITHUB_REPO_URL,
                    },
                    {
                      name: extract(messages, "Footer.figma"),
                      href: FIGMA_URL,
                    },
                  ],
                },
              ]}
            />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
