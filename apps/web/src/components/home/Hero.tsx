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
    // Disable left/right padding on the container
    <BorderedSection
      id={props.id}
      className={cn(
        "grid grid-cols-2 px-0",
        "md:max-lg:grid-cols-12",
        "lg:grid-cols-12",
        props.className,
      )}
    >
      <div
        className={cn(
          "col-span-full flex flex-col justify-start px-[1.125rem] pt-[3rem]",
          "md:max-lg:mx-auto md:max-lg:w-[600px]",
          "lg:col-span-5 lg:col-start-1 lg:justify-center lg:pl-[1.5rem] lg:pr-0 lg:pt-0",
          props.className,
        )}
      >
        <h5 className="text-[0.875rem] font-semibold uppercase leading-[1.25rem] tracking-[0.175rem] text-tag-300">
          {t("common.beta")}
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
      <picture className="col-span-full mt-[3rem] border-t border-washed-100 bg-[#FAFAFA] object-cover lg:col-span-6 lg:col-start-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pr-0">
        {/* TODO: Handle missing (webp) images better */}
        <source srcSet="/preview/hero/image.webp" type="image/webp" />
        <source srcSet="/preview/hero/image.svg" type="image/svg+xml" />
        <img
          src="/preview/hero/image.svg"
          alt="Hero"
          className={cn(
            "h-[18.75rem] w-full object-cover",
            "md:max-lg:h-[25rem]",
            "lg:h-[43.75rem]",
          )}
        />
      </picture>
    </BorderedSection>
  );
}
