import { ComponentProps, forwardRef, ForwardRefExoticComponent } from "react";
import { clx } from "../utils";
import { Tag } from "./tag";
import { Slot } from "@radix-ui/react-slot";

/**
 * AnnounceBar component description.
 * @component
 * @example
 * <AnnounceBar>
 *   <AnnounceBarTag variant="warning">
 *     Maintenance
 *   </AnnounceBarTag>
 *   <AnnounceBarDescription>
 *     <p>This service is undergoing maintenance. Thank you for your patience. <Link *underline="always" primary href="#">Send us your feedback here.</Link></p>
 *   </AnnounceBarDescription>
 * </AnnounceBar>
 */
const AnnounceBar: ForwardRefExoticComponent<ComponentProps<"div">> =
  forwardRef(({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx("mx-[18px] flex flex-row gap-2 py-2 md:mx-6", className)}
        {...props}
      >
        {children}
      </div>
    );
  });

const AnnounceBarTag: ForwardRefExoticComponent<
  ComponentProps<typeof Tag> & { asChild?: boolean }
> = forwardRef(
  (
    { variant = "primary", children, className, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : Tag;

    return (
      <Comp
        ref={ref}
        {...props}
        variant={variant}
        size="medium"
        mode="default"
        className={clx("flex-shrink-0 whitespace-nowrap", className)}
      >
        {children}
      </Comp>
    );
  },
);

const AnnounceBarDescription: ForwardRefExoticComponent<ComponentProps<"div">> =
  forwardRef(({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx(
          "min-height-[28px] text-txt-black-700 font-body flex items-center text-sm",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  });

export { AnnounceBar, AnnounceBarTag, AnnounceBarDescription };
