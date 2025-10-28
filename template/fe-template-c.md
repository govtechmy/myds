
Documentation for For FE Templates C ( React + Vite + MYDS + Layout + i18n + router)
===

1. Run
``` npm i react-router-dom ```
2. Create pages file in src
3. Create About.tsx , Home.tsx and Error.tsx and put them in pages file
4. Edit About.tsx
```
export default function AboutPage() {
  return <div>This is About Page</div>;
}
```
5. Edit Home.tsx
```
export default function HomePage() {
  return <div>This is Home Page</div>;
}
```
6. Edit Error.tsx
```
export default function ErrorPage() {
  return <div>This is Error Page</div>;
}
```

7. Refactor Layout.tsx to clear up App.tsx and improve layout.tsx
a) Toggle Language now 
	-- check the path and replaces the lang on path
	-- navigate to new path and re-render using react-router-dom
b) Since using React Router, change children to <Outlet>

```
import { Button } from "@govtechmy/myds-react/button";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import FooterMyds from "./FooterMyds";
import MastheadMyds from "./MastheadMyds";
import NavbarMyds from "./NavbarMyds";
import { Outlet, useNavigate } from "react-router-dom";

export default function LayoutMain() {
  const navigate = useNavigate();

  const toggleLangEn = () => {
    localStorage.setItem("lang", "en");
    i18n.changeLanguage("en");
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|ms)/, `/en`);
    navigate(newPath);
  };

  const toggleLangMs = () => {
    localStorage.setItem("lang", "ms");
    i18n.changeLanguage("ms");
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|ms)/, `/ms`);
    navigate(newPath);
  };

  const { t } = useTranslation();

  return (
    <>
      <MastheadMyds></MastheadMyds>
      <NavbarMyds></NavbarMyds>
      <div className="bg-bg-warning-50">
        <Button onClick={toggleLangMs}>Toggle this to ms</Button>
        <Button onClick={toggleLangEn}>Toggle this to en</Button>
        <h1>{t("welcome")} sini</h1>
      </div>

      {/* use outlet instead of children to tell where to render child routes for the current route hierarchy. */}
      <Outlet></Outlet>
      <FooterMyds></FooterMyds>
    </>
  );
}
```
8. Rework App.tsx to prepare it for clear separation and integration of  Routing.
a) Clear separation: `main.tsx` handles app initialization, `App.tsx` handles app layout and routing.
b) Add Browser Router to wrap the app routes
c) Add App Routes which is the router.tsx later on.
```
import AppRoutes from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  );
}
export default App;
```
9. Create router.tsx inside src
a)  Get lang from local storage, on initialize already added --> read main.tsx
b) Routes from `/` to `/lang` --> making sure if someone goes to `/`, it goes to `lang`
c) The path of `:lang` which is the dynamic route, contain an element `LangWrapper` where is set to get the language and share it with the pages and also handle error page `/*`
--You can remove it IF you plan to go with fetch language on every page, but you need to write back error handling for `/*` route.
d) Added Layout to cover all the pages.
-- IF there is another pages that did not follow the general layout, take it out from `<Route element={<Layout />}>` and create  a new wrapper Route `<Route element={<NewLayout />}>` and wrap he pages inside.
e) Main page is `<Route index element={<HomePage />} />`, feel free to edit `HomePage`
f)  To add pages, add new route and new path `<Route path="newpage" element={<NewPage />} />`
g) Error page handling on path `/lang/*` is handled by `Redirect404Page()`
h) Error page handling on path `/*` is handled by `LangWrapper.tsx` where it redirects the page back to `/lang` where it reads the local storage.
i) Error page itself is in `<Route path="404" element={<ErrorPage />} />`

```
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Layout from "./component/layout/Layout";
import LangWrapper from "./LangWrapper";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";

export default function AppRoutes() {
  let lang = localStorage.getItem("lang");

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${lang}`} replace />} />
      <Route path=":lang" element={<LangWrapper />}>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="testingpage"
            element={<div> this is testing page</div>}
          />
          <Route path="404" element={<ErrorPage />} />
          <Route path="*" element={<Redirect404Page />} />
        </Route>
      </Route>
    </Routes>
  );
}

function Redirect404Page() {
  const { lang } = useParams<{ lang: string | any }>();
  const allowedLangs = ["en", "ms"];
  let langStorage = localStorage.getItem("lang");
  const targetLang = allowedLangs.includes(lang) ? lang : langStorage;
  return <Navigate to={`/${targetLang}/404`} replace />;
}

