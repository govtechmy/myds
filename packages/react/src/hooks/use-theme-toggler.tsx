"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { Button } from "../components/button";
import { SunIcon } from "../icons/sun";
import { MoonIcon } from "../icons/moon";
import { PlaceholderIcon } from "../icons";

interface ThemeContextType {
  theme: string;
  toggleTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");
  const switchTheme = (newTheme: string) => {
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const TriggerThemeButton = ({
  themes = ["light", "dark"],
}: {
  themes: string[];
}) => {
  const { toggleTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentIndex(nextIndex);
    toggleTheme(themes[nextIndex]!);
  };

  return (
    <Button variant="default-ghost" className="p-2" onClick={handleClick}>
      {themes[currentIndex] === "light" ? (
        <SunIcon />
      ) : themes[currentIndex] === "dark" ? (
        <MoonIcon />
      ) : (
        <PlaceholderIcon />
      )}
    </Button>
  );
};

export { ThemeProvider, useTheme, TriggerThemeButton };
