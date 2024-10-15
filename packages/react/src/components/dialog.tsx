"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import * as React from "react";
import Cross from "../icons/cross";
import { clx } from "../utils";
import { variants as buttonVariants, sizes } from "./button";

const buttonCva = cva([], {
  variants: {
    variant: buttonVariants,
    size: sizes,
  },
});

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={clx(
      "fixed inset-0 z-[900]",
      "h-full w-full",
      "bg-bg-black-700",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      className,
    )}
    {...props}
  />
));

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    withCloseButton?: boolean;
  }
>(({ className, children, withCloseButton, ...props }, ref) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={clx(
          "fixed left-[50%] top-[50%] z-[1000] translate-x-[-50%] translate-y-[-50%]",
          "w-full max-w-lg",
          "flex flex-col items-start",
          "shadow-lg sm:rounded-lg",
          "border-otl-gray-200 border",
          "bg-bg-white",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          "duration-200",
          className,
        )}
        {...props}
      >
        {children}
        {withCloseButton && (
          <DialogPrimitive.Close
            className={clx(
              buttonCva({ variant: "default-outline", size: "small" }),
              "absolute right-4 top-4",
              "size-[2rem]",
              "grid place-content-center",
              "text-txt-black-900",
              "disabled:pointer-events-none",
            )}
          >
            <Cross className="size-[20px] stroke-current" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={clx(
      "flex flex-col space-y-1.5",
      "p-[1.5rem]",
      "text-left",
      className,
    )}
    {...props}
  />
);

const DialogFooter = ({
  className,
  withBorderTop,
  fillWidth,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  withBorderTop?: boolean;
  fillWidth?: boolean;
}) => (
  <div
    className={clx(
      "self-end",
      "w-full",
      withBorderTop && "border-otl-gray-200 border-t",
      "flex flex-row justify-end gap-[.75rem]",
      "p-[1.5rem]",
      !withBorderTop && "pt-0",
      fillWidth && "[&>*]:flex-1",
      className,
    )}
    {...props}
  />
);

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={clx(
      "text-body-lg text-txt-black-900",
      "font-semibold",
      className,
    )}
    {...props}
  />
));

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    // TODO: twMerge() will incorrectly de-duplicate 'text-txt-black-700'
    className={`${clx("text-txt-black-700")} ${clx(`text-body-sm className font-normal`)}`}
    {...props}
  />
));

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
DialogContent.displayName = DialogPrimitive.Content.displayName;
DialogHeader.displayName = "DialogHeader";
DialogFooter.displayName = "DialogFooter";
DialogTitle.displayName = DialogPrimitive.Title.displayName;
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
