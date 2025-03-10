import {
  Children,
  cloneElement,
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  FunctionComponent,
  isValidElement,
  ReactElement,
} from "react";
import { clx } from "../utils";
import { Slot } from "@radix-ui/react-slot";

interface FooterProps extends ComponentProps<"div"> {}
const Footer: ForwardRefExoticComponent<FooterProps> = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx(
          "grid grid-cols-2 gap-6 md:grid-cols-4 lg:mx-auto lg:max-w-[1280px] lg:grid-cols-12",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

interface FooterRootProps extends ComponentProps<"footer"> {}
const FooterRoot: ForwardRefExoticComponent<FooterRootProps> = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <footer
        className={clx(
          "bg-bg-gray-50 border-otl-gray-200 font-body text-body-sm flex flex-col border-t print:hidden",
          "max-md:px-4.5 max-md:gap-6 max-md:py-8",
          "gap-8 md:px-6 md:py-8 md:max-lg:pt-8",
          "lg:py-16",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </footer>
    );
  },
);

interface SiteInfoProps extends ComponentProps<"aside"> {}
const SiteInfo: ForwardRefExoticComponent<SiteInfoProps> = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <aside
        className={clx(
          "flex flex-col max-lg:col-span-full lg:col-start-1 lg:col-end-4",
          "max-lg:gap-4",
          "lg:gap-3",
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </aside>
    );
  },
);

interface SiteLinkGroupProps extends ComponentProps<"div"> {}
const SiteLinkGroup: ForwardRefExoticComponent<SiteLinkGroupProps> = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={clx(
          "flex flex-col gap-2",
          "max-lg:col-span-full md:gap-3",
          "lg:col-span-2",
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

interface SiteLinkTitle extends ComponentProps<"h6"> {
  asChild?: boolean;
}
const SiteLinkTitle: ForwardRefExoticComponent<SiteLinkTitle> = forwardRef(
  ({ children, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h6";

    return (
      <Comp
        className={clx(
          "text-txt-black-900 line-clamp-1 font-semibold",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

interface SiteLink extends ComponentProps<"nav"> {}

const SiteLink: ForwardRefExoticComponent<SiteLink> = forwardRef(
  ({ children, className, ...props }, ref) => {
    // clone the child and add line-clamp-1 to limit text length
    const processedChildren = Children.toArray(children)
      .slice(0, 8)
      .map((child, index) => {
        if (!isValidElement(child)) return child;

        return cloneElement(child as ReactElement<any>, {
          className: clx(
            "line-clamp-1 lg:col-span-full text-txt-black-700",
            child.props.className,
          ),
          key: index,
        });
      });

    return (
      <nav
        className={clx(
          "gap-x-4.5 grid grid-cols-2 md:grid-cols-4 md:gap-x-6 lg:grid-cols-2",
          "max-md:gap-y-2 md:max-lg:gap-y-3 lg:gap-y-2",
          className,
        )}
        ref={ref}
        {...props}
      >
        {processedChildren}
      </nav>
    );
  },
);

Footer.displayName = "Footer";
FooterRoot.displayName = "FooterRoot";
SiteInfo.displayName = "SiteInfo";
SiteLinkGroup.displayName = "SiteLinkGroup";
SiteLinkTitle.displayName = "SiteLinkTitle";
SiteLink.displayName = "SiteLink";

/*========================================================================================================================*/

export { Footer, SiteInfo, SiteLinkGroup, SiteLinkTitle, SiteLink, FooterRoot };
