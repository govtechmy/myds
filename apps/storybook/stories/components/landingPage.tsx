import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { Footer } from "@govtechmy/myds-react/footer";
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
    <Navbar showMenu={showMenu}>
      <NavbarContainer>
        <BrandLogo
          imageSrc="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
          href="#"
        >
          MyDS
        </BrandLogo>

        <NavigationMenuCombo showMenu={showMenu} setMenu={setMenu}>
          <NavItemsMenu key={1} href="#">
            Menu 1
          </NavItemsMenu>
          <NavItemsMenu key={1} href="#">
            Menu 2
          </NavItemsMenu>
          <NavItemsMenu key={1} href="#">
            Menu 3
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
      <div
        className={clx(
          "grid w-full pb-8 pt-8",
          "gap-4.5 px-4.5 grid-cols-4",
          "md:gap-6 md:px-6 md:max-lg:grid-cols-8",
          "max-w-[1280px] lg:mx-auto lg:grid-cols-12",
          "font-body",
        )}
      >
        <picture
          className={clx(
            "col-span-full mx-auto max-w-[740px] md:order-2",
            "md:max-lg:col-span-5 md:max-lg:col-start-4",
            "lg:col-span-5 lg:col-start-6",
          )}
        >
          <img
            src="../stories/assets/addon-library.png"
            className="w-full object-cover"
          />
        </picture>
        <div
          className={clx(
            "max-auto gap-4.5 col-span-full flex max-w-[640px] flex-col md:order-1",
            "md:max-lg:col-span-3 md:max-lg:col-start-1",
            "lg:col-span-3 lg:col-start-2",
          )}
        >
          <h5 className="text-txt-primary text-body-sm font-semibold">
            AKTIVITI TERKINI
          </h5>
          <h4 className="font-heading text-heading-sm font-semibold">
            ANOTHER TITLE
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            quibusdam aspernatur molestias laboriosam impedit necessitatibus
            iusto ullam? Magnam iusto tenetur cumque saepe in odit ad.
          </p>
          <Button>Click here</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
