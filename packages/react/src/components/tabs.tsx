import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { clx } from "../utils";
import { cva } from "class-variance-authority";

/*========================================================================================================================*/

interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  variant: "pill" | "enclosed" | "line";
  size: "small" | "medium";
}

const TabsContext = React.createContext<TabsProps>({
  variant: "line",
  size: "small",
});

/*========================================================================================================================*/

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>((props, ref) => (
  <TabsContext.Provider value={props}>
    <TabsPrimitive.Root ref={ref} {...props} />
  </TabsContext.Provider>
));
Tabs.displayName = TabsPrimitive.Root.displayName;

/*========================================================================================================================*/

const tabs_list_cva = cva(
  "relative flex flex-row items-center space-x-1 justify-start font-medium",
  {
    variants: {
      variant: {
        pill: ["bg-transparent rounded-full"],
        enclosed: "bg-bg-washed rounded-md",
        line: "before:h-0.5 before:content-[''] before:absolute before:-bottom-2.5 before:bg-otl-gray-200 before:left-0 before:right-0 mb-2",
      },
      width: {
        full: "w-full",
        fit: "w-fit",
      },
    },
    defaultVariants: {
      variant: "line",
    },
  },
);

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  width?: "fit" | "full";
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, width = "fit", ...props }, ref) => {
  const { variant } = React.useContext(TabsContext);

  return (
    <TabsPrimitive.List
      ref={ref}
      className={tabs_list_cva({ variant, width, className })}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

/*========================================================================================================================*/

const tabs_trigger_cva = cva(
  [
    "relative flex gap-1 items-center text-txt-black-500 hover:text-txt-black-900 data-[state=active]:text-txt-black-900 outline-none border border-transparent",
    "focus:ring-2 focus:ring-fr-primary space",
  ],
  {
    variants: {
      variant: {
        pill: [
          "bg-transparent data-[state=active]:bg-bg-washed-active transition-colors rounded-full",
          "before:h-auto before:w-[1px] before:content-[''] before:absolute before:-left-1 before:bg-otl-gray-300 before:first-of-type:hidden",
        ],
        enclosed: [
          "data-[state=active]:bg-bg-dialog-active rounded-md transition-[border] data-[state=active]:border-otl-gray-200",
          "before:h-auto before:w-[1px] before:content-[''] before:absolute before:-left-1 before:bg-otl-gray-300 before:first-of-type:hidden",
        ],
        line: "rounded-md before:content-[''] before:absolute before:-bottom-2.5 before:left-0 before:right-0 before:data-[state=active]:bg-primary-600 before:h-0.5 before:transition-all before:duration-200",
      },
      size: {
        small: "text-body-sm py-1.5 px-2.5",
        medium: "text-body-md py-2 px-3",
      },
    },
    compoundVariants: [
      {
        variant: ["pill", "enclosed"],
        size: "small",
        className: "before:py-2",
      },
      {
        variant: ["pill", "enclosed"],
        size: "medium",
        className: " before:py-2.5",
      },
      {
        variant: "line",
        size: "small",
        className: "before:mx-2.5",
      },
      {
        variant: "line",
        size: "medium",
        className: "before:mx-3",
      },
    ],
    defaultVariants: {
      variant: "line",
      size: "small",
    },
  },
);

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { variant, size } = React.useContext(TabsContext);
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={tabs_trigger_cva({ variant, size, className })}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

/*========================================================================================================================*/

const tab_icon_cva = cva(
  "block shrink-0 stroke-inherit text-inherit stroke-[1.5px]",
  {
    variants: {
      size: {
        small: "size-4",
        medium: "size-5",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

interface TabsIconProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const TabsIcon: React.ForwardRefExoticComponent<TabsIconProps> =
  React.forwardRef(({ children }, ref) => {
    const { size } = React.useContext(TabsContext);

    return React.cloneElement(children, {
      ref,
      className: clx(tab_icon_cva({ size })),
    });
  });

TabsIcon.displayName = "TabsIcon";
/*========================================================================================================================*/

interface TabsCounterProps extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
  ref?: React.LegacyRef<HTMLSpanElement | null>;
}

const TabsCounter: React.ForwardRefExoticComponent<TabsCounterProps> =
  React.forwardRef(({ children, ...props }, ref) => {
    const { size } = React.useContext(TabsContext);
    return (
      <span
        ref={ref}
        className={clx(
          size === "medium" && "text-body-md",
          size === "small" && "text-body-sm",
          "text-txt-primary",
        )}
        {...props}
      >
        {children}
      </span>
    );
  });

TabsCounter.displayName = "TabsCounter";

/*========================================================================================================================*/

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={clx("text-txt-black-700", className)}
    {...props}
  />
));

TabsContent.displayName = TabsPrimitive.Content.displayName;

/*========================================================================================================================*/

export { Tabs, TabsIcon, TabsCounter, TabsList, TabsTrigger, TabsContent };
