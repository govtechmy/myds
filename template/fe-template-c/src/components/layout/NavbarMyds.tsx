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
  const [isHidden, setIsHidden] = useState(false);

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

      <NavbarMenu
        classNameNavDesktop=""
        classNameNavMobile={`top-[-4vh] ${isHidden ? "block" : "hidden"}`}
      >
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

      <NavbarAction onClick={() => setIsHidden((prev) => !prev)}>
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
