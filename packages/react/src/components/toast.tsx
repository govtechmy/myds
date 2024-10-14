import * as React from "react";
// import { XMarkIcon } from "@heroicons/react/20/solid";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { clx } from "../utils";
import { cva, VariantProps } from "class-variance-authority";
import { FunctionComponent, ReactNode, useEffect } from "react";
import { emitter } from "../utils/events";
import { CheckCircleIcon } from "../icons/check-circle";
import { InfoIcon } from "../icons/info";
import { WarningCircleIcon } from "../icons/warning-circle";
import { WarningIcon } from "../icons/warning";
import { CrossIcon } from "../icons/cross";

/*========================================================================================================================*/

export type ToastEvent = {
  variant:
    | "success"
    | "message"
    | "info"
    | "warning"
    | "error"
    | null
    | undefined;
  title: ReactNode;
  description: ReactNode;
};

/*========================================================================================================================*/

const ToastProvider = ToastPrimitives.Provider;
// const ToastProvider: FunctionComponent<{ children: ReactNode }> = ({
//   children,
// }) => {
//   return (
//     <ToastContext.Provider value={{ toasts: [] }}>
//       <ToastPrimitives.Provider>{children}</ToastPrimitives.Provider>
//     </ToastContext.Provider>
//   );
// };

const ToastContext = React.createContext<{
  variant: ToastEvent["variant"];
  isHover: boolean;
}>({
  variant: "message",
  isHover: false,
});

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
    "group pointer-events-auto relative bg-bg-dialog-active z-[99] p-3 flex w-full items-start gap-2",
    "overflow-hidden rounded-md border shadow-card border-bg-washed-active transition-all data-[swipe=cancel]:translate-x-0 ",
    "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out",
    "data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full",
    "data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  ],
  {
    variants: {
      variant: {
        success: "",
        message: "",
        info: "",
        warning: "",
        error: "",
      },
    },
  },
);

const ToastRoot = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastRootProps
>(({ className, variant = "message", ...props }, ref) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <ToastContext.Provider value={{ variant, isHover }}>
      <ToastPrimitives.Root
        ref={ref}
        className={clx(toast_cva({ variant, className }))}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        {...props}
      />
    </ToastContext.Provider>
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
  "text-txt-black-500 hover:text-txt-black-700 absolute right-1 top-1 rounded-md p-1",
  "focus:outline-none focus:ring-1",
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
    <CrossIcon className="size-5 shrink-0" />
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
  const { variant } = React.useContext(ToastContext);
  return (
    <ToastPrimitives.Title
      ref={ref}
      className={clx(toast_title_cva({ variant, className }))}
      {...props}
    />
  );
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;

/*========================================================================================================================*/

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Description
      ref={ref}
      className={clx("text-txt-black-700 text-sm", className)}
      {...props}
    />
  );
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

/*========================================================================================================================*/

const toast_icon_cva = cva("size-5 shrink-0", {
  variants: {
    variant: {
      success: "text-txt-success",
      info: "text-txt-primary",
      warning: "text-txt-warning",
      error: "text-txt-danger",
      message: "text-txt-black-700",
    },
  },
});

const ToastIcon = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  {}
>(({}, ref) => {
  const { variant } = React.useContext(ToastContext);
  switch (variant) {
    case "success":
      return <CheckCircleIcon className={toast_icon_cva({ variant })} />;
    case "info":
      return <InfoIcon className={toast_icon_cva({ variant })} />;
    case "warning":
      return <WarningCircleIcon className={toast_icon_cva({ variant })} />;
    case "error":
      return <WarningIcon className={toast_icon_cva({ variant })} />;
    default:
      return null;
  }
});
ToastIcon.displayName = "ToastIcon";

/*========================================================================================================================*/

const toast_progress_cva = cva("w-full h-1", {
  variants: {
    variant: {
      success: "bg-txt-success",
      info: "bg-txt-primary",
      warning: "bg-txt-warning",
      error: "bg-txt-danger",
      message: "bg-bg-washed",
    },
  },
});

const ToastProgress = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  { duration: number }
>(({}, ref) => {
  const { variant, isHover } = React.useContext(ToastContext);
  const [progress, setProgress] = React.useState(100);

  useEffect(() => {
    if (isHover) return;

    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 100 / (100 / 5), 0));
    }, 100);

    return () => clearInterval(interval);
  }, [isHover]);

  return (
    // <div className="text-bg-black-700 absolute bottom-0 left-0 h-1 w-full">
    <div className="text-bg-black-700 absolute bottom-0 left-0 w-full group-hover:transition-none">
      {isHover + ""}
      {progress + ""}
      <div
        className={toast_progress_cva({ variant })}
        style={{
          width: `${progress}%`,
          transition: "width 5s linear",
          // animation: "decrease-width 10s linear forwards",
          // transition: "background-color 0.3s",

          // animation: "progress 5s linear",
          animationPlayState: isHover ? "paused" : "running",
        }}
      />
    </div>
  );
});

/*========================================================================================================================*/

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
      <ToastRoot defaultOpen forceMount duration={Infinity} variant={"error"}>
        <ToastIcon />
        <div className="space-y-1">
          <ToastTitle>Hello World</ToastTitle>
          <ToastDescription>This is a description</ToastDescription>
        </div>
        <ToastClose />
        <ToastProgress duration={5} />
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
