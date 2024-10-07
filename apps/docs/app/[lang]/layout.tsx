import "@/app/global.css";
import { Inter } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";
import { I18nProvider } from "fumadocs-ui/i18n";
import { clx } from "@myds/react/utils";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  params,
  children,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {
  return (
    <html lang={params.lang} className={clx(inter.className, "font-body")}>
      <body>
        <I18nProvider
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
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
