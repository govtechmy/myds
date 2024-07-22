import BorderedSection from "@/components/BorderedSection";
import { Paragraph } from "@/components/Paragraph";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Props = {
  id?: string;
  className?: string;
};

type DataItem = {
  icon: string;
  titleKey: string;
  descriptionKey: string;
};

const dataItems: DataItem[] = [
  {
    icon: "/icons/about-icon1.svg",
    titleKey: "Home.about.items.1.title",
    descriptionKey: "Home.about.items.1.description",
  },
  {
    icon: "/icons/about-icon2.svg",
    titleKey: "Home.about.items.2.title",
    descriptionKey: "Home.about.items.2.description",
  },
  {
    icon: "/icons/about-icon3.svg",
    titleKey: "Home.about.items.3.title",
    descriptionKey: "Home.about.items.3.description",
  },
  {
    icon: "/icons/about-icon4.svg",
    titleKey: "Home.about.items.4.title",
    descriptionKey: "Home.about.items.4.description",
  },
  {
    icon: "/icons/about-icon5.svg",
    titleKey: "Home.about.items.5.title",
    descriptionKey: "Home.about.items.5.description",
  },
  {
    icon: "/icons/about-icon6.svg",
    titleKey: "Home.about.items.6.title",
    descriptionKey: "Home.about.items.6.description",
  },
];

export default async function About(props: Props) {
  const t = useTranslations();

  return (
    <BorderedSection
      id={props.id}
      className={cn(
        "grid grid-cols-2 lg:grid-cols-12 lg:px-0",
        props.className,
      )}
    >
      <div className="col-span-full flex grid flex-col items-center gap-y-[2rem] lg:col-span-10 lg:col-start-2 lg:gap-y-[4.625rem]">
        <div className="grid grid-cols-1 gap-y-[1.125rem] lg:grid-cols-10">
          <h1 className="col-span-full text-balance text-start text-[1.5rem] font-semibold leading-[2rem] lg:col-span-6 lg:col-start-3 lg:text-center lg:text-[1.875rem] lg:leading-[2.375rem]">
            {t("Home.title.about")}
          </h1>
          <Paragraph className="col-span-full lg:col-span-6 lg:col-start-3 lg:text-center">
            {t("Home.description.about")}
          </Paragraph>
        </div>
        <div className="grid auto-rows-auto grid-cols-1 gap-y-[2rem] lg:grid-cols-3 lg:gap-[3rem]">
          {dataItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-start gap-[1.125rem] lg:flex-col lg:items-center"
            >
              <img
                src={item.icon}
                className="h-[3.375rem] w-[3.375rem] transition-all"
                alt={t(item.titleKey)}
              />
              <div className="flex flex-col items-start gap-[0.5rem] lg:items-center">
                <div className="text-balance text-[1rem] font-medium leading-[1.5rem] text-brand-700">
                  {t(item.titleKey)}
                </div>
                <p className="text-pretty text-[0.875rem] leading-[1.25rem] text-black-700 lg:text-center">
                  {t(item.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BorderedSection>
  );
}
