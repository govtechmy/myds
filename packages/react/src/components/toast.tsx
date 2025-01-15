import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { clx } from "../utils";
import { cva, VariantProps } from "class-variance-authority";
import { FunctionComponent, ReactNode, useEffect } from "react";
import { CheckCircleIcon } from "../icons/check-circle";
import { InfoIcon } from "../icons/info";
import { WarningCircleIcon } from "../icons/warning-circle";
import { WarningIcon } from "../icons/warning";
import { CrossIcon } from "../icons/cross";
import { useToast } from "../hooks";

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
  description?: ReactNode;
};

/*========================================================================================================================*/

const ToastProvider = ToastPrimitives.Provider;

const ToastContext = React.createContext<{
  variant: ToastEvent["variant"];
  isHover: boolean;
  duration: number;
}>({
  variant: "message",
  isHover: false,
  duration: 5000,
});

/*========================================================================================================================*/

interface ToastViewportProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> {}

const toast_viewport_cva = cva([
  "fixed flex max-h-screen w-full overflow-hidden flex-col-reverse gap-1",
  "p-4.5 sm:p-6 bottom-0 right-0 sm:top-auto sm:flex-col md:max-w-sm z-[99]",
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
    VariantProps<typeof toast_cva> {
  variant: "message" | "success" | "info" | "warning" | "error";
}

const toast_cva = cva([
  "group pointer-events-auto relative bg-bg-dialog-active z-[99] p-3 flex w-full items-start gap-2 outline-none",
  "overflow-hidden rounded-md border shadow-card border-bg-washed-active transition-all data-[swipe=cancel]:translate-x-0 ",
  "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
  "data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out",
  "data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full",
  "data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
]);

const ToastRoot = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastRootProps
>(({ className, variant = "message", duration = 5000, ...props }, ref) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <ToastContext.Provider value={{ variant, isHover, duration }}>
      <ToastPrimitives.Root
        ref={ref}
        className={toast_cva({ className })}
        onPause={() => setIsHover(true)}
        onResume={() => setIsHover(false)}
        duration={duration}
        {...props}
      />
    </ToastContext.Provider>
  );
});
ToastRoot.displayName = ToastPrimitives.Root.displayName;

/*========================================================================================================================*/

// interface ToastActionProps
//   extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> {}

// const toast_action_cva = cva([
//   "hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40",
//   "group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive",
//   "group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
//   "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3",
//   "text-body-sm font-medium transition-colors focus:outline-none focus:ring-1",
//   "disabled:pointer-events-none disabled:opacity-50",
// ]);

// const ToastAction = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Action>,
//   ToastActionProps
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Action
//     ref={ref}
//     className={clx(toast_action_cva({ className }))}
//     {...props}
//   />
// ));
// ToastAction.displayName = ToastPrimitives.Action.displayName;
// type ToastActionElement = React.ReactElement<typeof ToastAction>;

/*========================================================================================================================*/

const toast_close_cva = cva([
  "text-txt-black-500 hover:text-txt-black-700 absolute right-1 top-1 rounded-md p-1",
  "focus:outline-none",
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

const toast_title_cva = cva(["text-body-sm font-semibold"], {
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
      className={clx("text-txt-black-700 text-body-sm", className)}
      {...props}
    />
  );
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;

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
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const { variant } = React.useContext(ToastContext);
  const className = toast_icon_cva({ variant, className: props.className });

  if (!variant || variant === "message") return null;

  return (
    <div ref={ref} role="img" {...props}>
      {
        {
          success: <CheckCircleIcon className={className} />,
          info: <InfoIcon className={className} />,
          warning: <WarningCircleIcon className={className} />,
          error: <WarningIcon className={className} />,
        }[variant]
      }
    </div>
  );
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
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const { variant, duration } = React.useContext(ToastContext);

  return (
    <div
      role="progressbar"
      ref={ref}
      className="animate-expire group-hover:paused absolute bottom-0 left-0 w-full group-hover:transition-none"
      style={{ animationDuration: `${duration}ms` }}
      {...props}
    >
      <div className={toast_progress_cva({ variant })} />
    </div>
  );
});

/*========================================================================================================================*/

const AutoToast: FunctionComponent<
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
> = (props) => {
  const { toasts, subscribe, unsubscribe } = useToast();

  useEffect(() => {
    subscribe();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ToastProvider>
      {toasts.map((toast, index) => (
        <ToastRoot
          key={props.id || index}
          variant={toast.variant || "message"}
          {...props}
        >
          <ToastIcon />
          <div className="space-y-1">
            <ToastTitle>{toast.title}</ToastTitle>
            {toast.description && (
              <ToastDescription>{toast.description}</ToastDescription>
            )}
          </div>
          <ToastClose />
          <ToastProgress />
        </ToastRoot>
      ))}

      <ToastViewport />
    </ToastProvider>
  );
};

export {
  ToastProvider,
  ToastViewport,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  AutoToast,
};
