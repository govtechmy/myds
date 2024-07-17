import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  href: string;
  children: ReactNode;
};

export default function GradientLink(props: Props) {
  return (
    <a
      href={props.href}
      target="_blank"
      style={{
        background:
          "linear-gradient(74.55deg, #1351F0 61.78%, #24B9F9 84.42%, #FFEAA1 100%)",
      }}
      className={cn(
        "flex h-full flex-row items-center gap-1 rounded-lg border border-[#2563EB] px-3 py-2 text-sm font-medium text-white",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
}
