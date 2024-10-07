"use client";
import { clx } from "@myds/react/utils";
import { Paragraph } from "../Paragraph";
import { FunctionComponent } from "react";
import { Button, ButtonIcon } from "@myds/react/button";
import IconFigma from "@/icons/figma";
import ArrowForward from "@/icons/arrow-forward";
import Section from "../section";

const Hero: FunctionComponent = () => {
  // const t = useTranslations();
  const t = (test: any) => "";

  return (
    <Section
      className={clx(
        "grid grid-cols-2 px-0",
        "md:max-lg:grid-cols-12",
        "lg:grid-cols-12 lg:pr-0",
        "py-0 md:py-0",
      )}
    >
      <div
        className={clx(
          "col-span-full flex flex-col justify-start gap-6 px-[1.125rem] pt-[3rem]",
          "md:max-lg:mx-auto md:max-lg:w-[600px]",
          "lg:col-span-5 lg:col-start-1 lg:justify-center lg:pl-6 lg:pr-0 lg:pt-0",
        )}
      >
        <h5 className="text-accent text-body-sm font-semibold uppercase tracking-[0.2em]">
          {t("common.beta")}
          Beta
        </h5>
        <h1 className="text-balance lg:text-start">
          {t("Home.title.hero")}
          Malaysia Government Design System (MYDS)
        </h1>
        <Paragraph className="lg:text-start">
          {t("Home.description.hero")}
          The design foundation for building official Malaysian government
          websites, MYDS provides beautiful pre-built components which
          streamline development and ensure consistency.
        </Paragraph>
        <div className="flex flex-row flex-wrap items-center gap-1.5 gap-x-[0.5rem]">
          <Button
            variant="reset"
            size="large"
            className="border-otl-primary-300 flex gap-2 border bg-[linear-gradient(247.99deg,_#FFEAA1_0%,_#24B9F9_18.41%,_#1351F0_45.16%)] font-medium text-white outline-none"
          >
            <ButtonIcon>
              <IconFigma />
            </ButtonIcon>
            Explore in Figma
          </Button>
          <Button variant="default-outline" size="large">
            {/* {t("common.contribute")} */}
            Get started
            <ButtonIcon>
              <ArrowForward />
            </ButtonIcon>
          </Button>
        </div>
      </div>

      <picture className="col-span-full mt-[3rem] overflow-hidden border-t object-cover lg:col-span-6 lg:col-start-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pr-0">
        <source srcSet="/assets/hero/image.webp" type="image/webp" />
        <source srcSet="/assets/hero/image.svg" type="image/svg+xml" />
        <div className="w-full overflow-hidden">
          <img
            src="/assets/hero/image.svg"
            alt="Hero"
            className={clx(
              "h-[18.75rem] w-full object-cover transition-transform duration-300 hover:scale-105",
              "md:max-lg:h-[25rem]",
              "lg:h-[43.75rem]",
            )}
          />
        </div>
      </picture>
    </Section>
  );
};

export default Hero;
