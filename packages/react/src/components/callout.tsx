import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clx } from "../utils";
import { CheckCircleIcon } from "../icons/check-circle";
import { CrossIcon, InfoIcon, WarningCircleIcon, WarningIcon } from "../icons";
import { Button } from "./button";

type CalloutVariant = "success" | "warning" | "information" | "error";

const calloutVariants = cva(["p-3 rounded-md w-[400px] flex"], {
  variants: {
    variant: {
      success: "bg-bg-success-50 text-txt-success",
      warning: "bg-bg-warning-50 text-txt-warning",
      information: "bg-bg-primary-50 text-txt-primary",
      error: "bg-bg-danger-50 text-txt-danger",
    },
  },
  defaultVariants: {
    variant: "information",
  },
});

const iconMap: Record<
  CalloutVariant,
  React.ComponentType<{ className?: string }>
> = {
  success: CheckCircleIcon,
  warning: WarningCircleIcon,
  information: InfoIcon,
  error: WarningIcon,
};

const Callout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof calloutVariants>
>(({ className, variant = "information", children, ...props }, ref) => {
  const IconComponent = iconMap[variant as CalloutVariant];

  return (
    <div
      ref={ref}
      role="Alert"
      className={clx(
        calloutVariants({ variant }),
        "justify-between",
        "items-center",
        "has-[p]:items-start",
        className,
      )}
      {...props}
    >
      <div className="mr-2">
        <IconComponent></IconComponent>
      </div>
      <div
        className={clx(
          "flex",
          "has-[p]:block",
          "grow items-center justify-between",
        )}
      >
        {children}
      </div>
      <Button
        variant="default-ghost"
        className="text-txt-black-700 ml-2 p-0 hover:bg-transparent"
      >
        <CrossIcon className="h-5 w-5"></CrossIcon>
      </Button>
    </div>
  );
});
Callout.displayName = "Callout";

const CalloutTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return <div className="text-sm font-semibold">{children}</div>;
});
CalloutTitle.displayName = "CalloutTitle";

const CalloutContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p className="text-txt-black-900 pb-3 pt-1 text-sm font-normal">
      {children}
    </p>
  );
});
CalloutContent.displayName = "CalloutContent";

const CalloutButton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return <div className="flex gap-1">{children}</div>;
});
CalloutButton.displayName = "CalloutButton";

export { Callout, CalloutTitle, CalloutContent, CalloutButton };
