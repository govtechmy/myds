import BorderedLink from "@/components/BorderedLink";
import FigmaLink from "@/components/FigmaLink";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Props = {
  id?: string;
  className?: string;
};

export default function Hero(props: Props) {
  const t = useTranslations();

  return (
    <section
      id={props.id}
      className={cn(
        "flex w-full flex-col items-center gap-8 lg:flex-row",
        props.className,
      )}
    >
      <div className="flex max-h-full basis-1/2 flex-col justify-center gap-6 lg:items-start">
        <h5 className="text-tag-300 uppercase tracking-widest">
          {t("Home.tag.beta")}
        </h5>
        <h1 className="text-balance text-3xl font-semibold lg:text-start lg:text-4xl">
          {t("Home.title.hero")}
        </h1>
        <p className="text-black-700 text-pretty lg:text-start">
          {t("Home.description.hero")}
        </p>
        <div className="mt-2 flex flex-row items-center gap-4">
          <FigmaLink className="h-[44px]" />
          <BorderedLink href="#contribute" className="h-[44px] w-[106px]">
            {t("common.contribute")}
          </BorderedLink>
        </div>
      </div>
      <img
        src="/preview/hero.svg"
        alt="Hero"
        className="max-h-full w-full basis-1/2 bg-[#FAFAFA] lg:w-1/2"
      />
    </section>
  );
}
