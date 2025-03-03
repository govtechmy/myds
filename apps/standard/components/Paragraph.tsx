import { clx } from "@govtechmy/myds-react/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export function Paragraph(props: Props) {
  return (
    <p
      className={clx(
        "text-txt-black-700 text-pretty text-[1rem] leading-[1.5rem]",
        props.className,
      )}
    >
      {props.children}
    </p>
  );
}
