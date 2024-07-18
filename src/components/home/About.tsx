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

// TODO: Rename 'content1' to 'about'

const dataItems: DataItem[] = [
  {
    icon: "/icons/content1-icon1.svg",
    titleKey: "Home.content1.items.1.title",
    descriptionKey: "Home.content1.items.1.description",
  },
  {
    icon: "/icons/content1-icon2.svg",
    titleKey: "Home.content1.items.2.title",
    descriptionKey: "Home.content1.items.2.description",
  },
  {
    icon: "/icons/content1-icon3.svg",
    titleKey: "Home.content1.items.3.title",
    descriptionKey: "Home.content1.items.3.description",
  },
  {
    icon: "/icons/content1-icon4.svg",
    titleKey: "Home.content1.items.4.title",
    descriptionKey: "Home.content1.items.4.description",
  },
  {
    icon: "/icons/content1-icon5.svg",
    titleKey: "Home.content1.items.5.title",
    descriptionKey: "Home.content1.items.5.description",
  },
  {
    icon: "/icons/content1-icon6.svg",
    titleKey: "Home.content1.items.6.title",
    descriptionKey: "Home.content1.items.6.description",
  },
];

export default async function About(props: Props) {
  const t = useTranslations();

  return (
    <BorderedSection
      id={props.id}
      className={cn("grid grid-cols-2 lg:grid-cols-12", props.className)}
    >
      <div className="col-span-full flex grid flex-col items-center gap-y-[2rem] lg:col-span-10 lg:col-start-2 lg:gap-y-[4.625rem]">
        <div className="flex flex-col items-start gap-y-[1.125rem] lg:items-center">
          <h1 className="text-balance text-[1.5rem] font-semibold leading-[2rem] lg:text-start lg:text-[1.875rem] lg:leading-[2.375rem]">
            {t("Home.title.content1")}
          </h1>
          <Paragraph className="lg:text-center">
            {t("Home.description.content1")}
          </Paragraph>
        </div>
        <div className="grid auto-rows-auto grid-cols-1 gap-y-[2rem] lg:grid-cols-3 lg:gap-[3rem]">
          {dataItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-start gap-[1.125rem] lg:flex-col lg:items-center"
            >
              <img src={item.icon} className="h-[3.375rem] w-[3.375rem]" />
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
