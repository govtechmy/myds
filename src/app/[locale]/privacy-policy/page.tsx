import { useTranslations } from "next-intl";

export default function Page({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  const t = useTranslations("Privacy");

  return (
    <main className="divide-y-washed-100 divide-y">
      <section className="relative">
        <div className="absolute -z-10 flex h-full w-full justify-center overflow-hidden">
          {/*  */}
        </div>
        <h1 className="font-poppins text-hmd py-16 text-center font-semibold">
          {t("header")}
        </h1>
      </section>

      <section className="border-washed-100 container border-x py-12 lg:py-[84px] xl:grid xl:grid-cols-12">
        <div className="text-black-700 col-span-10 col-start-2 space-y-6 whitespace-pre-line text-pretty text-sm">
          <p className="text-base font-semibold">{t("your_privacy")}</p>
          <p>{t("your_privacy_desc")}</p>
          <p className="text-base font-semibold">{t("collected_info")}</p>
          <p>{t("collected_info_desc")}</p>
          <p className="text-base font-semibold">{t("policy_change")}</p>
          <p>{t("policy_change_desc")}</p>
          <p className="pt-6 text-lg font-bold">{t("personal_data")}</p>
          <p className="text-base font-semibold">{t("personal_data_act")}</p>
          <p>
            {t.rich("personal_data_act_desc", {
              a: (chunks) => (
                <a
                  className="text-foreground [text-underline-position:from-font] hover:underline"
                  target="_blank"
                  rel="noopenner noreferrer"
                  href="http://www.pdp.gov.my"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
          <p>{t("last_update")}</p>
        </div>
      </section>
    </main>
  );
}
