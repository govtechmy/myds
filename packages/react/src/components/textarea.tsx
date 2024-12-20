import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";

const text_area_cva = cva(
  [
    "w-full rounded border border-otl-gray-200 bg-bg-white resize-none",
    "placeholder:text-txt-black-500 text-txt-black-700 transition-colors font-body placeholder:font-body",
    "focus:outline-none focus:ring focus:ring-fr-primary focus:border-otl-primary-300",
    "disabled:bg-bg-washed disabled:cursor-not-allowed disabled:text-txt-black-disabled",
  ],
  {
    variants: {
      size: {
        small: "min-h-[100px] p-2.5 text-body-sm placeholder:text-body-sm",
        medium: "min-h-[120px] p-3 text-body-md placeholder:text-body-md",
        large: "min-h-[150px] p-3.5 text-body-lg placeholder:text-body-lg",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof text_area_cva> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={text_area_cva({ size, className })}
        {...props}
      />
    );
  },
);

TextArea.displayName = "InputText";

export { TextArea };
