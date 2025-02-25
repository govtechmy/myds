import { FunctionComponent, ReactNode, useContext, useState } from "react";
import { MoonIcon, PlaceholderIcon, SunIcon } from "../icons";
import { Button } from "./button";
import { ThemeContext, ThemeProvider } from "../hooks/use-theme";

interface Themes {
  theme: string;
  icon: ReactNode;
}

interface ThemeToggler {
  themes?: Themes[];
}

/**------------------------------------------------------------------------------------------------
 * !                                           ISSUE
 * BUG: The context from ThemeProvider is not recognised and will return null, despite declaring it.
 * 1. Finding:
 *  - Likely a bug in the build files. (ie code not compiled properly)
 *  - Code works fine if copied and pasted into the app.
 *  -
 * 2. Solution: TBD
 *  - Re-export the ThemeProvider from this component. (not ideal)
 *  - Tweak the build settings (requires diving into tsup docs)
 *  - Idk yet
 *
 * 3. Stopgap: Hold off releasing this component. Release the `useTheme` hook first.
 *------------------------------------------------------------------------------------------------**/

const ThemeToggler: FunctionComponent<ThemeToggler> = ({
  themes = [
    { theme: "light", icon: <SunIcon /> },
    { theme: "dark", icon: <MoonIcon /> },
  ],
}) => {
  // const { setTheme } = useTheme();
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeContext missing");

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    if (themes.length <= 1) return;

    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentIndex(nextIndex);
    context.setTheme(themes[nextIndex]?.theme!);
  };

  return (
    <Button variant="default-ghost" className="p-2" onClick={handleClick}>
      {themes[currentIndex]?.icon ?? <PlaceholderIcon />}
    </Button>
  );
};

export { ThemeToggler, ThemeProvider };
