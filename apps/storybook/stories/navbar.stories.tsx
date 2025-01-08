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
import { GlobeIcon, MoonIcon, SearchIcon, SunIcon } from "@myds/react/icon";
import { Button } from "@myds/react/button";

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
    layout: "full",
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
                  <NavItemsDropdownItems href="/submenu1">
                    Submenu 4
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu2">
                    Submenu 5
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu3">
                    Submenu 6
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu3">
                    Submenu 7
                  </NavItemsDropdownItems>
                </NavItemsDropdown>

                <NavItemsMenu href="/menu3" active={false}>
                  Menu 3
                </NavItemsMenu>
              </>
            }
            childrenMobile={
              <>
                <NavItemsMenu href="/menu1" active={false}>
                  <div>Menu 1</div>
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
                  <NavItemsDropdownItems href="/submenu1">
                    Submenu 4
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu2">
                    Submenu 5
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu3">
                    Submenu 6
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu3">
                    Submenu 7
                  </NavItemsDropdownItems>
                </NavItemsDropdown>
                <NavItemsMenu href="/menu3" active={false}>
                  Menu 3
                </NavItemsMenu>
              </>
            }
          ></NavigationMenuCombo>
        </NavbarContainer>

        <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
          {/* Button Search */}
          <Button variant="default-ghost" className="p-2">
            <SearchIcon></SearchIcon>
          </Button>

          {/* Button Light Mode Toggle */}
          <Button
            variant="default-ghost"
            className="p-2"
            onClick={handleToggle}
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </Button>

          {/* Select Language Toggle */}
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

const KementerianDigitalNavbar = () => {
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
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"
          >
            Ministry of Digital
          </BrandLogo>

          <NavigationMenuCombo
            showMenu={showMenu}
            setMenu={setMenu}
            childrenDesktop={
              <>
                <NavItemsMenu href="/menu1" active={false}>
                  MinistryProfile
                </NavItemsMenu>
                <NavItemsMenu href="/menu2" active={false}>
                  Policy
                </NavItemsMenu>
                <NavItemsMenu href="/menu3" active={false}>
                  Achievements
                </NavItemsMenu>
                <NavItemsMenu href="/menu4" active={false}>
                  Media
                </NavItemsMenu>
                <NavItemsMenu href="/menu5" active={false}>
                  Directory
                </NavItemsMenu>
                <NavItemsMenu href="/menu6" active={false}>
                  Contact Us
                </NavItemsMenu>

                <NavItemsDropdown menu="Departments & Agencies">
                  <NavItemsDropdownItems href="/submenu1">
                    National Digital Department
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu2">
                    Personal Data Protection Department
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu3">
                    Cybersecurity Malaysia
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu4">
                    Digital Nasional Berhad
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu5">
                    Malaysia Digital Economy Coroporation (MDEC)
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu6">
                    MyDIGITAL Corporation
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu6">
                    MYNIC Berhad
                  </NavItemsDropdownItems>
                </NavItemsDropdown>
              </>
            }
            childrenMobile={
              <>
                <NavItemsMenu href="/menu1" active={false}>
                  MinistryProfile
                </NavItemsMenu>
                <NavItemsMenu href="/menu2" active={false}>
                  Policy
                </NavItemsMenu>
                <NavItemsMenu href="/menu3" active={false}>
                  Achievements
                </NavItemsMenu>
                <NavItemsMenu href="/menu4" active={false}>
                  Media
                </NavItemsMenu>
                <NavItemsMenu href="/menu5" active={false}>
                  Directory
                </NavItemsMenu>
                <NavItemsMenu href="/menu6" active={false}>
                  Contact Us
                </NavItemsMenu>

                <NavItemsDropdown menu="Departments & Agencies">
                  <NavItemsDropdownItems href="/submenu1">
                    National Digital Department
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu2">
                    Personal Data Protection Department
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu3">
                    Cybersecurity Malaysia
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu4">
                    Digital Nasional Berhad
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu5">
                    Malaysia Digital Economy Coroporation (MDEC)
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu6">
                    MyDIGITAL Corporation
                  </NavItemsDropdownItems>
                  <NavItemsDropdownItems href="/submenu6">
                    MYNIC Berhad
                  </NavItemsDropdownItems>
                </NavItemsDropdown>
              </>
            }
          ></NavigationMenuCombo>
        </NavbarContainer>

        <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
          {/* Button Search */}
          <Button variant="default-ghost" className="p-2">
            <SearchIcon></SearchIcon>
          </Button>

          {/* Button Light Mode Toggle */}
          <Button
            variant="default-ghost"
            className="p-2"
            onClick={handleToggle}
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </Button>

          {/* Select Language Toggle */}
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

export const NavbarCustomMyds = createRender((args: Story["args"]) => {
  return (
    <div className="h-[300px]">
      <DemoNavbar />
    </div>
  );
}, "light");

export const NavbarCustomKementerianDigital = createRender(
  (args: Story["args"]) => {
    return (
      <div className="h-[300px]">
        <KementerianDigitalNavbar />
      </div>
    );
  },
  "light",
);
