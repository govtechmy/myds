import Footer from "@/components/Footer";
import About from "@/components/home/About";
import Feedback from "@/components/home/Feedback";
import Hero from "@/components/home/Hero";
import PreviewContent from "@/components/home/PreviewContent";
import Timeline from "@/components/home/Timeline";
import Link from "next/link";

export default function HomePage() {
  const previewItems = [
    {
      tagKey: "Home.previewContent.items.1.tag",
      titleKey: "Home.previewContent.items.1.title",
      descriptionKey: "Home.previewContent.items.1.description",
      img: {
        svg: "/assets/content1/image.svg",
        webp: "/assets/content1/image.webp",
        altKey: "Home.previewContent.items.1.tag",
      },
    },
    {
      tagKey: "Home.previewContent.items.2.tag",
      titleKey: "Home.previewContent.items.2.title",
      descriptionKey: "Home.previewContent.items.2.description",
      img: {
        svg: "/assets/content2/image.svg",
        webp: "/assets/content2/image.webp",
        altKey: "Home.previewContent.items.2.tag",
      },
    },
    {
      tagKey: "Home.previewContent.items.3.tag",
      titleKey: "Home.previewContent.items.3.title",
      descriptionKey: "Home.previewContent.items.3.description",
      img: {
        svg: "/assets/content3/image.svg",
        webp: "/assets/content3/image.webp",
        altKey: "Home.previewContent.items.3.tag",
      },
    },
  ];

  return (
    <main className="border-otl-divider flex min-h-screen flex-col divide-y">
      <Hero />
      <About />
      {previewItems.map((item, i) => (
        <PreviewContent
          key={i}
          className="py-[3rem] md:py-[5.25rem]"
          data={{
            tag: item.tagKey,
            title: item.titleKey,
            description: item.descriptionKey,
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
        data={Array.from({ length: 7 }).map((_, i) => ({
          type: `type ${i + 1}`,
          year: `${2018}`,
          date: `date ${i + 1}`,
          title: `title ${i + 1}`,
          description: `description ${i + 1}`,
        }))}
      />
      <Feedback id="contribute" />

      <Footer
        ministry={"Kementerian Digital"}
        descriptionWithNewlines={`Aras 13, 14 dan 15, Blok Menara, Menara Usahawan
No. 18, Persiaran Perdana, Presint 2
Pusat Pentadbiran Kerajaan Persekutuan
62000 Putrajaya, Malaysia.`}
        links={
          [
            // {
            //   title: extract(messages, "Footer.designSystem"),
            //   links: [
            //     {
            //       name: extract(messages, "Footer.designStandards"),
            //       href: DESIGN_STANDARDS_URL,
            //     },
            //     {
            //       name: extract(messages, "Footer.figmaBeta"),
            //       href: FIGMA_BETA_URL,
            //     },
            //   ],
            // },
            // {
            //   title: extract(messages, "Footer.openSource"),
            //   links: [
            //     {
            //       name: extract(messages, "Footer.github"),
            //       href: GITHUB_REPO_URL,
            //     },
            //     {
            //       name: extract(messages, "Footer.figma"),
            //       href: FIGMA_URL,
            //     },
            //   ],
            // },
          ]
        }
      />
    </main>
  );
}
