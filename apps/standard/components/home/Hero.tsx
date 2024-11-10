"use client";
import { clx } from "@myds/react/utils";
import { Paragraph } from "../Paragraph";
import { FunctionComponent, useContext } from "react";
import { Button, ButtonIcon } from "@myds/react/button";
import IconFigma from "@/icons/figma";
import ArrowForward from "@/icons/arrow-forward";
import Section from "../section";
import { RosettaContext } from "@/locales/_client";
import { Link } from "../myds";
import { links } from "@/lib/constant";

const Hero: FunctionComponent = () => {
  const { t } = useContext(RosettaContext);

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
        </h5>
        <h1 className="text-balance lg:text-start">{t("Home.title.hero")}</h1>
        <Paragraph className="lg:text-start">
          {t("Home.description.hero")}
        </Paragraph>
        <div className="flex flex-row flex-wrap items-center gap-1.5 gap-x-[0.5rem]">
          <Button
            variant="unset"
            size="large"
            className="border-otl-primary-300 flex gap-2 border bg-[linear-gradient(247.99deg,_#FFEAA1_0%,_#24B9F9_18.41%,_#1351F0_45.16%)] font-medium text-white outline-none"
            asChild
          >
            <Link newTab href={links.figma} underline="none">
              <ButtonIcon>
                <IconFigma />
              </ButtonIcon>
              {t("common.figma.explore")}
            </Link>
          </Button>
          <Button variant="default-outline" size="large" asChild>
            <Link href="#contribute" underline="none">
              {t("common.contribute")}
              <ButtonIcon>
                <ArrowForward />
              </ButtonIcon>
            </Link>
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