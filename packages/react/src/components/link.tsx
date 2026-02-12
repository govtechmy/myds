import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, forwardRef, ForwardRefExoticComponent } from "react";
import { cva, VariantProps } from "class-variance-authority";

interface LinkProps extends ComponentProps<"a">, VariantProps<typeof link_cva> {
  asChild?: boolean;
  newTab?: boolean;

  splwpkBroadcast?: boolean;
  splwpkOnlineServices?: boolean;
  splwpkOnlineEParticipation?: boolean;
  splwpkPrivacyPolicy?: boolean;
  splwpkProcurement?: boolean;
  splwpkFreedom?: boolean;
  splwpkFaqs?: boolean;
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
      splwpkBroadcast = false,
      splwpkOnlineServices = false,
      splwpkOnlineEParticipation = false,
      splwpkPrivacyPolicy = false,
      splwpkProcurement = false,
      splwpkFreedom = false,
      splwpkFaqs = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "a";

    const splwpkAttrs: Record<string, string> = {};
    if (splwpkBroadcast) splwpkAttrs["splwpk-broadcast"] = "splwpk-broadcast";
    if (splwpkOnlineServices) splwpkAttrs["splwpk-online-services"] = "splwpk-online-services";
    if (splwpkOnlineEParticipation) splwpkAttrs["splwpk-online-e-participation"] = "splwpk-online-e-participation";
    if (splwpkPrivacyPolicy) splwpkAttrs["splwpk-privacy-policy"] = "splwpk-privacy-policy";
    if (splwpkProcurement) splwpkAttrs["splwpk-procurement"] = "splwpk-procurement";
    if (splwpkFreedom) splwpkAttrs["splwpk-freedom"] = "splwpk-freedom";
    if (splwpkFaqs) splwpkAttrs["splwpk-faqs"] = "splwpk-faqs";

    return (
      <Comp
        ref={ref}
        href={href}
        className={link_cva({ primary, underline, className })}
        target={newTab ? "_blank" : "_self"}
        {...splwpkAttrs}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Link.displayName = "Link";

export { Link };