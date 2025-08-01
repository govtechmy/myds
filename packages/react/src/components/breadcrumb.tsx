import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, ForwardRefExoticComponent, forwardRef } from "react";
import { clx } from "../utils";
import { cva, VariantProps } from "class-variance-authority";
import { ChevronRightIcon } from "../icons/chevron-right";

const breadcrumb_cva = cva(
  [
    "group flex flex-wrap select-none items-center font-body font-medium text-body-sm rounded-md gap-1",
  ],
  {
    variants: {
      variant: {
        default: "",
        fill: "py-1 px-3 bg-bg-washed",
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

const Breadcrumb: ForwardRefExoticComponent<BreadcrumbProps> = forwardRef(
  ({ variant = "default", className, children, ...props }, ref) => (
    <nav ref={ref} aria-label="breadcrumb" {...props}>
      <ol className={breadcrumb_cva({ variant, className })}>{children}</ol>
    </nav>
  ),
);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbItem: ForwardRefExoticComponent<ComponentProps<"li">> =
  forwardRef(({ className, ...props }, ref) => (
    <li
      ref={ref}
      {...props}
      className={clx("line-clamp-1 max-w-[200px]", className)}
    />
  ));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink: ForwardRefExoticComponent<
  ComponentProps<"a"> & { asChild?: boolean }
> = forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={clx(
        "hover:text-txt-black-900 text-txt-black-500 transition-colors hover:underline",
        className,
      )}
      {...props}
      title={
        props.title || typeof props.children === "string"
          ? (props.children as string)
          : undefined
      }
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage: ForwardRefExoticComponent<ComponentProps<"span">> =
  forwardRef(({ className, ...props }, ref) => (
    <span
      ref={ref}
      {...props}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={clx(
        "text-txt-black-900 line-clamp-1 max-w-[200px]",
        className,
      )}
      title={
        props.title || typeof props.children === "string"
          ? (props.children as string)
          : undefined
      }
    />
  ));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={clx("[&>svg]:text-bg-black-400 [&>svg]:size-6", className)}
    {...props}
  >
    {children || <ChevronRightIcon />}
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
