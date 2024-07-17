import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Props = {
  className?: string;
};

type DataItem = {
  icon: string;
  titleKey: string;
  descriptionKey: string;
};

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

export default async function Content1(props: Props) {
  const t = useTranslations();

  return (
    <section
      className={cn(
        "container flex flex-col items-center gap-8",
        props.className,
      )}
    >
      <div className="flex flex-col items-start gap-4 lg:items-center">
        <h1 className="text-balance text-3xl font-semibold lg:text-start">
          {t("Home.title.content1")}
        </h1>
        <p className="text-black-700 text-pretty lg:w-2/3 lg:text-center">
          {t("Home.description.content1")}
        </p>
      </div>
      <div className="grid w-full auto-rows-auto grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-y-12">
        {dataItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-start gap-4 lg:flex-col lg:items-center"
          >
            <img src={item.icon} className="h-[54px] w-[54px]" />
            <div className="flex flex-col items-start gap-1 lg:items-center">
              <div className="text-brand-700 font-medium">
                {t(item.titleKey)}
              </div>
              <p className="text-black-700 text-pretty lg:text-center">
                {t(item.descriptionKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
