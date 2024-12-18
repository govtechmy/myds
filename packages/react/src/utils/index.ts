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

/**
 * Pick into key-pairs from array of objects.
 * @param results Array of objects
 * @param key Key of record
 * @param value Value of record
 * @returns {Record<string, any>} ObjectMap
 */
export const pick = <T = string>(
  results: Array<T>,
  key: keyof T | ((item: T) => string),
  value: keyof T | ((item: T) => unknown),
): Record<string, any> => {
  return results.reduce((previous, current) => {
    const _key = typeof key === "function" ? key(current) : current[key];
    const _value =
      typeof value === "function" ? value(current) : current[value];
    return { ...previous, [_key as string]: _value };
  }, {});
};
