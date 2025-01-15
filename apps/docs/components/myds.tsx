"use client";

import React, { useState, ComponentProps, FunctionComponent } from "react";
import { Button } from "@govtechmy/myds-react/button";
import { Toggle, ToggleThumb } from "./myds";
export * from "@govtechmy/myds-react/toggle";
export * from "@govtechmy/myds-react/button";
export * from "@govtechmy/myds-react/link";
export * from "@govtechmy/myds-react/skiplink";
export * from "@govtechmy/myds-react/accordion";
export * from "@govtechmy/myds-react/announce-bar";
export * from "@govtechmy/myds-react/toast";
import { useToast } from "@govtechmy/myds-react/hooks";

interface PreviewButtonProps extends ComponentProps<typeof Button> {
  pantun: string;
}
interface ToastTriggerButtonProps extends ComponentProps<typeof Button> {
  toastVariant: "message" | "success" | "info" | "warning" | "error";
  text?: string;
}

export const PreviewButton: FunctionComponent<PreviewButtonProps> = (props) => {
  return <Button {...props} onClick={() => alert(props.pantun)} />;
};

export const ToastTriggerButton: FunctionComponent<ToastTriggerButtonProps> = (
  props,
) => {
  const { toast } = useToast();
  return (
    <Button
      {...props}
      onClick={() => {
        toast({
          variant: props.toastVariant,
          title: "Hello, world!",
          description: "this is a description",
        });
      }}
    >
      {props.text}
    </Button>
  );
};

interface PreviewToggleProps extends ComponentProps<typeof Toggle> {}

export const ControlledToggle: FunctionComponent<PreviewToggleProps> = (
  props,
) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <p>State: {isChecked ? "On" : "Off"}</p>
      <Toggle
        checked={isChecked}
        onCheckedChange={(checked) => setIsChecked(checked)}
        {...props}
      >
        <ToggleThumb />
      </Toggle>
    </div>
  );
};
