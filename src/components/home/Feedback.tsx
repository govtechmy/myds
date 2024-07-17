import GradientLink from "@/components/GradientLink";
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
    <section
      id={props.id}
      className={cn(
        "container flex flex-col items-center gap-4 py-[84px]",
        props.className,
      )}
    >
      <h1 className="text-balance text-3xl font-semibold">
        {t("Home.title.feedback")}
      </h1>
      <p className="text-black-700 text-pretty text-center lg:w-2/3">
        {t.rich("Home.description.feedback", {
          email: (_) => {
            return (
              <a
                className="text-brand-600 font-medium underline"
                href={`mailto:${FEEDBACK_EMAIL}`}
              >
                {FEEDBACK_EMAIL}
              </a>
            );
          },
        })}
      </p>
      <GradientLink
        className="mt-4 h-[44px] gap-2 px-4"
        href={`mailto:${FEEDBACK_EMAIL}`}
      >
        <IconMailWhite />
        <span>{t("Home.action.feedback.send")}</span>
      </GradientLink>
    </section>
  );
}
