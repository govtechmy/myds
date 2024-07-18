import BorderedSection from "@/components/BorderedSection";
import GradientLink from "@/components/GradientLink";
import { Paragraph } from "@/components/Paragraph";
import { FEEDBACK_EMAIL } from "@/constants";
import IconMailWhite from "@/icons/mail-white";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Props = {
  id?: string;
  className?: string;
};

export default async function Feedback(props: Props) {
  const t = useTranslations();

  return (
    <BorderedSection
      id={props.id}
      className={cn("flex flex-col items-center py-[5.25rem]", props.className)}
    >
      <h1 className="text-balance text-[1.875rem] font-semibold leading-[2.375rem]">
        {t("Home.title.feedback")}
      </h1>
      <Paragraph className="mt-[1.125rem] text-center">
        {t.rich("Home.description.feedback", {
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
        })}
      </Paragraph>
      <GradientLink
        size="medium"
        className="mt-[2rem] h-[44px]"
        href={`mailto:${FEEDBACK_EMAIL}`}
      >
        <IconMailWhite />
        <span>{t("Home.action.feedback.send")}</span>
      </GradientLink>
    </BorderedSection>
  );
}
