import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SimpleLinkState(props: Props) {
  return (
    <div
      className={cn(
        "transition-transform active:translate-y-[0.0625rem]",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
