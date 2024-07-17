import { useTranslations } from "next-intl";

export default function Disclaimer({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  const t = useTranslations("Disclaimer");

  return (
    <main className="divide-y-washed-100 divide-y">
      <section className="relative">
        <div className="absolute -z-10 flex h-full w-full justify-center overflow-hidden">
          {/*  */}
        </div>
        <h1 className="text-hmd py-16 text-center font-semibold">
          {t("header")}
        </h1>
      </section>

      <section className="border-washed-100 container border-x py-12 lg:py-[84px] xl:grid xl:grid-cols-12">
        <div className="text-black-700 col-span-10 col-start-2 space-y-6 whitespace-pre-line text-pretty text-sm">
          <p>{t("desc")}</p>
        </div>
      </section>
    </main>
  );
}
