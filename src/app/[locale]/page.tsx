import Timeline from "@/components/Timeline";
import About from "@/components/home/About";
import Feedback from "@/components/home/Feedback";
import Hero from "@/components/home/Hero";
import PreviewContent from "@/components/home/PreviewContent";
import { type MetadataProps } from "@/lib/page";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const TIMELINE_ITEMS = 7;

const previewItems = [
  {
    tagKey: "Home.previewContent.items.1.tag",
    titleKey: "Home.previewContent.items.1.title",
    descriptionKey: "Home.previewContent.items.1.description",
    img: {
      svg: "/preview/content2/image.svg",
      webp: "/preview/content2/image.webp",
      altKey: "Home.previewContent.items.1.tag",
    },
  },
  {
    tagKey: "Home.previewContent.items.2.tag",
    titleKey: "Home.previewContent.items.2.title",
    descriptionKey: "Home.previewContent.items.2.description",
    img: {
      svg: "/preview/content3/image.svg",
      webp: "/preview/content3/image.webp",
      altKey: "Home.previewContent.items.2.tag",
    },
  },
  {
    tagKey: "Home.previewContent.items.3.tag",
    titleKey: "Home.previewContent.items.3.title",
    descriptionKey: "Home.previewContent.items.3.description",
    img: {
      svg: "/preview/content4/image.svg",
      webp: "/preview/content4/image.webp",
      altKey: "Home.previewContent.items.3.tag",
    },
  },
];

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex w-full flex-col divide-y divide-washed-100 lg:py-0">
      {/* Wrapper container components in <article> to display full-width dividers */}
      <article>
        <Hero />
      </article>
      <article>
        <About id="about" className="py-[3rem] md:py-[5.25rem]" />
      </article>
      {previewItems.map((item, i) => (
        <article key={i}>
          <PreviewContent
            className="py-[3rem] md:py-[5.25rem]"
            data={{
              tag: t(item.tagKey),
              title: t(item.titleKey),
              description: t(item.descriptionKey),
              img: {
                ...item.img,
                alt: t(item.img.altKey),
              },
            }}
            reversed={(i + 1) % 2 === 0}
          />
        </article>
      ))}
      <article>
        <Timeline
          id="ourplan"
          cover={{
            tag: t("Home.timeline.cover.tag"),
            title: t("Home.timeline.cover.title"),
            description: t("Home.timeline.cover.description"),
          }}
          data={Array.from({ length: TIMELINE_ITEMS }).map((_, i) => ({
            type: t(`Home.timeline.items.${i + 1}.type`),
            year: t(`Home.timeline.items.${i + 1}.year`),
            date: t(`Home.timeline.items.${i + 1}.date`),
            title: t(`Home.timeline.items.${i + 1}.title`),
            description: t(`Home.timeline.items.${i + 1}.description`),
          }))}
        />
      </article>
      <article>
        <Feedback id="contribute" className="py-[3rem] lg:py-[5.25rem]" />
      </article>
    </main>
  );
}
