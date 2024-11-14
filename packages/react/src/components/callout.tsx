import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clx } from "../utils";
import { CheckCircleIcon } from "../icons/check-circle";
import { CrossIcon, InfoIcon, WarningCircleIcon, WarningIcon } from "../icons";

type CalloutVariant = 'success' | 'warning' | 'information' | 'error';

const CalloutContext = React.createContext<CalloutVariant>('information');

const calloutVariants = cva(
  ["p-3 rounded-md w-[400px] flex group"],
  {
    variants: {
      variant: {
        success: "bg-bg-success-50 text-txt-success",
        warning: "bg-bg-warning-50 text-txt-warning",
        information: "bg-bg-primary-50 text-txt-primary",
        error: "bg-bg-danger-50 text-txt-danger",
      },
    },
    defaultVariants: {
      variant: "information"
    }
  }
);

const iconMap: Record<CalloutVariant, React.ComponentType<{ className?: string }>> = {
  success: CheckCircleIcon,
  warning: WarningCircleIcon,
  information: InfoIcon,
  error: WarningIcon,
};

const Callout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof calloutVariants>
>(({ className, variant = 'information', children, ...props }, ref) => (
  <CalloutContext.Provider value={variant as CalloutVariant}>
    <div
      ref={ref}
      role="Callout"
      className={clx(calloutVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  </CalloutContext.Provider>
));
Callout.displayName = "Callout";

const CalloutInner1 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const variant = React.useContext(CalloutContext);
  const IconComponent = iconMap[variant];
  
  return (
    <div className="flex gap-2 items-start flex-1 group-has-[p]:self-start group-[:not([p])]:self-center">
      <div>
        <IconComponent className="h-5 w-5" />
      </div>
      <div className="text-sm space-y-1">
        {children}
      </div>
    </div>
  );
});
CalloutInner1.displayName = "CalloutInner1";

const CalloutInner1Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {  
  return (
    <div className="text-sm font-semibold">{children}</div>
  );
});
CalloutInner1Header.displayName = "CalloutInner1Header";

const CalloutInner1Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {  
  return (
    <p className="font-normal text-txt-black-900">{children}</p>
  );
});
CalloutInner1Content.displayName = "CalloutInner1Content";

const CalloutInner1Button = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {  
  return (
    <div className="flex gap-1 pt-2">
      {children}
    </div>
  );
});
CalloutInner1Button.displayName = "CalloutInner1Button";

const CalloutInner2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div className="flex items-center gap-2 group-has-[p]:self-start group-[:not([p])]:self-center">
    {children}
    <CrossIcon className="text-txt-black-500" />
  </div>
));
CalloutInner2.displayName = "CalloutInner2";

export { 
  Callout, 
  CalloutInner1, 
  CalloutInner2,
  CalloutInner1Header,
  CalloutInner1Content,
  CalloutInner1Button
};