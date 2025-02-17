import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, forwardRef, ForwardRefExoticComponent } from "react";
import { cva, VariantProps } from "class-variance-authority";

interface LinkProps extends ComponentProps<"a">, VariantProps<typeof link_cva> {
  asChild?: boolean;
  newTab?: boolean;
}

const link_cva = cva("transition-colors", {
  variants: {
    underline: {
      always: "underline",
      hover: "no-underline hover:underline",
      none: "no-underline",
    },
    primary: {
      true: "text-txt-primary",
      false: "text-inherit decoration-inherit",
    },
  },
});

/**
 * The Link component extends the `<a>` element, customised according to the MYDS theme.
 * @example
 * <Link href="https://design.digital.gov.my" newTab primary underline="always">MYDS</Link>
 * @see {@link https://design.digital.gov.my/?path=/docs/myds-react-link--docs}
 */
const Link: ForwardRefExoticComponent<LinkProps> = forwardRef(
  (
    {
      asChild,
      children,
      className,
      href,
      newTab = false,
      primary = false,
      underline = "always",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        href={href}
        className={link_cva({ primary, underline, className })}
        target={newTab ? "_blank" : "_self"}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Link.displayName = "Link";

export { Link };
