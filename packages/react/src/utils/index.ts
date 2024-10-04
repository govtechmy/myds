import { twMerge, ClassNameValue } from "tailwind-merge";

/**
 * Conditional class joiner.
 * @param args classNames
 * @returns string
 */
export const clx = (...args: ClassNameValue[]): string => {
  return twMerge(args);
};
