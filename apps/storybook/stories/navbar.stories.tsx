import type { Meta, StoryObj } from "@storybook/react";
import { createRender, createStory } from "../utils";
import {
  Navbar,
  BrandLogo,
  NavbarContainer,
  NavbarActionGroup,
  DesktopNavigationMenu,
  MobileMenuToggle,
  LanguageSelector,
  MobileNavigationMenu,
  UtilityButton,
} from "@myds/react/navbar";
import React, { useState } from "react";
import { clx } from "@myds/react/utils";

/**
 * ### Overview
 * The Navbar component serves as the main navigation bar for the application, featuring a responsive design
 * with support for multi-level navigation, language switching, and mobile menu functionality.
 *
 *
 * ### Usage
 * ```tsx
 * import {
 *   Navbar,
 *   BrandLogo,
 *   NavbarContainer,
 *   NavbarActionGroup,
 *   DesktopNavigationMenu,
 *   MobileMenuToggle,
 *   LanguageSelector,
 *   MobileNavigationMenu,
 * } from "@myds/react/navbar";
 *
 * import React, { useState } from "react";
 * import clx from "classnames";
 *
 * export default function SampleImporter() {
 *   const nav_items = [
 *     { name: "Menu 1", href: "/Menu1" },
 *     { name: "Menu 2", href: "/Menu2" },
 *     {
 *       name: "Menu Dropdown",
 *       href: [
 *         { name: "Sub Menu 1", href: "/sub-menu-1" },
 *         { name: "Sub Menu 2", href: "/sub-menu-2" },
 *         { name: "Sub Menu 3", href: "/sub-menu-3" },
 *       ],
 *     },
 *     { name: "Menu 3", href: "/Menu3" },
 *   ];
 *
 *   const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
 *   const [value, setValue] = React.useState("EN");
 *   const [showMenu, setMenu] = useState<boolean>(false);
 *   const handleToggle = () => {
 *     setIsDarkMode(!isDarkMode);
 *   };
 *
 *   return (
 *       <Navbar showMenu={showMenu} className="px-2">
 *         <NavbarContainer>
 *           <BrandLogo
 *             type="acronym"
 *             imageSrc="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
 *           >
 *             MYDS
 *           </BrandLogo>
 *           <MobileNavigationMenu
 *             showMenu={showMenu}
 *             setMenu={setMenu}
 *             nav_items={nav_items}
 *           ></MobileNavigationMenu>
 *           <DesktopNavigationMenu nav_items={nav_items} />
 *         </NavbarContainer>
 *         <NavbarActionGroup>
 *           <UtilityButton
 *             isDarkMode={isDarkMode}
 *             handleToggle={handleToggle}
 *           ></UtilityButton>
 *           <LanguageSelector
 *             value={value}
 *             setValue={setValue}
 *           ></LanguageSelector>
 *           <MobileMenuToggle
 *             showMenu={showMenu}
 *             setMenu={setMenu}
 *           ></MobileMenuToggle>
 *         </NavbarActionGroup>
 *       </Navbar>
 *   );
 * }
 * ```
 */

const meta = {
  title: "@myds/react/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoNavbar = () => {
  const nav_items = [
    { name: "Menu 1", href: "/Menu1" },
    { name: "Menu 2", href: "/Menu3" },
    {
      name: "Menu Dropdown",
      href: [
        { name: "Sub Menu 1", href: "/sub-menu-1" },
        { name: "Sub Menu 2", href: "/sub-menu-2" },
        { name: "Sub Menu 3", href: "/sub-menu-3" },
      ],
    },
    { name: "Menu 3", href: "/Menu3" },
  ];

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
            type="acronym"
            imageSrc="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
          >
            MYDS
          </BrandLogo>
          <MobileNavigationMenu
            showMenu={showMenu}
            setMenu={setMenu}
            nav_items={nav_items}
          ></MobileNavigationMenu>

          <DesktopNavigationMenu nav_items={nav_items} />
        </NavbarContainer>
        <NavbarActionGroup>
          <UtilityButton
            isDarkMode={isDarkMode}
            handleToggle={handleToggle}
          ></UtilityButton>
          <LanguageSelector
            value={value}
            setValue={setValue}
          ></LanguageSelector>
          <MobileMenuToggle
            showMenu={showMenu}
            setMenu={setMenu}
          ></MobileMenuToggle>
        </NavbarActionGroup>
      </Navbar>
    </div>
  );
};

export const NavbarCustom = createRender((args: Story["args"]) => {
  return <DemoNavbar />;
}, "light");
