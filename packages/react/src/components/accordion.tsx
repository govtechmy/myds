import React from "react";
import * as AccordionBase from "@radix-ui/react-accordion";
import { clx } from "../utils";
import { ChevronDownIcon } from "../icons/chevron-down";

/**
 * Props for Accordion component.
 * @typedef AccordionProps
 * @property {type} propName - Description of propName
 */

/**
 * Accordion component description.
 * @component
 * @example
 * <Accordion propName="value" />
 */

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionBase.Root>,
  React.ComponentProps<typeof AccordionBase.Root>
>((props, forwardedRef) => (
  <AccordionBase.Root {...props} ref={forwardedRef} />
));

Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionBase.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionBase.Item>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionBase.Item
    className={clx(
      "border-otl-gray-200 bg-bg-white group mt-px overflow-hidden border-b first:mt-0",
      "focus:ring-fr-primary outline-none focus-within:relative focus-within:z-10 focus-within:shadow-lg",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </AccordionBase.Item>
));

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionBase.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionBase.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionBase.Header className="flex">
    <AccordionBase.Trigger
      className={clx(
        "text-txt-black-700 font-body bg-bg-white hover:text-txt-black-900 data-[state=open]:text-txt-black-900 group flex flex-1 cursor-pointer items-center justify-between py-4 text-base font-medium leading-none hover:underline",
        "outline-none focus-visible:underline",
        "data-[disabled]:text-txt-black-disabled data-[disabled]:cursor-not-allowed data-[disabled]:hover:no-underline",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-txt-black-500 group-data-[disabled]:text-txt-black-disabled transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </AccordionBase.Trigger>
  </AccordionBase.Header>
));

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionBase.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionBase.Content>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionBase.Content
    className={clx(
      "text-txt-black-700 font-body text-body-sm relative overflow-hidden font-normal transition-all duration-300",
      "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up",
      "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="overflow-hidden pb-4 pr-9">{children}</div>
  </AccordionBase.Content>
));

export { AccordionTrigger, AccordionContent, Accordion, AccordionItem };
