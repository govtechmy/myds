import React, {
  ComponentProps,
  createContext,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  useContext,
  useState,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clx } from "../utils";
import { CheckCircleIcon } from "../icons/check-circle";
import { CrossIcon, InfoIcon, WarningCircleIcon, WarningIcon } from "../icons";
import { Button, ButtonIcon } from "./button";

type CalloutVariant = "success" | "warning" | "info" | "danger";

const calloutVariants = cva(
  [
    "flex justify-between items-center",
    "p-3 rounded-md w-full",
    "has-[p]:items-start",
  ],
  {
    variants: {
      variant: {
        success: "bg-bg-success-50 text-txt-success",
        warning: "bg-bg-warning-50 text-txt-warning",
        info: "bg-bg-primary-50 text-txt-primary",
        danger: "bg-bg-danger-50 text-txt-danger",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

const iconMap: Record<CalloutVariant, ReactNode> = {
  success: <CheckCircleIcon className="mr-2 size-5 shrink-0" />,
  warning: <WarningCircleIcon className="mr-2 size-5 shrink-0" />,
  info: <InfoIcon className="mr-2 size-5 shrink-0" />,
  danger: <WarningIcon className="mr-2 size-5 shrink-0" />,
};

interface CalloutProps
  extends VariantProps<typeof calloutVariants>,
    ComponentProps<"div"> {
  dismissible?: boolean;
  onDismiss?: () => void;
}

const CalloutContext = createContext({
  show: true,
  handleDismiss: () => {},
});

const Callout: ForwardRefExoticComponent<CalloutProps> = forwardRef(
  (
    {
      className,
      variant = "info",
      children,
      dismissible = false,
      onDismiss,
      ...props
    },
    ref,
  ) => {
    const [show, setShow] = useState<boolean>(true);
    const handleDismiss = () => {
      if (onDismiss) onDismiss();
      setShow(false);
    };
    return (
      <CalloutContext.Provider value={{ show, handleDismiss }}>
        {show && (
          <div
            ref={ref}
            role="alert"
            className={calloutVariants({ variant, className })}
            {...props}
          >
            {variant && iconMap[variant]}
            <div className="flex grow items-center justify-between has-[p]:block">
              {children}
            </div>
            {dismissible && show && (
              <Button
                variant="default-ghost"
                size="small"
                className="text-txt-black-700 ml-2 p-0 hover:bg-transparent"
                iconOnly
                onClick={handleDismiss}
              >
                <ButtonIcon>
                  <CrossIcon className="h-5 w-5" />
                </ButtonIcon>
              </Button>
            )}
          </div>
        )}
      </CalloutContext.Provider>
    );
  },
);
Callout.displayName = "Callout";

const CalloutTitle: ForwardRefExoticComponent<ComponentProps<"p">> = forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={clx("text-sm font-semibold", className)}
        {...props}
      >
        {children}
      </p>
    );
  },
);
CalloutTitle.displayName = "CalloutTitle";

const CalloutContent: ForwardRefExoticComponent<ComponentProps<"p">> =
  forwardRef(({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={clx(
          "text-txt-black-900 pb-3 pt-1 text-sm font-normal",
          className,
        )}
        {...props}
      >
        {children}
      </p>
    );
  });
CalloutContent.displayName = "CalloutContent";

interface CalloutActionProps extends Omit<ComponentProps<"div">, "children"> {
  children: ReactNode | ((handleDismiss: () => void) => ReactNode);
}

const CalloutAction: ForwardRefExoticComponent<CalloutActionProps> = forwardRef(
  ({ className, children, ...props }, ref) => {
    const { handleDismiss } = useContext(CalloutContext);
    return (
      <div ref={ref} className={clx("flex gap-1", className)} {...props}>
        {typeof children === "function" ? children(handleDismiss) : children}
      </div>
    );
  },
);
CalloutAction.displayName = "CalloutAction";

export { Callout, CalloutTitle, CalloutContent, CalloutAction };
