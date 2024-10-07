"use client";
import { Paragraph } from "@/components/Paragraph";
import IconMailWhite from "@/icons/mail-white";
import { Button, ButtonIcon } from "@myds/react/button";
import { clx } from "@myds/react/utils";
import Section from "../section";

type Props = {
  id?: string;
  className?: string;
};

export default async function Feedback(props: Props) {
  // const t = useTranslations();
  const t = (e: string) => e;

  return (
    <Section
      className={clx(
        "flex flex-col items-center gap-8 py-[5.25rem]",
        props.className,
      )}
    >
      <div className="space-y-[18px] text-center">
        <h2 className="text-balance">
          {/* {t("Home.title.feedback")} */}
          Help us improve
        </h2>
        <Paragraph>
          Write your constructive feedback to design@tech.gov.my
          {/* {t.rich("Home.description.feedback", {
          email: (_) => {
            return (
              <a
                className="font-medium text-brand-600 underline"
                href={`mailto:${FEEDBACK_EMAIL}`}
              >
                {FEEDBACK_EMAIL}
              </a>
            );
          },
        })} */}
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
