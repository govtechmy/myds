import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  ForwardRefExoticComponent,
  ComponentProps,
  forwardRef,
  ReactElement,
  JSXElementConstructor,
  cloneElement,
} from "react";
import { CrossIcon } from "../icons/cross";
import { clx } from "../utils";
import { button_cva } from "./button";
import { cva } from "class-variance-authority";

const Dialog = DialogPrimitive.Root;

/*========================================================================================================================*/

const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;

/*========================================================================================================================*/

interface DialogContentProps
  extends ComponentProps<typeof DialogPrimitive.Content> {
  dismissible?: boolean;
  onDismiss?: () => void;
}

const DialogContent: ForwardRefExoticComponent<DialogContentProps> = forwardRef(
  ({ className, children, dismissible, onDismiss, ...props }, ref) => {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={clx(
            "fixed inset-0 z-[900]",
            "h-full w-full",
            "bg-gray-700/60",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          )}
        />
        <DialogPrimitive.Content
          ref={ref}
          className={clx(
            "fixed left-[50%] top-[50%] z-[1000] translate-x-[-50%] translate-y-[-50%]",
            "w-full min-w-[300px] max-w-[calc(100dvw-36px)] sm:max-w-lg",
            "flex flex-col items-start",
            "rounded-lg shadow-lg",
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
          {dismissible && (
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
              <CrossIcon className="size-5 stroke-current" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  },
);

/*========================================================================================================================*/

interface DialogHeaderProps extends ComponentProps<"div"> {}

const DialogHeader: ForwardRefExoticComponent<DialogHeaderProps> = forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx(
          "flex w-full flex-col space-y-1.5",
          "p-[1.5rem]",
          "text-left",
          className,
        )}
        {...props}
      />
    );
  },
);

/*========================================================================================================================*/

interface DialogFooterProps extends ComponentProps<"div"> {
  border?: boolean;
  fillWidth?: boolean;
}

const DialogFooter: ForwardRefExoticComponent<DialogFooterProps> = forwardRef(
  ({ border, fillWidth, className, ...props }, ref) => (
    <div
      ref={ref}
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
  ),
);

/*========================================================================================================================*/

interface DialogTitleProps
  extends ComponentProps<typeof DialogPrimitive.Title> {}

const DialogTitle: ForwardRefExoticComponent<DialogTitleProps> = forwardRef(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={clx(
        "text-body-lg text-txt-black-900 font-semibold",
        className,
      )}
      {...props}
    />
  ),
);

/*========================================================================================================================*/
interface DialogDescriptionProps
  extends ComponentProps<typeof DialogPrimitive.Description> {}

const DialogDescription: ForwardRefExoticComponent<DialogDescriptionProps> =
  forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
      ref={ref}
      className={clx("text-txt-black-700 text-body-sm font-normal", className)}
      {...props}
    />
  ));

/*========================================================================================================================*/

/**
 * `DialogIcon` forwards a ref to its child and applies a class based on the button size.
 *
 * @component
 * @param {DialogIconProps} props - The properties for the DialogIcon component.
 * @param {ReactNode} props.children - The child element to which the ref will be forwarded.
 * @param {Ref} ref - The ref to be forwarded to the child element.
 * @returns {ReactElement} The cloned child element with the forwarded ref and applied class name.
 */

const dialog_icon_cva = cva("block stroke-[1.5px] size-[30px] mb-4 shrink-0", {
  variants: {
    variant: {
      default: "",
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
  variant: "default" | "primary" | "success" | "warning" | "danger";
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  className?: string;
}

const DialogIcon: ForwardRefExoticComponent<DialogIconProps> = forwardRef(
  ({ variant, children, className }, ref) => {
    return cloneElement(children, {
      ref,
      className: clx(dialog_icon_cva({ variant, className })),
    });
  },
);

/*========================================================================================================================*/

DialogContent.displayName = DialogPrimitive.Content.displayName;
DialogHeader.displayName = "DialogHeader";
DialogFooter.displayName = "DialogFooter";
DialogTitle.displayName = DialogPrimitive.Title.displayName;
DialogDescription.displayName = DialogPrimitive.Description.displayName;
DialogIcon.displayName = "DialogIcon";

/*========================================================================================================================*/

export {
  Dialog,
  DialogIcon,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};
export type {
  DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogIconProps,
};
