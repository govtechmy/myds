import { Slot } from "@radix-ui/react-slot";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { clx } from "../utils";

interface LinkProps extends ComponentPropsWithoutRef<"a"> {
  asChild?: boolean;
  newTab?: boolean;
  primary?: boolean;
  underline: "always" | "hover" | "none";
}

/**
 * The Link component extends the `<a>` element, customised according to the MYDS theme.
 * @example
 * <Link href="https://design.digital.gov.my" newTab primary underline="always">MYDS</Link>
 * @see {@link https://design.digital.gov.my/?path=/docs/myds-react-link--docs}
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
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
    const _className = clx(
      primary ? "text-txt-primary" : "text-inherit",
      underline == "always"
        ? "underline"
        : underline == "hover"
          ? "hover:underline"
          : "",
      className,
    );

    if (newTab)
      return (
        <a
          ref={ref}
          href={href}
          className={_className}
          target="_blank"
          {...props}
        >
          {children}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      );

    const Comp = asChild ? Slot : "a";
    return (
      <Comp ref={ref} href={href} className={_className} {...props}>
        {children}
      </Comp>
    );
  },
);

export default Link;
