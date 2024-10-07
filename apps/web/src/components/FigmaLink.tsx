import GradientLink from "@/components/GradientLink";
import { FIGMA_URL } from "@/constants";
import IconFigma from "@/icons/figma";
import { ButtonSize } from "@/lib/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Props = {
  className?: string;
  size: ButtonSize;
};

export default function FigmaLink(props: Props) {
  const t = useTranslations();

  return (
    <GradientLink
      href={FIGMA_URL}
      size={props.size}
      className={cn("h-max max-h-[44px] min-h-[32px] w-max", props.className)}
    >
      <div className="flex h-full w-full flex-row items-center gap-x-[0.375rem]">
        <IconFigma className="h-full max-h-[24px] min-h-[18px]" />
        {t("common.figma.explore")}
      </div>
    </GradientLink>
  );
}
