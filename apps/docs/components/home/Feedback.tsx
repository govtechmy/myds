"use client";
import { Paragraph } from "@/components/Paragraph";
import IconMailWhite from "@/icons/mail-white";
import { Button, ButtonIcon } from "@myds/react/button";
import { clx } from "@myds/react/utils";
import Section from "../section";
import { useContext } from "react";
import { RosettaContext } from "@/locales/_client";

type Props = {
  id?: string;
  className?: string;
};

export default function Feedback(props: Props) {
  const { t } = useContext(RosettaContext);

  return (
    <Section
      className={clx(
        "flex flex-col items-center gap-8 py-[5.25rem]",
        props.className,
      )}
    >
      <div className="space-y-4.5 text-center">
        <h2 className="text-balance">{t("Home.title.feedback")}</h2>
        <Paragraph>
          {t("Home.description.feedback")}{" "}
          <a
            className="text-txt-primary inline font-medium underline"
            href="mailto:design@tech.gov.my"
          >
            design@tech.gov.my
          </a>
        </Paragraph>
      </div>
      <Button
        variant="reset"
        size="large"
        className="border-otl-primary-300 flex items-center gap-2 border bg-[linear-gradient(247.99deg,_#FFEAA1_0%,_#24B9F9_18.41%,_#1351F0_45.16%)] font-medium text-white outline-none"
      >
        <ButtonIcon>
          <IconMailWhite />
        </ButtonIcon>
        {t("Home.action.feedback.send")}
      </Button>
    </Section>
  );
}
