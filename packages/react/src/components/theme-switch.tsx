import {
  FunctionComponent,
  isValidElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { MoonIcon, SunIcon } from "../icons";
import { Button } from "./button";
import { useTheme } from "../hooks/use-theme";
import {
  Select,
  SelectValue,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "./select";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

interface Theme {
  label: string;
  value: string;
  icon: ReactNode;
}

interface ThemeSwitch {
  as?: "toggle" | "select";
  themes?: Array<Theme>;
}

const ThemeSwitch: FunctionComponent<ThemeSwitch> = ({
  as = "toggle",
  themes = [
    { label: "Light", value: "light", icon: <SunIcon /> },
    { label: "Dark", value: "dark", icon: <MoonIcon /> },
  ],
}) => {
  const { theme, setTheme, defaultTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  /*------------------ as toggle -----------------*/
  const handleToggle = () => {
    if (themes.length <= 1) return;

    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentIndex(nextIndex);
    setTheme(themes[nextIndex]!.value);
  };

  useEffect(() => {
    if (as === "toggle") {
      const index = themes.findIndex((t) => t.value === theme);
      setCurrentIndex(index);
    }
  }, [theme]);

  if (as === "toggle")
    return (
      <Button
        variant="default-ghost"
        className="aspect-square flex-shrink-0 rounded-md"
        onClick={handleToggle}
        aria-label={themes[currentIndex]?.label}
      >
        {themes[currentIndex]?.icon || themes[currentIndex]?.label}
      </Button>
    );

  /*------------------ as select -----------------*/

  const getTheme = (value: string) =>
    themes.find((theme) => theme.value === value);

  const displayIcon = (value: string) => {
    const _theme = getTheme(value);
    if (isValidElement(_theme?.icon))
      return (
        <Slot className={"text-txt-black-900 size-4 flex-shrink-0"}>
          {_theme?.icon}
        </Slot>
      );
    return _theme?.icon;
  };

  return (
    <Select
      multiple={false}
      size={"small"}
      variant={"outline"}
      value={theme || defaultTheme}
      onValueChange={(value) => setTheme(value)}
    >
      <SelectTrigger>
        <SelectValue>
          {(value) => (
            <div className="flex items-center gap-2">
              <div>{displayIcon(value as string)}</div>
              <span>{getTheme(value as string)?.label}</span>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        {themes.map((theme) => (
          <SelectItem
            key={theme.value}
            value={theme.value}
            aria-label={theme.label}
          >
            {theme.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

ThemeSwitch.displayName = "ThemeSwitch";

export { ThemeSwitch };
