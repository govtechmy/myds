import { Slot } from "@radix-ui/react-slot";
import React, { ComponentProps, ForwardRefExoticComponent } from "react";
import { clx } from "../utils";
import { cva, VariantProps } from "class-variance-authority";
import ChevronRight from "../icons/chevron-right";
import Options from "../icons/options";

const breadcrumbs_cva = cva(
  [
    "group flex flex-wrap select-none items-center font-body font-medium text-sm py-1 px-3 rounded-md",
  ],
  {
    variants: {
      variant: {
        default: "",
        alternative: "bg-bg-washed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BreadcrumbsProps
  extends ComponentProps<"nav">,
    VariantProps<typeof breadcrumbs_cva> {}

const Breadcrumbs: ForwardRefExoticComponent<BreadcrumbsProps> =
  React.forwardRef(
    ({ variant = "default", className, children, ...props }, ref) => (
      <nav ref={ref} aria-label="breadcrumbs" {...props}>
        <ol className={clx(breadcrumbs_cva({ variant, className }))}>
          {children}
        </ol>
      </nav>
    ),
  );
Breadcrumbs.displayName = "Breadcrumbs";

const BreadcrumbsItem: ForwardRefExoticComponent<ComponentProps<"li">> =
  React.forwardRef(({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={clx("line-clamp-1 max-w-[200px]", className)}
      {...props}
    />
  ));
BreadcrumbsItem.displayName = "BreadcrumbsItem";

const BreadcrumbsLink: ForwardRefExoticComponent<
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
BreadcrumbsLink.displayName = "BreadcrumbsLink";

const BreadcrumbsPage: ForwardRefExoticComponent<ComponentProps<"span">> =
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
BreadcrumbsPage.displayName = "BreadcrumbsPage";

const BreadcrumbsSeparator = ({
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
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbsSeparator.displayName = "BreadcrumbsSeparator";

export {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsLink,
  BreadcrumbsPage,
  BreadcrumbsSeparator,
};
