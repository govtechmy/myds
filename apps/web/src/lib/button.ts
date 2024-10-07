export type ButtonSize = "small" | "medium" | "large";

// TODO: Use cva variants
export function getTextSizeClassnames(size: ButtonSize) {
  switch (size) {
    case "small":
      return "text-[0.875rem] leading-[1.25rem] gap-x-[0.375rem]";
    case "medium":
    case "large":
      return "text-[1rem] leading-[1.5rem] gap-x-[0.375rem]";
    default:
      return "";
  }
}

export function getShadowClassnames() {
  return "shadow-button";
}
