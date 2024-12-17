import React, { FunctionComponent } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { TooltipContentProps } from "@radix-ui/react-tooltip";
import { clx } from "../utils";

const TooltipProvider = TooltipPrimitive.TooltipProvider;
const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipPortal = TooltipPrimitive.Portal;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, asChild, children, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    side="top"
    align="start"
    asChild={false}
    className={clx(
      "bg-bg-black-900 border-bg-black-900 shadow-context-menu text-txt-white data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade z-50 min-w-[50px] max-w-[250px] rounded-sm border px-3 py-2 will-change-[transform,opacity]",
      className,
    )}
    {...props}
  >
    {children}
  </TooltipPrimitive.Content>
));

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    className={clx("fill-bg-black-900", className)}
    {...props}
  />
));

/**
 * Props for Tooltip component.
 * @typedef TooltipProps
 */

interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>,
    Omit<TooltipContentProps, "content"> {
  content: React.ReactNode;
  container?: React.ComponentPropsWithoutRef<
    typeof TooltipPrimitive.Portal
  >["container"];
  forceMount?: true;
  className?: string;
}

/**
 * Tooltip component.
 */
const Tooltip: FunctionComponent<TooltipProps> = ({
  container,
  defaultOpen,
  delayDuration,
  disableHoverableContent,
  onOpenChange,
  open,
  content,
  children,
  className,
  forceMount,
  ...contentProps
}) => {
  const rootProps = {
    open,
    defaultOpen,
    onOpenChange,
    delayDuration,
    disableHoverableContent,
  };

  // Check if the classname prop passed contain `bg-*` class, then return the color applied.
  const getCssBgColor = (property: "fill" | "border", className?: string) => {
    if (!className) {
      return null;
    }
    const bgClassRegex = /\bbg-([a-zA-Z0-9-_]+)\b/;
    const match = className.match(bgClassRegex);

    return match ? `${property}-${match[1]}` : null;
  };

  return (
    <TooltipRoot {...rootProps}>
      <TooltipTrigger className="min-h-6 min-w-6" asChild>
        {children}
      </TooltipTrigger>
      <TooltipPortal container={container} forceMount={forceMount}>
        <TooltipContent className={className} {...contentProps}>
          {content}
          <TooltipArrow className={clx(getCssBgColor("fill", className))} />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  );
};

export {
  Tooltip,
  TooltipProvider,
  TooltipRoot,
  TooltipArrow,
  TooltipPortal,
  TooltipContent,
  TooltipTrigger,
};
