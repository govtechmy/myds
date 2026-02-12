import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, forwardRef, ForwardRefExoticComponent } from "react";
import { cva, VariantProps } from "class-variance-authority";

interface LinkProps extends ComponentProps<"a">, VariantProps<typeof link_cva> {
  asChild?: boolean;
  newTab?: boolean;

  splaskBroadcast?: boolean;
  splaskOnlineServices?: boolean;
  splaskOnlineEParticipation?: boolean;
  splaskPrivacyPolicy?: boolean;
  splaskProcurement?: boolean;
  splaskFreedom?: boolean;
  splaskFaqs?: boolean;
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
      splaskBroadcast = false,
      splaskOnlineServices = false,
      splaskOnlineEParticipation = false,
      splaskPrivacyPolicy = false,
      splaskProcurement = false,
      splaskFreedom = false,
      splaskFaqs = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "a";

    const splaskAttrs: Record<string, string> = {};
    if (splaskBroadcast) splaskAttrs["splwpk-broadcast"] = "splwpk-broadcast";
    if (splaskOnlineServices) splaskAttrs["splwpk-online-services"] = "splwpk-online-services";
    if (splaskOnlineEParticipation) splaskAttrs["splwpk-online-e-participation"] = "splwpk-online-e-participation";
    if (splaskPrivacyPolicy) splaskAttrs["splwpk-privacy-policy"] = "splwpk-privacy-policy";
    if (splaskProcurement) splaskAttrs["splwpk-procurement"] = "splwpk-procurement";
    if (splaskFreedom) splaskAttrs["splwpk-freedom"] = "splwpk-freedom";
    if (splaskFaqs) splaskAttrs["splwpk-faqs"] = "splwpk-faqs";

    return (
      <Comp
        ref={ref}
        href={href}
        className={link_cva({ primary, underline, className })}
        target={newTab ? "_blank" : "_self"}
        {...splaskAttrs}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Link.displayName = "Link";

export { Link };