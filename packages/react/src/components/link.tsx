import { Slot } from "@radix-ui/react-slot";
import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
} from "react";
import { cva, VariantProps } from "class-variance-authority";

interface LinkProps extends ComponentProps<"a">, VariantProps<typeof link_cva> {
  asChild?: boolean;
  newTab?: boolean;
}

const link_cva = cva(["text-inherit transition-colors outline-none"], {
  variants: {
    underline: {
      always: "underline",
      hover: "hover:underline",
      none: "",
    },
    primary: {
      true: "text-txt-primary",
      false: "text-inherit",
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
    if (newTab)
      return (
        <a
          ref={ref}
          href={href}
          className={link_cva({ primary, underline, className })}
          target="_blank"
          {...props}
        >
          {children}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      );

    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        href={href}
        className={link_cva({ primary, underline, className })}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

export { Link };
