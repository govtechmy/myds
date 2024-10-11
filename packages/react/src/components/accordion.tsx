import React, { FunctionComponent } from "react";
import * as AccordionBase from "@radix-ui/react-accordion";
import { clx } from "../utils";
import ChevronDown from "../icons/chevron-down";

/**
 * Props for Accordion component.
 * @typedef AccordionProps
 * @property {type} propName - Description of propName
 */
interface AccordionProps {
  // Define your props here
}

/**
 * Accordion component description.
 * @component
 * @example
 * <Accordion propName="value" />
 */
// const Accordion: FunctionComponent<AccordionProps> = (
//   {
//     // Destructure your props here
//   },
// ) => {
//   return <div>{/* Add your component JSX here */}</div>;
// };

type AccordionRootProps = React.ComponentPropsWithoutRef<
  typeof AccordionBase.Root
> & {
  children: React.ReactNode;
  className?: string;
};

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof AccordionBase.Root>,
  AccordionRootProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionBase.Root className={className} {...props} ref={forwardedRef}>
    {children}
  </AccordionBase.Root>
));

AccordionRoot.displayName = "AccordionRoot";

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionBase.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionBase.Item>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionBase.Item
    className={clx(
      "border-otl-gray-200 bg-bg-white mt-px overflow-hidden border-b first:mt-0",
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
        "text-txt-black-900 font-body bg-bg-white group flex flex-1 cursor-pointer items-center justify-between py-4 text-base font-medium leading-none outline-none hover:underline",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDown
        className="text-txt-black-500 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
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
      "text-txt-black-700 font-body pb-4 pr-9 text-sm font-normal",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div>{children}</div>
  </AccordionBase.Content>
));

export { AccordionTrigger, AccordionContent, AccordionRoot, AccordionItem };