```

10. Create the LangWrapper inside src
a) A React Router wrapper component that handles language-based routing and i18n initialization.
b) Functions 
--  Reads the `lang` URL parameter (`en` or `ms`).
--   Updates `localStorage` with the current language.
--   Changes the i18n language using `i18n.changeLanguage`.
--   Redirects to a valid language path if the URL parameter is invalid.
--   Renders nested routes via `<Outlet />` when the language is valid.

c) Behavior
-   If `lang` is invalid, it redirects to the language stored in `localStorage` . If local storage lang is not `en` or `ms` it defaults to `/en`.
-   Keeps the application language in sync with both URL and localStorage.
```
import { Navigate, Outlet, useParams } from "react-router-dom";
import i18n from "./i18n";
import { useEffect } from "react";

export default function LangWrapper() {
  let { lang } = useParams<{ lang: string | any }>();
  const isValidLang = lang === "ms" || lang === "en";

  useEffect(() => {
    if (isValidLang) {
      localStorage.setItem("lang", lang!);
      i18n.changeLanguage(lang!);
    } else {
      localStorage.setItem("lang", "en");
      i18n.changeLanguage("en");
    }
  }, [lang, isValidLang]);

  if (!isValidLang) {
    let localStorageLang = localStorage.getItem("lang");
    if (localStorageLang !== "en" && localStorageLang !== "ms") {
      return <Navigate to="/en" replace />;
    }
    return <Navigate to={`/${localStorageLang}`} replace />;
  }

  return <Outlet />;
}

```
11. Update NavbarMyds to update the dropdown language from the path.
a) Updated: Sync state when URL param changes
b) you can now remove the test button to use this dropdown as the main language switcher
```
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { SearchIcon, GlobeIcon } from "@govtechmy/myds-react/icon";
import {
  Navbar,
  NavbarLogo,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuDropdown,
  NavbarAction,
} from "@govtechmy/myds-react/navbar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@govtechmy/myds-react/select";
import { ThemeSwitch } from "@govtechmy/myds-react/theme-switch";
import i18n from "../../i18n";

export default function NavbarMyds() {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("lang") || "en"
  );

  // Sync state when URL param changes (for manual URL changes or navigation)
  useEffect(() => {
    if (lang && (lang === "en" || lang === "ms")) {
      setSelectedLang(lang);
      localStorage.setItem("lang", lang);
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  const updateLanguage = (newLang: string) => {
    setSelectedLang(newLang);
    localStorage.setItem("lang", newLang);
    i18n.changeLanguage(newLang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|ms)/, `/${newLang}`);
    navigate(newPath);
  };

  return (
    <Navbar>
      <NavbarLogo
        src="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
        alt="Malaysian Government Design System"
      >
        MYDS
      </NavbarLogo>

      <NavbarMenu>
        <NavbarMenuItem href="/menu1">Menu 1</NavbarMenuItem>
        <NavbarMenuItem href="/menu2">Menu 2</NavbarMenuItem>
        <NavbarMenuDropdown title="Menu Dropdown">
          <NavbarMenuItem href="/submenu1">Submenu 1</NavbarMenuItem>
          <NavbarMenuItem href="/submenu2">Submenu 2</NavbarMenuItem>
          <NavbarMenuItem href="/submenu3">Submenu 3</NavbarMenuItem>
          <NavbarMenuItem href="/submenu4">Submenu 4</NavbarMenuItem>
        </NavbarMenuDropdown>
        <NavbarMenuItem href="/menu3">Menu 3</NavbarMenuItem>
      </NavbarMenu>

      <NavbarAction>
        {/* Search Button */}
        <Button
          variant="default-ghost"
          iconOnly
          aria-label="search-button"
          size="small"
        >
          <ButtonIcon>
            <SearchIcon />
          </ButtonIcon>
        </Button>

        {/* Theme Switch */}
        <ThemeSwitch as="toggle" />

        {/* Language Selector */}
        <div className="hidden sm:block">
          <Select
            value={selectedLang}
            onValueChange={(value) => updateLanguage(value)}
            variant="outline"
            size="small"
          >
            <SelectTrigger aria-label="language-selection">
              <GlobeIcon className="h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end" className="font-body rounded-[4px] py-1">
              <SelectItem value="en">en</SelectItem>
              <SelectItem value="ms">ms</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </NavbarAction>
    </Navbar>
  );
}
```