import { Slot } from "@radix-ui/react-slot";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { clx } from "../utils";

/**
 * Props for Link component.
 * @typedef LinkProps
 * @property {type} variant
 */
interface LinkProps extends ComponentPropsWithoutRef<"a"> {
  asChild?: boolean;
  newTab?: boolean;
  primary?: boolean;
  underline: "always" | "hover" | "none";
}

/**
 * Link component description.
 * @component
 * @example
 * <Link href="https://design.digital.gov.my">MYDS</Link>
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      asChild,
      children,
      className: _className,
      href,
      newTab = false,
      primary = false,
      underline = "always",
      ...props
    },
    ref,
  ) => {
    const className = clx(
      primary ? "text-txt-primary" : "text-inherit",
      underline == "always"
        ? "underline"
        : underline == "hover"
          ? "hover:underline"
          : "",
      _className,
    );

    if (newTab)
      return (
        <a
          ref={ref}
          href={href}
          className={className}
          target="_blank"
          {...props}
        >
          {children}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      );

    const Comp = asChild ? Slot : "a";
    return (
      <Comp ref={ref} href={href} className={className} {...props}>
        {children}
      </Comp>
    );
  },
);

export { Link };
