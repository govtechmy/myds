import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import { CrossIcon } from "../icons/cross";
import { clx } from "../utils";
import { button_cva } from "./button";
import { cva } from "class-variance-authority";

const Dialog = DialogPrimitive.Root;

/*========================================================================================================================*/

const DialogTrigger = DialogPrimitive.Trigger;

/*========================================================================================================================*/
const DialogPortal = DialogPrimitive.Portal;

/*========================================================================================================================*/

const DialogClose = DialogPrimitive.Close;

/*========================================================================================================================*/

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={clx(
      "fixed inset-0 z-[900]",
      "h-full w-full",
      "bg-gray-700/60",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      className,
    )}
    {...props}
  />
));

/*========================================================================================================================*/

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
              button_cva({ variant: "default-outline", size: "small" }),
              "absolute right-4 top-4",
              "size-[2rem]",
              "grid place-content-center",
              "text-txt-black-900",
              "disabled:pointer-events-none",
            )}
          >
            <CrossIcon className="size-[20px] stroke-current" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});

/*========================================================================================================================*/

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

/*========================================================================================================================*/

const DialogFooter = ({
  className,
  border,
  fillWidth,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  border?: boolean;
  fillWidth?: boolean;
}) => (
  <div
    className={clx(
      "self-end",
      "w-full",
      "flex flex-row justify-end gap-[.75rem]",
      "p-[1.5rem]",
      border ? "border-otl-gray-200 border-t" : "pt-0",
      fillWidth && "[&>*]:flex-1 [&>*]:place-content-center",
      className,
    )}
    {...props}
  />
);

/*========================================================================================================================*/

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

/*========================================================================================================================*/

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    // TODO: twMerge() will incorrectly de-duplicate 'text-txt-black-700'
    className={`${clx("text-txt-black-700")} ${clx(`text-body-sm font-normal`, className)}`}
    {...props}
  />
));

/*========================================================================================================================*/

/**
 * `DialogIcon` forwards a ref to its child and applies a class based on the button size.
 *
 * @component
 * @param {DialogIconProps} props - The properties for the DialogIcon component.
 * @param {React.ReactNode} props.children - The child element to which the ref will be forwarded.
 * @param {React.Ref} ref - The ref to be forwarded to the child element.
 * @returns {React.ReactElement} The cloned child element with the forwarded ref and applied class name.
 */

const dialog_icon_cva = cva("block stroke-[1.5px] size-[30px] mb-4 shrink-0", {
  variants: {
    variant: {
      primary: "text-txt-primary stroke-txt-primary",
      success: "text-txt-success stroke-txt-success",
      warning: "text-txt-warning stroke-txt-warning",
      danger: "text-txt-danger stroke-txt-danger",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface DialogIconProps {
  variant: "primary" | "success" | "warning" | "danger";
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const DialogIcon: React.ForwardRefExoticComponent<DialogIconProps> =
  React.forwardRef(({ variant, children }, ref) => {
    return React.cloneElement(children, {
      ref,
      className: clx(dialog_icon_cva({ variant })),
    });
  });

DialogIcon.displayName = "DialogIcon";

/*========================================================================================================================*/

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
DialogContent.displayName = DialogPrimitive.Content.displayName;
DialogHeader.displayName = "DialogHeader";
DialogFooter.displayName = "DialogFooter";
DialogTitle.displayName = DialogPrimitive.Title.displayName;
DialogDescription.displayName = DialogPrimitive.Description.displayName;

/*========================================================================================================================*/

export {
  Dialog,
  DialogIcon,
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
