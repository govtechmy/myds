"use client";

import React, { useState, ComponentProps, FunctionComponent } from "react";
import { Button } from "@govtechmy/myds-react/button";
import { Toggle, ToggleThumb } from "./myds";
export * from "@govtechmy/myds-react/toggle";
export * from "@govtechmy/myds-react/button";
export * from "@govtechmy/myds-react/link";
export * from "@govtechmy/myds-react/skiplink";
export * from "@govtechmy/myds-react/accordion";
export * from "@govtechmy/myds-react/alert-dialog";
export * from "@govtechmy/myds-react/announce-bar";
export * from "@govtechmy/myds-react/toast";
export * from "@govtechmy/myds-react/callout";
export * from "@govtechmy/myds-react/breadcrumb";
export * from "@govtechmy/myds-react/checkbox";
export * from "@govtechmy/myds-react/label";
export * from "@govtechmy/myds-react/date-field";
export * from "@govtechmy/myds-react/date-picker";
export * from "@govtechmy/myds-react/daterange-picker";
export * from "@govtechmy/myds-react/dialog";
export * from "@govtechmy/myds-react/dropdown";
export * from "@govtechmy/myds-react/pill";
export * from "@govtechmy/myds-react/select";
export * from "@govtechmy/myds-react/input";
export * from "@govtechmy/myds-react/table";
import {
  Callout,
  CalloutTitle,
  CalloutContent,
  CalloutAction,
  CalloutClose,
} from "@govtechmy/myds-react/callout";
import { useToast } from "@govtechmy/myds-react/hooks";
import { DatePicker } from "@govtechmy/myds-react/date-picker";
import { DateRangePicker } from "@govtechmy/myds-react/daterange-picker";
import { Pill } from "@govtechmy/myds-react/pill";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@govtechmy/myds-react/dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogClose,
} from "@govtechmy/myds-react/alert-dialog";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@govtechmy/myds-react/select";

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

  return show ? (
    <Callout
      dismissible
      onDismiss={() => {
        alert("Action taken before callout gets dismissed");
        setShow(false);
        console.log("MYDS: Dismissed event captured!");
      }}
    >
      <CalloutTitle>{title}</CalloutTitle>
      <CalloutContent>{description}</CalloutContent>
      <CalloutAction>
        <CalloutClose>
          <Button variant="default-outline">Call to Action</Button>
        </CalloutClose>
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

export const PillWithTrailingXButton: FunctionComponent<
  ComponentProps<typeof Pill>
> = (props) => {
  return <Pill onDismiss={() => alert("Dismissing pill...")} {...props} />;
};

export const DismissibleDialog: FunctionComponent = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="primary-fill">Dismissible + onDismiss Dialog</Button>
      </DialogTrigger>
      <DialogBody
        dismissible={true}
        onDismiss={() => alert("Dialog dismissed...")}
      >
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <DialogContent>
          <DialogDescription>Dialog content goes here.</DialogDescription>
        </DialogContent>
        <DialogFooter>
          <DialogClose>
            <Button variant="default-outline">Secondary Action</Button>
          </DialogClose>
          <DialogClose>
            <Button variant="primary-fill">Primary Action</Button>
          </DialogClose>
        </DialogFooter>
      </DialogBody>
    </Dialog>
  );
};

export const DismissibleAlertDialog: FunctionComponent = () => {
  return (
    <AlertDialog variant="warning">
      <AlertDialogTrigger>
        <Button variant="primary-fill">
          Dismissible + onDismiss AlertDialog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        dismissible={true}
        onDismiss={() => alert("AlertDialog dismissed...")}
      >
        <AlertDialogTitle>AlertDialog Title</AlertDialogTitle>
        <AlertDialogDescription>
          AlertDialog content goes here.
        </AlertDialogDescription>

        <AlertDialogAction>
          <AlertDialogClose>
            <Button variant="default-outline">Secondary Action</Button>
          </AlertDialogClose>
          <AlertDialogClose>
            <Button variant="primary-fill">Primary Action</Button>
          </AlertDialogClose>
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const CustomValueSelect: FunctionComponent = () => {
  return (
    <Select multiple size="small" variant="outline">
      <SelectTrigger>
        <SelectValue label="Fruit">
          {(value) => (
            <div className="flex gap-1">
              {Array.isArray(value)
                ? value.map((v) => <Pill>{v}</Pill>)
                : value}
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  );
};
