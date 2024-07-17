import Hero from "@/components/home/Hero";
import Highlight from "@/components/home/Highlight";
import PreviewContent from "@/components/home/PreviewContent";
import Feedback from "@/components/home/Feedback";
import { useTranslations } from "next-intl";
import Timeline from "@/components/Timeline";

const previewItems = [
  {
    tagKey: "Home.previewContent.items.1.tag",
    titleKey: "Home.previewContent.items.1.title",
    descriptionKey: "Home.previewContent.items.1.description",
    img: {
      src: "/preview/content2.svg",
    },
  },
  {
    tagKey: "Home.previewContent.items.2.tag",
    titleKey: "Home.previewContent.items.2.title",
    descriptionKey: "Home.previewContent.items.2.description",
    img: {
      src: "/preview/content3.svg",
    },
  },
  {
    tagKey: "Home.previewContent.items.3.tag",
    titleKey: "Home.previewContent.items.3.title",
    descriptionKey: "Home.previewContent.items.3.description",
    img: {
      src: "/preview/content4.svg",
    },
  },
];

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex w-full flex-col divide-y py-4 lg:py-0">
      <Hero id="about" className="pt-[3rem]" />
      <Highlight className="py-[3rem] lg:py-[5.25rem]" />
      {previewItems.map((item, i) => (
        <PreviewContent
          className="col-span-10 col-start-2 py-[84px]"
          key={i}
          data={{
            tag: t(item.tagKey),
            title: t(item.titleKey),
            description: t(item.descriptionKey),
            img: item.img,
          }}
          reversed={i % 2 !== 0}
        />
      ))}
      <Timeline
        id="ourplan"
        className="col-span-10 col-start-2"
        cover={{
          tag: t("Home.timeline.cover.tag"),
          title: t("Home.timeline.cover.title"),
          description: t("Home.timeline.cover.description"),
        }}
        data={Array.from({ length: 7 }).map((_, i) => ({
          type: t(`Home.timeline.items.${i + 1}.type`),
          date: t(`Home.timeline.items.${i + 1}.date`),
          title: t(`Home.timeline.items.${i + 1}.title`),
          description: t(`Home.timeline.items.${i + 1}.description`),
        }))}
      />
      <Feedback id="contribute" className="col-span-10 col-start-2 py-[84px]" />
    </main>
  );
}
