import { ComponentProps, forwardRef, ForwardRefExoticComponent } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva } from "class-variance-authority";

const Tooltip: ForwardRefExoticComponent<
  ComponentProps<typeof TooltipPrimitive.Root>
> = forwardRef(({ ...props }, ref) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props} />
    </TooltipPrimitive.Provider>
  );
});
const TooltipTrigger = TooltipPrimitive.Trigger;

const tooltip_content_cva = cva(
  [
    "px-3 py-2 z-50 flex min-w-12 max-w-64 border border-bg-black-900 shadow-context-menu overflow-hidden bg-bg-black-900 rounded-sm",
    "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "text-xs text-txt-white transition-none",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    "before:absolute before:-z-10 before:border-solid before:aspect-square before:block before:contents-[''] before:border-8 before:border-transparent",
  ],
  {
    variants: {
      side: {
        top: "before:-bottom-4 before:border-t-bg-black-900",
        right: "before:-left-4 before:border-r-bg-black-900",
        bottom: "before:-top-4 before:border-b-bg-black-900",
        left: "before:-right-4 before:border-l-bg-black-900",
      },
      align: {
        start: "",
        center: "",
        end: "",
      },
    },
    compoundVariants: [
      {
        side: ["top", "bottom"],
        align: ["start"],
        className: "before:left-2.5",
      },
      {
        side: ["top", "bottom"],
        align: ["center"],
        className: "before:left-1/2 before:-translate-x-2",
      },
      {
        side: ["top", "bottom"],
        align: ["end"],
        className: "before:right-2.5",
      },
      {
        side: ["left", "right"],
        align: ["start"],
        className: "before:top-2.5",
      },
      {
        side: ["left", "right"],
        align: ["center"],
        className: "before:top-1/2 before:-translate-y-2",
      },
      {
        side: ["left", "right"],
        align: ["end"],
        className: "before:bottom-2.5",
      },
    ],
  },
);

const TooltipContent: ForwardRefExoticComponent<
  ComponentProps<typeof TooltipPrimitive.Content>
> = forwardRef(
  (
    {
      className,
      side = "top",
      align = "center",
      sideOffset = 12,
      alignOffset = -8,
      children,
      ...props
    },
    ref,
  ) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        className={tooltip_content_cva({ side, align, className })}
        {...props}
      >
        {/* <span className={tooltip_caret_cva({ side, align })}>e </span> */}
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  ),
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent };
