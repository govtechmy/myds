import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import {
  GlobeIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "@govtechmy/myds-react/icon";
import { Masthead } from "@govtechmy/myds-react/masthead";
import {
  BrandLogo,
  Navbar,
  NavbarActionGroup,
  NavbarContainer,
  NavigationMenuCombo,
  NavItemsDropdown,
  NavItemsDropdownItems,
  NavItemsMenu,
} from "@govtechmy/myds-react/navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@govtechmy/myds-react/select";
import { ThemeSwitch } from "@govtechmy/myds-react/theme-switch";
import { clx } from "@govtechmy/myds-react/utils";
import { useState } from "react";

const DemoNavbar = () => {
  const [showMenu, setMenu] = useState<boolean>(false);

  return (
    <Navbar
      showMenu={showMenu}
      background="dark:border-otl-gray-200"
      className="w-full"
    >
      <NavbarContainer>
        <BrandLogo
          imageSrc="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
          href="#"
        >
          MyDS
        </BrandLogo>

        <NavigationMenuCombo showMenu={showMenu} setMenu={setMenu}>
          <NavItemsMenu key={1} href="#" active>
            Menu 1
          </NavItemsMenu>
        </NavigationMenuCombo>
      </NavbarContainer>

      <NavbarActionGroup
        showMenu={showMenu}
        setMenu={setMenu}
      ></NavbarActionGroup>
    </Navbar>
  );
};

export default function LandingPage() {
  return (
    <div>
      <Masthead />
      <DemoNavbar />
      <p>This is it</p>
      <div
        className={clx(
          "w-full pb-16 pt-16",
          "gap-4.5 px-4.5 grid grid-cols-4",
          "md:gap-6 md:px-6 md:max-lg:grid-cols-8",
          "lg:grid-cols-12",
          "font-body",
        )}
      ></div>
    </div>
  );
}
