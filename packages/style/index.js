// MYDS preset
import config from "./tailwind.config";
const { content, ...preset } = config;

// MYDS Fumadocs preset
const preset_fumadocs = {
  light: {
    background: "0 0% 100%", // white
    foreground: "240 10% 4%", // gray-950
    muted: "0 0% 98%", // gray-50
    "muted-foreground": "240 4% 46%", // gray-500
    popover: "0 0% 100%", // white
    "popover-foreground": "240 4% 46%", // gray-500
    card: "0 0% 100%", // white
    "card-foreground": "240 5% 26", // gray-700
    border: "240 6% 90%", // gray-200
    primary: "221 83% 53%", // primary-600
    "primary-foreground": "214 100% 97%", // primary-50
    secondary: "0 0% 100%", // white
    "secondary-foreground": "240 5% 26%", // gray-700
    accent: "0 0% 98%", // gray-50
    "accent-foreground": "240 10% 4%", // gray-950
    ring: "221 100% 79%", // primary-300
  },
  dark: {
    background: "240 6% 10%", // gray-900
    foreground: "0 0% 100%", // white
    muted: "240 4% 16", // gray-800
    "muted-foreground": "240 4% 46%", // gray-500
    popover: "240 6% 10%", // gray-900
    "popover-foreground": "240 4% 46%", // gray-500
    card: "240 6% 10%", // gray-900
    "card-foreground": "240 5% 84%", // gray-300
    border: "240 4% 16", // gray-800
    primary: "221 100% 69%", // primary-400
    "primary-foreground": "240 6% 90%",
    secondary: "240 6% 10%", // gray-900
    "secondary-foreground": "240 5% 84%", // gray-300
    accent: "240 6% 12%", // gray-850
    "accent-foreground": "0 0% 100%", // white
    ring: "224 76% 48%", // primary-700
  },
};

export { preset, preset_fumadocs };
