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
      className={clx(className)}
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
      className={clx("min-height-[28px] text-sm text-black-700", className)}
      {...props}
    >
      {children}
    </Comp>
  );
});


// 2 components: AnnounceBarTag, AnnounceBarDescription
// AnnounceBarTag use Tag component with the correct variant (variant as props), size and mode we fix it. Then make asChild props to let the users can overwrite. ClassName is a props also. And let user just pass text as children as well
// AnnounceBarDescription basically is just a p tag with the className props and our default css style. Then use Link component
// The whole component (root) should be wrapped with a div component to apply padding and gap 

export { AnnounceBar, AnnounceBarTag, AnnounceBarDescription };