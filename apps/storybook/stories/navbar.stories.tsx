import type { Meta, StoryObj } from "@storybook/react";
import { createRender, createStory } from "../utils";
import {
  Navbar,
  BrandLogo,
  NavbarContainer,
  NavbarActionGroup,
  NavItemsDropdown,
  NavItemsDropdownItems,
  NavItemsMenu,
  NavigationMenuCombo,
  NavItemsMenuMobile,
  NavItemsDropdownMobile,
  NavItemsDropdownItemsMobile,
} from "@myds/react/navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@myds/react/select";
import React, { useState } from "react";
import { clx } from "@myds/react/utils";
import { GlobeIcon } from "@myds/react/icon";

/**
 * ### Overview
 * The Navbar component serves as the main navigation bar for the application, featuring a responsive design
 * with support for multi-level navigation, language switching, and mobile menu functionality.
 *
 *
 * ### Usage
 * ```tsx
      <Navbar showMenu={showMenu} className="px-2">
        <NavbarContainer>
          <BrandLogo
            type="shortname"
            imageSrc="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
          >
            MYDS
          </BrandLogo>
          <NavigationMenuCombo
            showMenu={showMenu}
            setMenu={setMenu}
            childrenDesktop={
              <>
                <NavItemsMenu href="/menu1" active={false}>
                  Menu 1
                </NavItemsMenu>
                <NavItemsMenu href="/menu2" active={false}>
                  Menu 2
                </NavItemsMenu>

                <NavItemsDropdown menu="Menu Dropdown">
                  <NavItemsDropdownItems href="/submenu1">
                    Submenu 1
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu2">
                    Submenu 2
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu3">
                    Submenu 3
                  </NavItemsDropdownItems>
                </NavItemsDropdown>

                <NavItemsMenu href="/menu3" active={false}>
                  Menu 3
                </NavItemsMenu>
              </>
            }
            childrenMobile={
              <>
                <NavItemsMenuMobile href="/menu1" active={false}>
                  Menu 1
                </NavItemsMenuMobile>
                <NavItemsMenuMobile href="/menu2" active={false}>
                  Menu 2
                </NavItemsMenuMobile>

                <NavItemsDropdownMobile menu="Menu Dropdown">
                  <NavItemsDropdownItemsMobile href="/submenu1">
                    Submenu 1
                  </NavItemsDropdownItemsMobile>
                  <NavItemsDropdownItemsMobile href="/submenu2">
                    Submenu 2
                  </NavItemsDropdownItemsMobile>
                  <NavItemsDropdownItemsMobile href="/submenu3">
                    Submenu 3
                  </NavItemsDropdownItemsMobile>
                </NavItemsDropdownMobile>

                <NavItemsMenuMobile href="/menu3" active={false}>
                  Menu 3
                </NavItemsMenuMobile>
              </>
            }
          ></NavigationMenuCombo>
        </NavbarContainer>
        <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
          <Select
            value={value}
            onValueChange={setValue}
            defaultValue="EN"
            multiple={false}
            variant="outline"
            size="medium"
          >
            <SelectTrigger>
              <GlobeIcon className="h-4 w-4"></GlobeIcon>
              <SelectValue>{(value) => value || "EN"}</SelectValue>
            </SelectTrigger>
            <SelectContent className="font-body rounded-[4px] py-1">
              <SelectItem value="EN">EN</SelectItem>
              <SelectItem value="BM">BM</SelectItem>
            </SelectContent>
          </Select>
        </NavbarActionGroup>
      </Navbar>
 * ```
 */

const meta = {
  title: "@myds/react/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: false,
      description: "Content for the Navbar sections",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    showMenu: {
      control: false,
      description: "State to control the open and close of menu",
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [value, setValue] = React.useState("EN");
  const [showMenu, setMenu] = useState<boolean>(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={clx(isDarkMode ? "light" : "dark")}>
      <Navbar showMenu={showMenu} className="px-2">
        <NavbarContainer>
          <BrandLogo
            type="shortname"
            imageSrc="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
          >
            MYDS
          </BrandLogo>
          <NavigationMenuCombo
            showMenu={showMenu}
            setMenu={setMenu}
            childrenDesktop={
              <>
                <NavItemsMenu href="/menu1" active={false}>
                  Menu 1
                </NavItemsMenu>
                <NavItemsMenu href="/menu2" active={false}>
                  Menu 2
                </NavItemsMenu>

                <NavItemsDropdown menu="Menu Dropdown">
                  <NavItemsDropdownItems href="/submenu1">
                    Submenu 1
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu2">
                    Submenu 2
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu3">
                    Submenu 3
                  </NavItemsDropdownItems>
                </NavItemsDropdown>

                <NavItemsMenu href="/menu3" active={false}>
                  Menu 3
                </NavItemsMenu>
              </>
            }
            childrenMobile={
              <>
                <NavItemsMenuMobile href="/menu1" active={false}>
                  Menu 1
                </NavItemsMenuMobile>
                <NavItemsMenuMobile href="/menu2" active={false}>
                  Menu 2
                </NavItemsMenuMobile>

                <NavItemsDropdownMobile menu="Menu Dropdown">
                  <NavItemsDropdownItemsMobile href="/submenu1">
                    Submenu 1
                  </NavItemsDropdownItemsMobile>
                  <NavItemsDropdownItemsMobile href="/submenu2">
                    Submenu 2
                  </NavItemsDropdownItemsMobile>
                  <NavItemsDropdownItemsMobile href="/submenu3">
                    Submenu 3
                  </NavItemsDropdownItemsMobile>
                </NavItemsDropdownMobile>

                <NavItemsMenuMobile href="/menu3" active={false}>
                  Menu 3
                </NavItemsMenuMobile>
              </>
            }
          ></NavigationMenuCombo>
        </NavbarContainer>
        <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
          <Select
            value={value}
            onValueChange={setValue}
            defaultValue="EN"
            multiple={false}
            variant="outline"
            size="medium"
          >
            <SelectTrigger>
              <GlobeIcon className="h-4 w-4"></GlobeIcon>
              <SelectValue>{(value) => value || "EN"}</SelectValue>
            </SelectTrigger>
            <SelectContent className="font-body rounded-[4px] py-1">
              <SelectItem value="EN">EN</SelectItem>
              <SelectItem value="BM">BM</SelectItem>
            </SelectContent>
          </Select>
        </NavbarActionGroup>
      </Navbar>
    </div>
  );
};

export const NavbarCustom = createRender((args: Story["args"]) => {
  return <DemoNavbar />;
}, "light");
