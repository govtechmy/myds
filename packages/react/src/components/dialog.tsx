import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  ForwardRefExoticComponent,
  ComponentProps,
  forwardRef,
  ReactElement,
  JSXElementConstructor,
  cloneElement,
  ReactNode,
} from "react";
import { CrossIcon } from "../icons/cross";
import { clx } from "../utils";
import { button_cva } from "./button";
import { cva } from "class-variance-authority";

const Dialog = DialogPrimitive.Root;
type DialogProps = ComponentProps<typeof Dialog>;

/*========================================================================================================================*/

const DialogTrigger = DialogPrimitive.Trigger;
type DialogTriggerProps = ComponentProps<typeof DialogTrigger>;

/*========================================================================================================================*/

const DialogClose = DialogPrimitive.Close;
type DialogCloseProps = ComponentProps<typeof DialogClose>;

/*========================================================================================================================*/

interface DialogBodyProps
  extends ComponentProps<typeof DialogPrimitive.Content> {
  dismissible?: boolean;
  onDismiss?: () => void;
}

const DialogBody: ForwardRefExoticComponent<DialogBodyProps> = forwardRef(
  ({ className, children, dismissible = true, onDismiss, ...props }, ref) => {
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
            "fixed left-[50%] top-[50%] z-[1000] box-border translate-x-[-50%] translate-y-[-50%]",
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
          onInteractOutside={
            !dismissible ? (e) => e.preventDefault() : undefined
          }
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
              onClick={onDismiss}
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

interface DialogHeaderProps extends ComponentProps<"div"> {
  border?: boolean;
}

const dialog_header_cva = cva(
  "flex w-full flex-col text-left px-6 pt-6 pb-4.5",
  {
    variants: {
      border: {
        true: "border-otl-gray-200 border-b",
        false: "",
      },
    },
    defaultVariants: {
      border: false,
    },
  },
);

const DialogHeader: ForwardRefExoticComponent<DialogHeaderProps> = forwardRef(
  ({ className, border, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx(dialog_header_cva({ border }), className)}
        {...props}
      />
    );
  },
);
/*========================================================================================================================*/

interface DialogContentProps extends ComponentProps<"div"> {}

const DialogContent: ForwardRefExoticComponent<DialogContentProps> = forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={clx("w-full p-6", className)} {...props} />
    );
  },
);

/*========================================================================================================================*/

interface DialogFooterProps extends ComponentProps<"div"> {
  border?: boolean;
  align?: "start" | "full" | "end";
  action?: ReactNode;
}

const dialog_footer_cva = cva(
  ["flex w-full justify-between items-end p-6 gap-3"],
  {
    variants: {
      align: {
        start: "flex-row-reverse",
        full: "",
        end: "",
      },
      border: {
        true: "border-otl-gray-200 border-t",
        false: "",
      },
    },
    defaultVariants: {
      align: "end",
      border: false,
    },
  },
);
const dialog_action_cva = cva(["flex flex-row gap-3 grow"], {
  variants: {
    align: {
      start: "justify-end flex-row-reverse",
      full: "justify-center grow [&>*]:flex-1 [&>*]:place-content-center",
      end: "justify-end",
    },
  },
  defaultVariants: {
    align: "end",
  },
});

const DialogFooter: ForwardRefExoticComponent<DialogFooterProps> = forwardRef(
  ({ action, border, className, align = "end", ...props }, ref) => {
    return (
      <div className={clx(dialog_footer_cva({ border, align }), className)}>
        {action}
        <div
          ref={ref}
          className={clx(dialog_action_cva({ align }), className)}
          {...props}
        />
      </div>
    );
  },
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

const dialog_icon_cva = cva("block stroke-[1.5px] size-[30px] shrink-0", {
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

DialogBody.displayName = DialogPrimitive.Content.displayName;
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
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};
export type {
  DialogProps,
  DialogTriggerProps,
  DialogCloseProps,
  DialogBodyProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogIconProps,
};
