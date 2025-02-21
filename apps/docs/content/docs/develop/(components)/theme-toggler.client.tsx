"use client";

import { MoonIcon, PlaceholderIcon, SunIcon } from "@govtechmy/myds-react/icon";
import {
  ThemeProvider,
  ThemeToggler,
} from "@govtechmy/myds-react/theme-toggler";

export const SampleThemeToggler = () => {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
};

export const CustomThemeToggler = () => {
  return (
    <ThemeProvider>
      <ThemeToggler
        themes={[
          { theme: "light", icon: <SunIcon /> },
          { theme: "dark", icon: <MoonIcon /> },
          { theme: "sephia", icon: <PlaceholderIcon /> },
          { theme: "retro", icon: <PlaceholderIcon /> },
        ]}
      />
    </ThemeProvider>
  );
};
