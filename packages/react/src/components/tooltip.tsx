import {
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
} from "react";
import {
  Tooltip as Root,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent as Content,
  TooltipPortal as Portal,
  TooltipArrow as Arrow,
} from "@radix-ui/react-tooltip";
import { clx } from "../utils";
import { cva } from "class-variance-authority";

const Tooltip: ForwardRefExoticComponent<ComponentProps<typeof Root>> =
  forwardRef((props, ref) => {
    return (
      <TooltipProvider delayDuration={200}>
        <Root {...props} />
      </TooltipProvider>
    );
  });
Tooltip.displayName = Tooltip.displayName;

interface TooltipContentProps
  extends ComponentProps<typeof Content>,
    ComponentPropsWithoutRef<typeof Portal> {}

const tooltip_content_cva = cva([
  "bg-bg-black-900 border-bg-black-900 shadow-context-menu text-txt-white z-50 min-w-[50px] max-w-[250px] rounded-sm border px-3 py-2 text-xs ",
  "animate-in fade-in duration-200 origin-tooltip-origin",
  "data-[side=top]:-mb-1 data-[side=top]:-translate-y-1",
  "data-[side=bottom]:-mt-1 data-[side=bottom]:translate-y-1",
  "data-[side=right]:-ml-1 data-[side=right]:translate-x-1",
  "data-[side=left]:-mr-1 data-[side=left]:-translate-x-1",
]);

const TooltipContent: ForwardRefExoticComponent<TooltipContentProps> =
  forwardRef(
    (
      { className, asChild, children, container, forceMount, ...props },
      ref,
    ) => (
      <Portal container={container} forceMount={forceMount}>
        <Content
          ref={ref}
          className={clx(tooltip_content_cva(), className)}
          {...props}
        >
          {children}
          <TooltipArrow />
        </Content>
      </Portal>
    ),
  );

TooltipContent.displayName = Content.displayName;

const TooltipArrow: ForwardRefExoticComponent<ComponentProps<typeof Arrow>> =
  forwardRef(({ className, ...props }, ref) => (
    <Arrow
      ref={ref}
      className={clx("fill-bg-black-900", className)}
      {...props}
    />
  ));
TooltipArrow.displayName = Arrow.displayName;

export { Tooltip, TooltipContent, TooltipTrigger };
