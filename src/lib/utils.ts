import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toRM = (value: number | null): string => {
  if (value === null) return "-";
  return new Intl.NumberFormat("ms-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);
};

export const toComma = (value: number | null): string => {
  if (value === null) return "-";
  return new Intl.NumberFormat("ms-MY", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);
};
