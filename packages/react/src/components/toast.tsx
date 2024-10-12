import * as React from "react";
// import { XMarkIcon } from "@heroicons/react/20/solid";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { clx } from "../utils";
import { cva, VariantProps } from "class-variance-authority";
import { FunctionComponent, ReactNode, useEffect } from "react";
import { emitter } from "../utils/events";

/*========================================================================================================================*/

const ToastProvider = ToastPrimitives.Provider;

/*========================================================================================================================*/

interface ToastViewportProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> {}

const toast_viewport_cva = cva([
  "fixed top-0 flex max-h-screen w-full flex-col-reverse",
  "p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-sm",
]);

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  ToastViewportProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={clx(toast_viewport_cva({ className }))}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

/*========================================================================================================================*/

interface ToastRootProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>,
    VariantProps<typeof toast_cva> {}

const toast_cva = cva(
  [
    "group pointer-events-auto relative bg-bg-dialog-active z-[99] flex w-full items-center justify-between gap-2",
    "overflow-hidden rounded-md border shadow-card border-bg-washed-active transition-all data-[swipe=cancel]:translate-x-0 ",
    "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out",
    "data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full",
    "data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  ],
  {
    variants: {
      variant: {
        success: "border bg-background text-black",
        message: "bg-bg-dialog-active text-danger",
        info: "border-danger bg-[#fbe9e9] text-danger",
        warning: "border-danger bg-[#fbe9e9] text-danger",
        error: "border-danger bg-[#fbe9e9] text-danger",
      },
    },
  },
);

const ToastRoot = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastRootProps
>(({ className, variant = "message", ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={clx(toast_cva({ variant, className }))}
      {...props}
    />
  );
});
ToastRoot.displayName = ToastPrimitives.Root.displayName;

/*========================================================================================================================*/

interface ToastActionProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> {}

const toast_action_cva = cva([
  "hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40",
  "group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive",
  "group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
  "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3",
  "text-sm font-medium transition-colors focus:outline-none focus:ring-1",
  "disabled:pointer-events-none disabled:opacity-50",
]);

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  ToastActionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={clx(toast_action_cva({ className }))}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

/*========================================================================================================================*/

const toast_close_cva = cva([
  "text-foreground/50 hover:text-foreground absolute right-1 top-1 rounded-md p-1",
  "opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-1",
  "group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50",
  "group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
]);
const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={clx(toast_close_cva({ className }))}
    toast-close=""
    {...props}
  >
    {/* <XMarkIcon className="h-4 w-4 text-dim" /> */}
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

/*========================================================================================================================*/

const toast_title_cva = cva(["text-sm font-semibold"], {
  variants: {
    variant: {
      success: "text-txt-success",
      message: "text-txt-black-700",
      info: "text-txt-primary",
      warning: "text-txt-warning",
      error: "text-txt-danger",
    },
  },
});

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Title
      ref={ref}
      className={clx(toast_title_cva({ className }))}
      {...props}
    />
  );
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;

/*========================================================================================================================*/

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={clx("text-txt-black-700 text-sm", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

/*========================================================================================================================*/

export type ToastEvent = {
  variant: "success" | "message" | "info" | "warning" | "error";
  title: ReactNode;
  description: ReactNode;
};

const Toast: FunctionComponent = () => {
  const [toasts, setToasts] = React.useState<ToastEvent[]>([]);

  const handleAddToast = (toast: ToastEvent) => {};

  useEffect(() => {
    emitter.on("toast.add", handleAddToast);
    return () => {
      emitter.off("toast.add");
    };
  }, []);

  return (
    <ToastProvider>
      {/* {toasts.map((toast, index) => ( */}
      <ToastRoot defaultOpen forceMount duration={Infinity}>
        <div className="space-y-1 p-3">
          <ToastTitle>Hello World</ToastTitle>
          <ToastDescription>This is a description</ToastDescription>
        </div>
        <ToastClose />
      </ToastRoot>
      {/* ))} */}

      <ToastViewport />
    </ToastProvider>
  );
};

export {
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  Toast,
};
