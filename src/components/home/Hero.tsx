import BorderedLink from "@/components/BorderedLink";
import BorderedSection from "@/components/BorderedSection";
import FigmaLink from "@/components/FigmaLink";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Paragraph } from "../Paragraph";

type Props = {
  id?: string;
  className?: string;
};

export default function Hero(props: Props) {
  const t = useTranslations();

  return (
    <BorderedSection
      id={props.id}
      className={cn("grid grid-cols-2 lg:grid-cols-12", props.className)}
    >
      <div className="col-span-full flex flex-col justify-start lg:col-span-5 lg:col-start-1 lg:justify-center">
        <h5 className="uppercase tracking-widest text-tag-300">
          {t("Home.tag.beta")}
        </h5>
        <h1 className="mt-[1.5rem] text-balance text-[2rem] font-semibold leading-[2.5rem] lg:text-start lg:text-[2.25rem] lg:leading-[2.75rem]">
          {t("Home.title.hero")}
        </h1>
        <Paragraph className="mt-[1.5rem] lg:text-start">
          {t("Home.description.hero")}
        </Paragraph>
        <div className="mt-[2.25rem] flex flex-row items-center gap-x-[0.5rem]">
          <FigmaLink size="medium" className="h-[2.75rem]" />
          <BorderedLink
            size="medium"
            href="#contribute"
            className="h-[2.75rem] w-[6.625rem]"
          >
            {t("common.contribute")}
          </BorderedLink>
        </div>
      </div>
      <img
        src="/preview/hero.svg"
        alt="Hero"
        className="col-span-full mt-[3rem] w-full bg-[#FAFAFA] lg:col-span-6 lg:col-start-7 lg:mt-0"
      />
    </BorderedSection>
  );
}
