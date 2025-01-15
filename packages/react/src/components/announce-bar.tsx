import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ForwardRefExoticComponent,
  FunctionComponent,
} from "react";
import { clx } from "../utils";
import { Tag, type TagProps as BaseTagProps } from "./tag";
import { Slot } from "@radix-ui/react-slot";

/**
 * Props for AnnounceBar component.
 * @typedef AnnounceBarProps
 * @property {string} [className] - Optional CSS class names to be applied to the component.
 * @property {React.ReactNode} children - The content to be rendered within the AnnounceBar.
 */
interface AnnounceBarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

type AnnounceBarTagProps = {
  asChild?: boolean;
} & Omit<ComponentProps<"div">, keyof BaseTagProps> &
  Omit<BaseTagProps, "size" | "mode" | "dot" | "ref">;

type AnnounceBarDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
} & ComponentPropsWithoutRef<"p">;

/**
 * AnnounceBar component description.
 * @component
 * @example
 * <AnnounceBar>
 *        <AnnounceBarTag variant="warning">
 *          Maintenance
 *        </AnnounceBarTag>
 *        <AnnounceBarDescription>
 *          <p>This service is undergoing maintenance. Thank you for your patience. <Link *underline="always" primary href="#">Send us your feedback here.</Link></p>
 *        </AnnounceBarDescription>
 *   </AnnounceBar>
 * <AnnounceBar propName="value" />
 */
const AnnounceBar = forwardRef<HTMLDivElement, AnnounceBarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx("mx-[18px] flex flex-row gap-2 py-2 md:mx-6", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

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

const AnnounceBarDescription = forwardRef<
  HTMLParagraphElement | ElementRef<typeof Slot>,
  AnnounceBarDescriptionProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref as any}
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
export type { AnnounceBarProps };
