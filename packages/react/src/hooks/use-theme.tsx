import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  defaultTheme: string;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  defaultTheme: "light",
});

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: string;
  storageKey?: string;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
  defaultTheme = "light",
  storageKey = "theme",
}) => {
  const [theme, setTheme] = useState<string>(defaultTheme);
  const _setTheme = (newTheme: string) => {
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem(storageKey, newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, defaultTheme, setTheme: _setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export { ThemeProvider, ThemeContext, useTheme };
