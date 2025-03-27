import { FunctionComponent } from "react";
import { Link, Button, ButtonIcon } from "@/components/myds";
import { getMYDSConfig } from "@/app/[lang]/layout.config";
import { HomeLayout } from "fumadocs-ui/home-layout";
import Masthead from "@/components/Masthead";
import { ArrowBackIcon } from "@govtechmy/myds-react/icon";
import { getRosetta } from "@/locales/_server";

/**
 * Nextjs 404 page does not retrieve params server side (which is kind of stupid).
 * At the same time, not in favor of creating client components for the page.
 * Why? Because `useParams` is defective on 404 page.
 * How about `usePathname`? Risky; opens to return none of the accepted lang.
 * And if it does return none of the accepted lang, have to default to "ms".
 *
 * So, might as well, default lang="ms" from the start.
 */

/*
  To you, my young Padawan (and you, my young Jedi), 
  this code I entrust. 
  My time has come, but in your hands, its destiny now lies. 
  May the Force guide you. 💪
*/

const NotFound: FunctionComponent = () => {
  const { config } = getMYDSConfig("ms");

  return (
    <>
      <Masthead lang={"ms"} />
      <HomeLayout {...config}>
        <main className="flex min-h-[90vh] flex-grow flex-col items-center justify-center gap-6">
          <p className="font-heading text-bg-black-400 text-[100px]">404</p>
          <div className="space-y-4 text-center">
            <h2>Halaman tidak dijumpai</h2>
            <div className="space-y-1">
              <p className="text-txt-black-700 text-lg">Page not found</p>
              <p className="text-txt-black-700 text-lg">页面未找到</p>
              <p className="text-txt-black-700 text-lg">பக்கம் காணப்படவில்லை</p>
            </div>
          </div>
          <Button variant="default-outline" size="large" asChild>
            <Link href="/" underline="none" className="mt-10 truncate">
              <ButtonIcon>
                <ArrowBackIcon />
              </ButtonIcon>
              Kembali ke Halaman Utama
            </Link>
          </Button>
        </main>
      </HomeLayout>
    </>
  );
};

export function generateMetadata() {
  const { t } = getRosetta("ms");

  return {
    title: t("e404.title"),
    description: t("e404.description"),
    openGraph: {
      title: t("e404.title"),
      description: t("e404.description"),
      siteName: t("metadata.openGraph.url.index"),
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

export default NotFound;
