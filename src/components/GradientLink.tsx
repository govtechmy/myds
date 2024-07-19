import SimpleLinkState from "@/components/SimpleLinkState";
import {
  ButtonSize,
  getShadowClassnames,
  getTextSizeClassnames,
} from "@/lib/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  href: string;
  children: ReactNode;
  size: ButtonSize;
};

export default function GradientLink(props: Props) {
  return (
    <SimpleLinkState className={props.className}>
      <a
        href={props.href}
        target="_blank"
        className={cn(
          "flex h-full flex-row items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white shadow-button",
          "bg-gradient-button hover:bg-gradient-button-hovered focus:bg-gradient-button-focused",
          "border border-brand-600 hover:border-brand-700",
          getTextSizeClassnames(props.size),
          getShadowClassnames(),
        )}
      >
        {props.children}
      </a>
    </SimpleLinkState>
  );
}
