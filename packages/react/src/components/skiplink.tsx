import React, { ComponentProps, forwardRef } from "react";
import { clx } from "../utils";
import { Button } from "./button";

/**
 * Props for Skiplink component. A skiplink is an accessibility feature that allows keyboard users
 * to quickly navigate to the main content of a page.
 * @typedef SkiplinkProps
 * @property {string} href - The target URL or anchor ID that the skiplink navigates to
 * @property {string} text - The text content displayed in the skiplink button
 * @property {string} [className] - Optional CSS class names to apply to the anchor element
 */

interface SkiplinkProps extends Omit<ComponentProps<"a">, "children"> {
  href: string;
  text: string;
}

const Skiplink = forwardRef<HTMLAnchorElement, SkiplinkProps>(
  ({ text, href, className, ...props }, ref) => {
    return (
      <Button asChild variant="primary-outline" size={"small"}>
        <a
          ref={ref}
          className={clx("shadow-context-menu", className)}
          href={href}
          {...props}
        >
          {text}
        </a>
      </Button>
    );
  },
);
Skiplink.displayName = "Skiplink";

export { Skiplink };
