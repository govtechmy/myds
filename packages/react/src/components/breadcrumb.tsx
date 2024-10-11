import { Slot } from "@radix-ui/react-slot";
import React, { ComponentProps, ForwardRefExoticComponent } from "react";
import { clx } from "../utils";
import { cva, VariantProps } from "class-variance-authority";
import ChevronRight from "../icons/chevron-right";

const breadcrumb_cva = cva(
  [
    "group flex flex-wrap select-none items-center font-body font-medium text-sm py-1 px-3 rounded-md",
  ],
  {
    variants: {
      variant: {
        default: "",
        fill: "bg-bg-washed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BreadcrumbProps
  extends ComponentProps<"nav">,
    VariantProps<typeof breadcrumb_cva> {}

const Breadcrumb: ForwardRefExoticComponent<BreadcrumbProps> = React.forwardRef(
  ({ variant = "default", className, children, ...props }, ref) => (
    <nav ref={ref} aria-label="breadcrumb" {...props}>
      <ol className={clx(breadcrumb_cva({ variant, className }))}>
        {children}
      </ol>
    </nav>
  ),
);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbItem: ForwardRefExoticComponent<ComponentProps<"li">> =
  React.forwardRef(({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={clx("line-clamp-1 max-w-[200px]", className)}
      {...props}
    />
  ));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink: ForwardRefExoticComponent<
  ComponentProps<"a"> & { asChild?: boolean }
> = React.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={clx(
        "hover:text-txt-black-900 text-txt-black-500 transition-colors hover:underline",
        className,
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage: ForwardRefExoticComponent<ComponentProps<"span">> =
  React.forwardRef(({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={clx(
        "text-txt-black-900 line-clamp-1 max-w-[200px]",
        className,
      )}
      {...props}
    />
  ));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={clx("[&>svg]:stroke-bg-black-400 [&>svg]:size-6", className)}
    {...props}
  >
    {children || <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
