import { preset } from "@govtechmy/myds-style";

export default {
  content: [
    "src/**/*.{js,jsx,ts,tsx}", // Your own project source files
    "node_modules/@govtechmy/myds-react/dist/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [preset],
};
