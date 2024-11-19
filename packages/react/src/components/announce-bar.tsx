import React, { ComponentProps, ComponentPropsWithoutRef, ElementRef, forwardRef, FunctionComponent } from "react";
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
  size?: BaseTagProps['size'];
  mode?: BaseTagProps['mode'];
  dot?: BaseTagProps['dot'];
  asChild?: boolean;
} & Omit<ComponentProps<"div">, keyof BaseTagProps> & 
  Omit<BaseTagProps, 'size' | 'mode' | 'dot' | 'ref'>;

type AnnounceBarDescriptionProps = {
  children: React.ReactNode;
  className ?: string;
  asChild ?: boolean
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
const AnnounceBar = forwardRef<HTMLDivElement, AnnounceBarProps>(({
  className,
  children,
  ...props
}, ref) => {
  return (
    <div
    ref={ref} 
    className={clx(
      "py-2 flex flex-row gap-2 md:mx-6 mx-[18px]",
      className
    )}
    {...props}
    >
      {children}
    </div>
  );
});

const AnnounceBarTag = forwardRef<HTMLDivElement | ElementRef<typeof Slot>, AnnounceBarTagProps>(({
  variant = 'primary',
  size = "medium",
  mode = "default",
  dot = false,
  children,
  className,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : Tag;
  
  return (
    <Comp
      ref={ref as any}
      variant={variant}
      size={size}
      mode={mode}
      dot={dot}
      className={clx("py-0.5 px-2 text-body-xs h-[22px]",
        "md:py-1 md:px-2 md:text-body-sm md:h-[28px]",
        "flex-shrink-0 whitespace-nowrap",
        className)}
      {...props}
    >
      {children}
    </Comp>
  );
});

const AnnounceBarDescription = forwardRef<HTMLParagraphElement | ElementRef<typeof Slot>, AnnounceBarDescriptionProps>(({
  children,
  className,
  ...props
}, ref) => {

  return (
    <div
      ref={ref as any}
      className={clx("min-height-[28px] text-sm text-txt-black-700 flex items-center font-body", className)}
      {...props}
    >
        {children}
    </div>
  );
});

export { AnnounceBar, AnnounceBarTag, AnnounceBarDescription,  };
export type {AnnounceBarProps}