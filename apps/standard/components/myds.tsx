"use client";

import { Button } from "@govtechmy/myds-react/button";
import { ComponentProps, FunctionComponent } from "react";
export * from "@govtechmy/myds-react/button";
export * from "@govtechmy/myds-react/link";

interface PreviewButtonProps extends ComponentProps<typeof Button> {
  pantun: string;
}

export const PreviewButton: FunctionComponent<PreviewButtonProps> = (props) => {
  return <Button {...props} onClick={() => alert(props.pantun)} />;
};
