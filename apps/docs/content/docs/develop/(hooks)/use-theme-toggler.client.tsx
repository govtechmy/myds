"use client";

import { MoonIcon, SunIcon } from "@govtechmy/myds-react/icon";
import {
  ThemeProvider,
  ThemeToggler,
} from "@govtechmy/myds-react/theme-toggler";

export const SampleThemeToggler = () => {
  return (
    <ThemeProvider>
      <ThemeToggler
        themes={[
          { theme: "light", icon: <SunIcon /> },
          { theme: "dark", icon: <MoonIcon /> },
        ]}
      />
    </ThemeProvider>
  );
};
