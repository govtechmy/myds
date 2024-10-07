import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function BorderedSection(props: Props) {
  return (
    <section
      id={props.id}
      className={cn(
        "lg:border-washed-100 container lg:border-x",
        props.className,
      )}
    >
      {props.children}
    </section>
  );
}
