import { FIGMA_URL } from "@/constants";
import IconFigmaWhite from "@/icons/figma-white";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import GradientLink from "./GradientLink";

type Props = {
  className?: string;
};

export default function FigmaLink(props: Props) {
  const t = useTranslations();

  return (
    <GradientLink
      href={FIGMA_URL}
      className={cn(
        "h-max max-h-[44px] min-h-[32px] w-max hover:opacity-75",
        props.className,
      )}
    >
      <div className="flex h-full w-full flex-row items-center gap-2">
        <IconFigmaWhite className="h-full max-h-[24px] min-h-[18px]" />
        {t("common.figma.explore")}
      </div>
    </GradientLink>
  );
}
