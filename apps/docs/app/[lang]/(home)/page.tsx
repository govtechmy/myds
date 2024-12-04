import Footer from "@/components/Footer";
import About from "@/components/home/About";
import Feedback from "@/components/home/Feedback";
import Hero from "@/components/home/Hero";
import PreviewContent from "@/components/home/PreviewContent";
import Timeline from "@/components/home/Timeline";
import { links } from "@/lib/constant";
import { getRosetta } from "@/locales/_server";

export default async function HomePage({
  params,
}: {
  params: { lang: "en" | "ms" };
}) {
  const { t } = getRosetta(params.lang);
  const previewItems = [
    {
      tagKey: "Home.previewContent.items.1.tag",
      titleKey: "Home.previewContent.items.1.title",
      descriptionKey: "Home.previewContent.items.1.description",
      img: {
        svg: "/common/preview-1.svg",
        altKey: "Home.previewContent.items.1.tag",
      },
    },
    {
      tagKey: "Home.previewContent.items.2.tag",
      titleKey: "Home.previewContent.items.2.title",
      descriptionKey: "Home.previewContent.items.2.description",
      img: {
        svg: "/common/preview-2.svg",
        altKey: "Home.previewContent.items.2.tag",
      },
    },
    {
      tagKey: "Home.previewContent.items.3.tag",
      titleKey: "Home.previewContent.items.3.title",
      descriptionKey: "Home.previewContent.items.3.description",
      img: {
        svg: "/common/preview-3.svg",
        altKey: "Home.previewContent.items.3.tag",
      },
    },
  ];

  return (
    <>
      <main className="xl:border-otl-divider divide-otl-divider flex min-h-screen flex-col divide-y">
        <Hero />
        <About lang={params.lang} />
        {previewItems.map((item, i) => (
          <PreviewContent
            key={i}
            className="py-[3rem] md:py-[5.25rem]"
            data={{
              tag: t(item.tagKey),
              title: t(item.titleKey),
              description: t(item.descriptionKey),
              img: {
                ...item.img,
                alt: item.img.altKey,
              },
            }}
            reversed={(i + 1) % 2 === 0}
          />
        ))}

        <Timeline
          // TODO: Refactor this
          cover={{
            tag: t("Home.timeline.cover.tag"),
            title: t("Home.timeline.cover.title"),
            description: t("Home.timeline.cover.description"),
          }}
          data={Array.from({ length: 6 }).map((_, i) => ({
            type: t(`Home.timeline.items.${i + 1}.type`),
            year: t(`Home.timeline.items.${i + 1}.year`),
            date: t(`Home.timeline.items.${i + 1}.date`),
            title: t(`Home.timeline.items.${i + 1}.title`),
            description: t(`Home.timeline.items.${i + 1}.description`),
          }))}
        />
        <Feedback id="contribute" />

        <Footer
          ministry={t("common.names.kd")}
          descriptionWithNewlines={`Aras 13, 14 dan 15, Blok Menara, Menara Usahawan
No. 18, Persiaran Perdana, Presint 2
Pusat Pentadbiran Kerajaan Persekutuan
62000 Putrajaya, Malaysia.`}
          links={[
            {
              title: t("Footer.designSystem"),
              links: [
                {
                  name: t("Footer.designStandards"),
                  href: links.standard,
                },
                {
                  name: t("Footer.figmaBeta"),
                  href: links.figma,
                },
              ],
            },
            {
              title: t("Footer.openSource"),
              links: [
                {
                  name: t("Footer.github"),
                  href: links.github,
                },
                {
                  name: t("Footer.figma"),
                  href: links.figma,
                },
              ],
            },
          ]}
        />
      </main>
    </>
  );
}
