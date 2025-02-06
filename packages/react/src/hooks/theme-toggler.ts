"use client";

//for next js, use client need to be set else it will render on server.
//basic react or even vanilla can just import and use as it is, but need to remove "use client" or syntax error will occur.

const THEME_KEY = "theme" as const;
const LIGHT = "light" as const;
const DARK = "dark" as const;

type Theme = typeof LIGHT | typeof DARK;

function getTheme(): Theme {
  return (localStorage.getItem(THEME_KEY) as Theme) || LIGHT;
}

function applyTheme(theme: Theme): void {
  document.documentElement.classList.remove(LIGHT, DARK);
  document.documentElement.classList.add(theme);
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme(): void {
  const newTheme: Theme = getTheme() === LIGHT ? DARK : LIGHT;
  applyTheme(newTheme);
}

(window as any).toggleTheme = toggleTheme;

export { getTheme, applyTheme, toggleTheme, THEME_KEY, LIGHT, DARK };
