import React, { ComponentProps, ComponentPropsWithoutRef, ElementRef, forwardRef, FunctionComponent } from "react";
import { clx } from "../utils";
import { Tag, type TagProps as BaseTagProps } from "./tag";
import { Slot } from "@radix-ui/react-slot";

/**
 * Props for AnnounceBar component.
 * @typedef AnnounceBarProps
 * @property {type} propName - Description of propName
 */
interface AnnounceBarProps {
  children: React.ReactNode;
  className ?: string
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
 * <AnnounceBar propName="value" />
 */
const AnnounceBar = ({
  className,
  children,
}: AnnounceBarProps) => {
  return (
    <div className={clx(
      "py-2 flex flex-row gap-2 md:mx-6 mx-[18px]",
      className
    )}>
      {children}
    </div>
  );
};

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
  asChild = false,
  ...props
}, ref) => {

  const Comp = asChild ? Slot : "p";
  
  return (
    <Comp
      ref={ref as any}
      className={clx("min-height-[28px] text-sm text-black-700 flex items-center gap-1", className)}
      {...props}
    >
        {children}
    </Comp>
  );
});

export { AnnounceBar, AnnounceBarTag, AnnounceBarDescription,  };
export type {AnnounceBarProps}