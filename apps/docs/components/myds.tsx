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
export * from "@govtechmy/myds-react/callout";
export * from "@govtechmy/myds-react/breadcrumb";
export * from "@govtechmy/myds-react/checkbox";
export * from "@govtechmy/myds-react/label";
export * from "@govtechmy/myds-react/date-field";
export * from "@govtechmy/myds-react/date-picker";
export * from "@govtechmy/myds-react/daterange-picker";
export * from "@govtechmy/myds-react/pill";
import {
  Callout,
  CalloutTitle,
  CalloutContent,
  CalloutAction,
} from "@govtechmy/myds-react/callout";
import { useToast } from "@govtechmy/myds-react/hooks";
import { DatePicker } from "@govtechmy/myds-react/date-picker";
import { DateRangePicker } from "@govtechmy/myds-react/daterange-picker";
import { Pill } from "@govtechmy/myds-react/pill";

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

interface DismissibleCalloutExampleProps {
  type: "basic" | "action";
  title?: string;
  description?: string;
}

export const DismissibleCalloutExample: FunctionComponent<
  DismissibleCalloutExampleProps
> = ({ type, title, description }) => {
  const [show, setShow] = useState(true);
  const handleDismiss = (dismiss: () => void) => {
    alert("Action taken before callout gets dismissed");
    dismiss();
  };
  return show ? (
    <Callout
      dismissible
      onDismiss={() => {
        setShow(false);
        console.log("MYDS: Dismissed event captured!");
      }}
    >
      <CalloutTitle>{title}</CalloutTitle>
      <CalloutContent>{description}</CalloutContent>
      <CalloutAction>
        {(dismiss) =>
          type === "action" && (
            <Button
              variant="default-outline"
              onClick={() => handleDismiss(dismiss)}
            >
              Call to Action
            </Button>
          )
        }
      </CalloutAction>
    </Callout>
  ) : (
    <Button variant={"default-outline"} onClick={() => setShow(true)}>
      Show Callout: {type}
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

const [NOW, YESTERDAY, TOMORROW] = [new Date(), new Date(), new Date()];
YESTERDAY.setDate(NOW.getDate() - 1);
TOMORROW.setDate(NOW.getDate() + 1);

export const CustomDisableDatePicker: FunctionComponent = () => {
  return (
    <DatePicker
      defaultValue={new Date()}
      disabled={(date) => date.getDate() === 13}
    />
  );
};

export const CustomDisableDateRangePicker: FunctionComponent = () => {
  return (
    <DateRangePicker
      defaultValue={{ from: YESTERDAY, to: TOMORROW }}
      disabled={(date) => date.getDate() === 13}
    />
  );
};

export { NOW, YESTERDAY, TOMORROW };
interface PillWithTrailingXButtonProps extends ComponentProps<typeof Pill> {}
export const PillWithTrailingXButton: FunctionComponent<
  PillWithTrailingXButtonProps
> = (props) => {
  return <Pill onDismiss={() => {}} {...props} />;
};
