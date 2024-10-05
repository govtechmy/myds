import type { Config } from "tailwindcss/types/config";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: ["../react/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: ({ colors, theme }) => ({
      current: colors.current,
      transparent: colors.transparent,
      white: {
        DEFAULT: "rgba(var(--_white))",
        disabled: "rgba(var(--_white)/ 0.4)",
      },
      gray: {
        50: "rgba(var(--_gray-50))",
        100: "rgba(var(--_gray-100))",
        200: "rgba(var(--_gray-200))",
        300: "rgba(var(--_gray-300))",
        400: "rgba(var(--_gray-400))",
        500: "rgba(var(--_gray-500))",
        600: "rgba(var(--_gray-600))",
        700: "rgba(var(--_gray-700))",
        800: "rgba(var(--_gray-800))",
        850: "rgba(var(--_gray-850))",
        900: "rgba(var(--_gray-900))",
        930: "rgba(var(--_gray-930))",
        950: "rgba(var(--_gray-950))",
      },
      primary: {
        50: "rgba(var(--_primary-50))",
        100: "rgba(var(--_primary-100))",
        200: "rgba(var(--_primary-200))",
        300: "rgba(var(--_primary-300))",
        400: "rgba(var(--_primary-400))",
        500: "rgba(var(--_primary-500))",
        600: "rgba(var(--_primary-600))",
        700: "rgba(var(--_primary-700))",
        800: "rgba(var(--_primary-800))",
        900: "rgba(var(--_primary-900))",
        950: "rgba(var(--_primary-950))",
      },
      danger: {
        50: "rgba(var(--_danger-50))",
        100: "rgba(var(--_danger-100))",
        200: "rgba(var(--_danger-200))",
        300: "rgba(var(--_danger-300))",
        400: "rgba(var(--_danger-400))",
        500: "rgba(var(--_danger-500))",
        600: "rgba(var(--_danger-600))",
        700: "rgba(var(--_danger-700))",
        800: "rgba(var(--_danger-800))",
        900: "rgba(var(--_danger-900))",
        950: "rgba(var(--_danger-950))",
      },
      success: {
        50: "rgba(var(--_success-50))",
        100: "rgba(var(--_success-100))",
        200: "rgba(var(--_success-200))",
        300: "rgba(var(--_success-300))",
        400: "rgba(var(--_success-400))",
        500: "rgba(var(--_success-500))",
        600: "rgba(var(--_success-600))",
        700: "rgba(var(--_success-700))",
        800: "rgba(var(--_success-800))",
        900: "rgba(var(--_success-900))",
        950: "rgba(var(--_success-950))",
      },
      warning: {
        50: "rgba(var(--_warning-50))",
        100: "rgba(var(--_warning-100))",
        200: "rgba(var(--_warning-200))",
        300: "rgba(var(--_warning-300))",
        400: "rgba(var(--_warning-400))",
        500: "rgba(var(--_warning-500))",
        600: "rgba(var(--_warning-600))",
        700: "rgba(var(--_warning-700))",
        800: "rgba(var(--_warning-800))",
        900: "rgba(var(--_warning-900))",
        950: "rgba(var(--_warning-950))",
      },
    }),
    extend: {
      colors: {
        "bg-white": "rgba(var(--bg-white))",
        "bg-white-hover": "rgba(var(--bg-white-hover))",
        "bg-white-disabled": "rgba(var(--bg-white-disabled))",
        "bg-washed": "rgba(var(--bg-washed))",
        "bg-washed-active": "rgba(var(--bg-washed-active))",
        "bg-contrast": "rgba(var(--bg-contrast))",
        "bg-dialog": "rgba(var(--bg-dialog))",
        "bg-dialog-active": "rgba(var(--bg-dialog-active))",
        "bg-black-900": "rgba(var(--bg-black-900))",
        "bg-black-700": "rgba(var(--bg-black-700))",
        "bg-black-500": "rgba(var(--bg-black-500))",
        "bg-black-400": "rgba(var(--bg-black-400))",
        "bg-black-disabled": "rgba(var(--bg-black-disabled))",
        "bg-primary-50": "rgba(var(--bg-primary-50))",
        "bg-primary-100": "rgba(var(--bg-primary-100))",
        "bg-primary-200": "rgba(var(--bg-primary-200))",
        "bg-primary-300": "rgba(var(--bg-primary-300))",
        "bg-primary-400": "rgba(var(--bg-primary-400))",
        "bg-primary-500": "rgba(var(--bg-primary-500))",
        "bg-primary-600": "rgba(var(--bg-primary-600))",
        "bg-primary-700": "rgba(var(--bg-primary-700))",
        "bg-primary-800": "rgba(var(--bg-primary-800))",
        "bg-primary-900": "rgba(var(--bg-primary-900))",
        "bg-primary-950": "rgba(var(--bg-primary-950))",
        "bg-primary-disabled": "rgba(var(--bg-primary-disabled))",
        "bg-danger-50": "rgba(var(--bg-danger-50))",
        "bg-danger-100": "rgba(var(--bg-danger-100))",
        "bg-danger-200": "rgba(var(--bg-danger-200))",
        "bg-danger-300": "rgba(var(--bg-danger-300))",
        "bg-danger-400": "rgba(var(--bg-danger-400))",
        "bg-danger-500": "rgba(var(--bg-danger-500))",
        "bg-danger-600": "rgba(var(--bg-danger-600))",
        "bg-danger-700": "rgba(var(--bg-danger-700))",
        "bg-danger-800": "rgba(var(--bg-danger-800))",
        "bg-danger-900": "rgba(var(--bg-danger-900))",
        "bg-danger-950": "rgba(var(--bg-danger-950))",
        "bg-danger-disabled": "rgba(var(--bg-danger-disabled))",
        "bg-success-50": "rgba(var(--bg-success-50))",
        "bg-success-100": "rgba(var(--bg-success-100))",
        "bg-success-200": "rgba(var(--bg-success-200))",
        "bg-success-300": "rgba(var(--bg-success-300))",
        "bg-success-400": "rgba(var(--bg-success-400))",
        "bg-success-500": "rgba(var(--bg-success-500))",
        "bg-success-600": "rgba(var(--bg-success-600))",
        "bg-success-700": "rgba(var(--bg-success-700))",
        "bg-success-800": "rgba(var(--bg-success-800))",
        "bg-success-900": "rgba(var(--bg-success-900))",
        "bg-success-950": "rgba(var(--bg-success-950))",
        "bg-success-disabled": "rgba(var(--bg-success-disabled))",
        "bg-warning-50": "rgba(var(--bg-warning-50))",
        "bg-warning-100": "rgba(var(--bg-warning-100))",
        "bg-warning-200": "rgba(var(--bg-warning-200))",
        "bg-warning-300": "rgba(var(--bg-warning-300))",
        "bg-warning-400": "rgba(var(--bg-warning-400))",
        "bg-warning-500": "rgba(var(--bg-warning-500))",
        "bg-warning-600": "rgba(var(--bg-warning-600))",
        "bg-warning-700": "rgba(var(--bg-warning-700))",
        "bg-warning-800": "rgba(var(--bg-warning-800))",
        "bg-warning-900": "rgba(var(--bg-warning-900))",
        "bg-warning-950": "rgba(var(--bg-warning-950))",
        "bg-warning-disabled": "rgba(var(--bg-warning-disabled))",
        "txt-white": "rgba(var(--txt-white))",
        "txt-white-disabled": "rgba(var(--txt-white-disabled))",
        "txt-black-900": "rgba(var(--txt-black-900))",
        "txt-black-700": "rgba(var(--txt-black-700))",
        "txt-black-500": "rgba(var(--txt-black-500))",
        "txt-black-disabled": "rgba(var(--txt-black-disabled))",
        "txt-primary": "rgba(var(--txt-primary))",
        "txt-primary-disabled": "rgba(var(--txt-primary-disabled))",
        "txt-danger": "rgba(var(--txt-danger))",
        "txt-danger-disabled": "rgba(var(--txt-danger-disabled))",
        "txt-success": "rgba(var(--txt-success))",
        "txt-success-disabled": "rgba(var(--txt-success-disabled))",
        "txt-warning": "rgba(var(--txt-warning))",
        "txt-warning-disabled": "rgba(var(--txt-warning-disabled))",
        "otl-divider": "rgba(var(--otl-divider))",
        "otl-gray-200": "rgba(var(--otl-gray-200))",
        "otl-gray-300": "rgba(var(--otl-gray-300))",
        "otl-primary-disabled": "rgba(var(--otl-primary-disabled))",
        "otl-primary-200": "rgba(var(--otl-primary-200))",
        "otl-primary-300": "rgba(var(--otl-primary-300))",
        "otl-danger-disabled": "rgba(var(--otl-danger-disabled))",
        "otl-danger-200": "rgba(var(--otl-danger-200))",
        "otl-danger-300": "rgba(var(--otl-danger-300))",
        "otl-success-disabled": "rgba(var(--otl-success-disabled))",
        "otl-success-200": "rgba(var(--otl-success-200))",
        "otl-success-300": "rgba(var(--otl-success-300))",
        "otl-warning-disabled": "rgba(var(--otl-warning-disabled))",
        "otl-warning-200": "rgba(var(--otl-warning-200))",
        "otl-warning-300": "rgba(var(--otl-warning-300))",
        "fr-primary": "rgba(var(--fr-primary))",
        "fr-danger": "rgba(var(--fr-danger))",
      },
    },
    boxShadow: {
      button: "0px 1px 3px 0px #00000012",
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
