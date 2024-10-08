import { Paragraph } from "@/components/Paragraph";
import { clx } from "@myds/react/utils";
import Section from "../section";
import { getRosetta } from "@/locales/_server";

type Props = {
  lang: "en" | "ms";
  id?: string;
  className?: string;
};

const dataItems = [
  {
    icon: "/assets/icons/about-icon1.svg",
    titleKey: "Home.about.items.1.title" as const,
    descriptionKey: "Home.about.items.1.description" as const,
  },
  {
    icon: "/assets/icons/about-icon2.svg",
    titleKey: "Home.about.items.2.title" as const,
    descriptionKey: "Home.about.items.2.description" as const,
  },
  {
    icon: "/assets/icons/about-icon3.svg",
    titleKey: "Home.about.items.3.title" as const,
    descriptionKey: "Home.about.items.3.description" as const,
  },
  {
    icon: "/assets/icons/about-icon4.svg",
    titleKey: "Home.about.items.4.title" as const,
    descriptionKey: "Home.about.items.4.description" as const,
  },
  {
    icon: "/assets/icons/about-icon5.svg",
    titleKey: "Home.about.items.5.title" as const,
    descriptionKey: "Home.about.items.5.description" as const,
  },
  {
    icon: "/assets/icons/about-icon6.svg",
    titleKey: "Home.about.items.6.title" as const,
    descriptionKey: "Home.about.items.6.description" as const,
  },
];

export default async function About(props: Props) {
  const { t } = getRosetta(props.lang);
  return (
    <Section
      className={clx(
        "grid grid-cols-1",
        "md:max-lg:grid-cols-2",
        "lg:grid-cols-12 lg:px-0",
        props.className,
      )}
    >
      <div
        className={clx(
          "col-span-full grid items-center gap-y-[2rem]",
          "md:max-lg:mx-auto md:max-lg:w-[600px] md:max-lg:gap-y-[3rem]",
          "lg:col-span-10 lg:col-start-2 lg:gap-y-[4.625rem]",
        )}
      >
        <div
          className={clx(
            "grid grid-cols-1 gap-y-[1.125rem]",
            "lg:grid-cols-10",
          )}
        >
          <h1
            className={clx(
              "col-span-full text-pretty text-start text-[1.5rem] font-semibold leading-[2rem]",
              "md:max-lg:text-center",
              "lg:col-span-6 lg:col-start-3 lg:text-center lg:text-[1.875rem] lg:leading-[2.375rem]",
            )}
          >
            {t("Home.title.about")}
          </h1>
          <Paragraph
            className={clx(
              "col-span-full",
              "md:max-lg:text-center",
              "lg:col-span-6 lg:col-start-3 lg:text-center",
            )}
          >
            {t("Home.description.about")}
          </Paragraph>
        </div>
        <div
          className={clx(
            "grid grid-cols-1 gap-y-[2rem]",
            "md:max-lg:grid-cols-2 md:max-lg:gap-[3rem]",
            "lg:grid-cols-3 lg:gap-[3rem]",
          )}
        >
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
                <div className="text-brand-700 text-balance text-[1rem] font-medium leading-[1.5rem]">
                  {t(item.titleKey)}
                </div>
                <p className="text-black-700 text-pretty text-[0.875rem] leading-[1.25rem] lg:text-center">
                  {t(item.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
