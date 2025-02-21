import { FunctionComponent, ReactNode, useState } from "react";
import { MoonIcon, PlaceholderIcon, SunIcon } from "../icons";
import { Button } from "./button";
import { ThemeProvider, useTheme } from "../hooks/use-theme-toggler";

interface Themes {
  theme: string;
  icon: ReactNode;
}

interface ThemeToggler {
  themes?: Themes[];
}

const ThemeToggler: FunctionComponent<ThemeToggler> = ({
  themes = [
    { theme: "light", icon: <SunIcon /> },
    { theme: "dark", icon: <MoonIcon /> },
  ],
}) => {
  const { toggleTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentIndex(nextIndex);
    toggleTheme(themes[nextIndex]?.theme!);
  };

  return (
    <Button variant="default-ghost" className="p-2" onClick={handleClick}>
      {themes[currentIndex]?.icon ?? <PlaceholderIcon />}
    </Button>
  );
};
export { ThemeToggler, ThemeProvider };
