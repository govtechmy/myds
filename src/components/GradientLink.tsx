import SimpleLinkState from "@/components/SimpleLinkState";
import {
  ButtonSize,
  getShadowClassnames,
  getSizeClassnames,
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
        style={{
          background:
            "linear-gradient(74.55deg, #1351F0 61.78%, #24B9F9 84.42%, #FFEAA1 100%)",
        }}
        className={cn(
          "flex h-full flex-row items-center gap-1 rounded-lg border border-[#2563EB] px-3 py-2 text-sm font-medium text-white shadow-button",
          getSizeClassnames(props.size),
          getShadowClassnames(),
        )}
      >
        {props.children}
      </a>
    </SimpleLinkState>
  );
}
