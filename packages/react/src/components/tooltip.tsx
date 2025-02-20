import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
} from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clx } from "../utils";

const Tooltip: ForwardRefExoticComponent<
  ComponentProps<typeof TooltipPrimitive.Root>
> = forwardRef((props, ref) => {
  return (
    <TooltipPrimitive.Provider delayDuration={300}>
      <TooltipPrimitive.Root {...props} />
    </TooltipPrimitive.Provider>
  );
});

const TooltipTrigger: ForwardRefExoticComponent<
  ComponentProps<typeof TooltipPrimitive.Trigger>
> = forwardRef(({ className, ...props }, ref) => {
  return <TooltipPrimitive.Trigger {...props} ref={ref} />;
});

const TooltipContent: ForwardRefExoticComponent<
  ComponentProps<typeof TooltipPrimitive.Content> &
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Portal>
> = forwardRef(
  ({ className, asChild, children, container, forceMount, ...props }, ref) => (
    <TooltipPrimitive.Portal container={container} forceMount={forceMount}>
      <TooltipPrimitive.Content
        ref={ref}
        asChild={false}
        className={clx(
          "bg-bg-black-900 border-bg-black-900 shadow-context-menu text-txt-white data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade z-50 min-w-[50px] max-w-[250px] rounded-sm border px-3 py-2 text-xs transition-none will-change-[transform,opacity]",
          className,
        )}
        {...props}
      >
        {children}
        <TooltipArrow />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  ),
);

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={clx("fill-bg-black-900", className)}
    {...props}
  />
));

export { Tooltip, TooltipContent, TooltipTrigger };
