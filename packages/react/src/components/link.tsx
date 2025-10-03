import { Slot } from "@radix-ui/react-slot";

import {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
} from "react";
import { cva, VariantProps } from "class-variance-authority";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "splwpk-broadcast": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "splwpk-online-services": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "splwpk-online-e-participation": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "splwpk-privacy-policy": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "splwpk-procurement": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "splwpk-freedom": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "splwpk-faqs": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

interface LinkProps
  extends ComponentProps<"a">,
    VariantProps<typeof link_cva> {
  asChild?: boolean;
  newTab?: boolean;
  SplaskBroadcast?: boolean;
  SplaskOnlineServices?: boolean;
  SplaskOnlineEParticipation?: boolean;
  SplaskPrivacyPolicy?: boolean;
  SplaskProcurement?: boolean;
  SplaskFreedom?: boolean;
  SplaskFaqs?: boolean;
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
      SplaskBroadcast,
      SplaskOnlineServices,
      SplaskOnlineEParticipation,
      SplaskPrivacyPolicy,
      SplaskProcurement,
      SplaskFreedom,
      SplaskFaqs,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "a";

    const linkElement = (
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

    const attrs: Record<string, string> = {};
    if (SplaskBroadcast) attrs["splwpk-broadcast"] = "splwpk-broadcast";
    if (SplaskOnlineServices)
      attrs["splwpk-online-services"] = "splwpk-online-services";
    if (SplaskOnlineEParticipation)
      attrs["splwpk-online-e-participation"] =
        "splwpk-online-e-participation";
    if (SplaskPrivacyPolicy)
      attrs["splwpk-privacy-policy"] = "splwpk-privacy-policy";
    if (SplaskProcurement)
      attrs["splwpk-procurement"] = "splwpk-procurement";
    if (SplaskFreedom) attrs["splwpk-freedom"] = "splwpk-freedom";
    if (SplaskFaqs) attrs["splwpk-faqs"] = "splwpk-faqs";

    if (Object.keys(attrs).length === 0) return linkElement;

    return <div {...attrs}>{linkElement}</div>;
  },
);

Link.displayName = "Link";

export { Link };
