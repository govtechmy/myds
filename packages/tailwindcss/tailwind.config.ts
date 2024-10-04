import type { Config } from "tailwindcss/types/config";
import { preset } from ".";

const config: Config = {
  content: ["../react/src/**/*.{js,jsx,ts,tsx}"],
  presets: [preset],
};
export default config;
