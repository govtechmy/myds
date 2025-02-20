"use client";

import { ThemeProvider } from "@govtechmy/myds-react/hooks";
import { MoonIcon, SunIcon } from "@govtechmy/myds-react/icon";
import { ThemeToggler } from "@govtechmy/myds-react/theme-toggler";
export { useTheme, ThemeProvider } from "@govtechmy/myds-react/hooks";

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
