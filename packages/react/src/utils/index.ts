import { twMerge, ClassNameValue, extendTailwindMerge } from "tailwind-merge";

const twMergeConfig = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-heading-xl",
        "text-heading-lg",
        "text-heading-md",
        "text-heading-sm",
        "text-heading-xs",
        "text-heading-2xs",
        "text-body-xl",
        "text-body-lg",
        "text-body-md",
        "text-body-sm",
        "text-body-xs",
      ],
    },
  },
});

/**
 * Conditional class joiner.
 * @param args classNames
 * @returns string
 */
export const clx = (...args: ClassNameValue[]): string => {
  return twMergeConfig(args);
};
