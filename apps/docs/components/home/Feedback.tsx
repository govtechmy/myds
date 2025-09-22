"use client";
import { Paragraph } from "@/components/Paragraph";
import { clx } from "@govtechmy/myds-react/utils";
import Section from "../section";
import { useContext } from "react";
import { RosettaContext } from "@/locales/_client";
import { Link } from "../myds";
import { links } from "@/lib/constant";

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
      <div id={props.id} className="space-y-4.5 text-center">
        <h2 className="text-balance">{t("Home.title.feedback")}</h2>
        <Paragraph>
          {t("Home.description.feedback_1")}
          <Link
            className="text-txt-primary inline font-medium underline"
            href="mailto:support@mydigital.gov.my"
            newTab
            underline="always"
          >
            support@mydigital.gov.my
          </Link>
          {t("Home.description.feedback_2")}
          <Link
            className="text-txt-primary inline font-medium underline"
            href={links.github_issue}
            newTab
            underline="always"
          >
            GitHub issue
          </Link>
        </Paragraph>
      </div>
      {/* <Button
        variant="unset"
        size="large"
        className="border-otl-primary-300 flex items-center gap-2 border bg-[linear-gradient(247.99deg,_#FFEAA1_0%,_#24B9F9_18.41%,_#1351F0_45.16%)] font-medium text-white outline-none"
      >
        <ButtonIcon>
          <IconMailWhite />
        </ButtonIcon>
        {t("Home.action.feedback.send")}
      </Button> */}
    </Section>
  );
}
