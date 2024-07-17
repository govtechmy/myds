import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex select-none items-center justify-center gap-1.5 rounded-md whitespace-nowrap text-start text-sm font-medium active:translate-y-[0.5px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-30",
  {
    variants: {
      variant: {
        default: "",
        primary:
          "from-blue-600 to-[#3E7AFF] bg-gradient-to-t text-white hover:to-[#5B8EFF] shadow-button",
        secondary:
          "border border-outline-200 hover:border-outline-300 bg-background focus:border-outline-200 focus:ring focus:ring-offset-0 focus:ring-outline-400/20 shadow-button",
        "secondary-colour":
          "border border-brand-200 hover:border-brand-300 bg-background hover:bg-brand-50 text-foreground focus:border-brand-200 focus:ring focus:ring-offset-0 focus:ring-brand-600/20 shadow-button",
        tertiary:
          "hover:bg-washed-100 focus:ring focus:ring-offset-0 focus:ring-outline-400/20",
        "tertiary-colour":
          "hover:bg-brand-50 text-foreground focus:ring focus:ring-offset-0 focus:ring-brand-600/20",
      },
      size: {
        default: "",
        sm: "px-2.5 py-1.5",
        md: "px-3 py-2",
        lg: "px-3 py-2.5",
        icon: "p-2.5",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "sm",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
