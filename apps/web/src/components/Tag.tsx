import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export function Tag(props: Props) {
  return (
    <div
      className={cn(
        "text-brand-600 text-[0.875rem] font-semibold uppercase leading-[1.25rem] tracking-[0.175rem]",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
