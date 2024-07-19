import SimpleLinkState from "@/components/SimpleLinkState";
import {
  ButtonSize,
  getShadowClassnames,
  getTextSizeClassnames,
} from "@/lib/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = {
  className?: string;
  href: string;
  children: ReactNode;
  size: ButtonSize;
};

export default function BorderedLink(props: Props) {
  const t = useTranslations();

  return (
    <SimpleLinkState className={cn(props.className)}>
      <a
        href={props.href}
        target={props.href.startsWith("#") ? "_self" : "_blank"}
        className={cn(
          "flex h-full w-fit flex-row items-center justify-center gap-0.5",
          "rounded-lg",
          "border border-[#E4E4E7] hover:border-[#D4D4D8]",
          "bg-[#FFFFFF] hover:bg-[#FAFAFA]",
          "px-3 py-2",
          "hover:text-brand-900 text-center text-black-700",
          getTextSizeClassnames(props.size),
          getShadowClassnames(),
        )}
      >
        {props.children}
      </a>
    </SimpleLinkState>
  );
}
