import { clx } from "@govtechmy/myds-react/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export function Tag(props: Props) {
  return (
    <div
      className={clx(
        "text-txt-primary font-semibold uppercase leading-[1.25rem] tracking-[0.175rem]",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
