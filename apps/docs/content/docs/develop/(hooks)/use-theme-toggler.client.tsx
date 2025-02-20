"use client";

import { ThemeToggler } from "@govtechmy/myds-react/hooks";
import { MoonIcon, SunIcon } from "@govtechmy/myds-react/icon";

export {
  useTheme,
  ThemeProvider,
  ThemeToggler,
} from "@govtechmy/myds-react/hooks";

export const SampleThemeToggler = () => {
  return (
    <ThemeToggler
      themes={[
        { theme: "light", icon: <SunIcon /> },
        { theme: "dark", icon: <MoonIcon /> },
      ]}
    />
  );
};
