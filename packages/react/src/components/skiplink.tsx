import React, { ComponentProps, forwardRef, ReactNode } from "react";
import { clx } from "../utils";
import { Button } from "./button";

/**
 * Props for Skiplink component. A skiplink is an accessibility feature that allows keyboard users
 * to quickly navigate to the main content of a page.
 * @typedef SkiplinkProps
 * @property {string} href - The target URL or anchor ID that the skiplink navigates to
 * @property {ReactNode} children - The content to be displayed in the skiplink
 * @property {string} [className] - Optional CSS class names to apply to the anchor element
 */

interface SkiplinkProps extends ComponentProps<"a"> {
  href: string; // Only redefining href to make it required
}

const Skiplink = forwardRef<HTMLAnchorElement, SkiplinkProps>(
  ({ children, href, className, ...props }, ref) => {
    return (
      <Button asChild variant="primary-outline" size={"small"}>
        <a
          ref={ref}
          className={clx(
            // to hide the element
            "shadow-context-menu",
            "absolute size-[1px]",
            "overflow-hidden",
            "whitespace-nowrap",
            "[clip-path:inset(50%)]",
            // Focus state (visible)
            "focus:h-auto focus:w-auto",
            "focus:left-4 focus:top-11",
            "focus:[clip-path:none]",
            "transition-all duration-500 ease-in-out",
            "opacity-0 focus:opacity-100",
            className,
          )}
          href={href}
          {...props}
        >
          {children}
        </a>
      </Button>
    );
  },
);
Skiplink.displayName = "Skiplink";

export { Skiplink };
