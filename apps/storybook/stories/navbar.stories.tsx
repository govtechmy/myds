import type { Meta } from "@storybook/react";
import { createStory } from "../utils";
import {
  Navbar,
  NavbarLogo,
  NavbarAction,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuDropdown,
} from "@govtechmy/myds-react/navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@govtechmy/myds-react/select";
import { GlobeIcon, SearchIcon } from "@govtechmy/myds-react/icon";
import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { ThemeSwitch } from "@govtechmy/myds-react/theme-switch";

/**
 * ### Overview
 * The Navbar component serves as the main navigation bar for the application, featuring a responsive design
 * with support for multi-level navigation, language switching, and mobile menu functionality.
 *
 *
 * ### Usage
 * ```tsx
 *   <Navbar>
 *      <NavbarLogo src="https://d2391uizq0pg2.cloudfront.net/common/logo.svg">MYDS</NavbarLogo>
 *         <NavbarMenu>
 *             <NavbarMenuItem href="/menu1">
 *                 MinistryProfile
 *             </NavbarMenuItem>
 *             <NavbarMenuItem href="/menu2">
 *                 Policy
 *             </NavbarMenuItem>
 *             <NavbarMenuItem href="/menu3">
 *                 Achievements
 *             </NavbarMenuItem>
 *             <NavbarMenuItem href="/menu4">
 *                 Media
 *             </NavbarMenuItem>
 *             <NavbarMenuItem href="/menu5">
 *                 Directory
 *             </NavbarMenuItem>
 *             <NavbarMenuItem href="/menu6">
 *                 Contact Us
 *             </NavbarMenuItem>
 *
 *             <NavbarMenuDropdown title="Departments & Agencies">
 *                 <NavbarMenuItem href="/submenu1">
 *                     National Digital Department
 *                 </NavbarMenuItem>
 *                 <NavbarMenuItem href="/submenu2">
 *                     Personal Data Protection Department
 *                 </NavbarMenuItem>
 *                 <NavbarMenuItem href="/submenu3">
 *                     Cybersecurity Malaysia
 *                 </NavbarMenuItem>
 *                 <NavbarMenuItem href="/submenu4">
 *                     Digital Nasional Berhad
 *                 </NavbarMenuItem>
 *                 <NavbarMenuItem href="/submenu5">
 *                     Malaysia Digital Economy Corporation (MDEC)
 *                 </NavbarMenuItem>
 *                 <NavbarMenuItem href="/submenu6">
 *                     MyDIGITAL Corporation
 *                 </NavbarMenuItem>
 *                 <NavbarMenuItem href="/submenu6">
 *                     MYNIC Berhad
 *                 </NavbarMenuItem>
 *             </NavItemsDropdown>
 *         </NavbarMenu>
 *
 *     <NavbarAction showtitle={showMenu} settitle={setMenu}>
 *         <Button variant="default-ghost" className="p-2">
 *             <SearchIcon></SearchIcon>
 *         </Button>
 *
 *         <Button
 *             variant="default-ghost"
 *             className="p-2"
 *             onClick={handleToggle}
 *         >
 *             {isDarkMode ? <SunIcon /> : <MoonIcon />}
 *         </Button>
 *
 *         <Select
 *             value={value}
 *             onValueChange={setValue}
 *             defaultValue="EN"
 *             multiple={false}
 *             variant="outline"
 *             size="medium"
 *         >
 *             <SelectTrigger>
 *                 <GlobeIcon className="h-4 w-4"></GlobeIcon>
 *                 <SelectValue>{(value) => value || "EN"}</SelectValue>
 *             </SelectTrigger>
 *             <SelectContent className="font-body rounded-[4px] py-1">
 *                 <SelectItem value="EN">EN</SelectItem>
 *                 <SelectItem value="BM">BM</SelectItem>
 *             </SelectContent>
 *         </Select>
 *     </NavbarAction>
 * </Navbar>
 * ```
 */

const meta = {
  title: "@govtechmy/myds-react/Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => {
      return (
        <div className="h-[300px]">
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    children: {
      control: false,
      description: "Content for the Navbar sections",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;

export const NavbarCustomMyds = createStory(
  {
    children: (
      <>
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
            <NavbarMenuItem href="/submenu1">Submenu 4</NavbarMenuItem>
            <NavbarMenuItem href="/submenu2">Submenu 5</NavbarMenuItem>
            <NavbarMenuItem href="/submenu3">Submenu 6</NavbarMenuItem>
            <NavbarMenuItem href="/submenu3">Submenu 7</NavbarMenuItem>
          </NavbarMenuDropdown>
          <NavbarMenuItem href="/menu3">Menu 3</NavbarMenuItem>
        </NavbarMenu>

        <NavbarAction>
          {/* Button Search  : mobile hide if needed  */}
          <Button
            variant="default-ghost"
            iconOnly
            aria-label="search-button"
            size={"small"}
          >
            <ButtonIcon>
              <SearchIcon />
            </ButtonIcon>
          </Button>

          {/* Button Light Mode Toggle  : mobile hide if needed  */}
          <ThemeSwitch as="toggle" />

          {/* Select Language Toggle  : mobile hide if needed  */}
          <div className="hidden sm:block">
            <Select defaultValue="EN" variant="outline" size="small">
              <SelectTrigger aria-label="language-selection">
                <GlobeIcon className="h-4 w-4"></GlobeIcon>
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                align="end"
                className="font-body rounded-[4px] py-1"
              >
                <SelectItem value="EN">EN</SelectItem>
                <SelectItem value="BM">BM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </NavbarAction>
      </>
    ),
  },
  "light",
);

export const NavbarCustomKementerianDigital = createStory(
  {
    children: (
      <>
        <NavbarLogo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"
          alt="Kementerian Digital"
        >
          Ministry Of Digital
        </NavbarLogo>
        <NavbarMenu>
          <NavbarMenuItem href="/menu1">MinistryProfile</NavbarMenuItem>
          <NavbarMenuItem href="/menu2">Policy</NavbarMenuItem>
          <NavbarMenuItem href="/menu3">Achievements</NavbarMenuItem>
          <NavbarMenuItem href="/menu4">Media</NavbarMenuItem>
          <NavbarMenuItem href="/menu5">Directory</NavbarMenuItem>
          <NavbarMenuItem href="/menu6">Contact Us</NavbarMenuItem>

          <NavbarMenuDropdown title="Departments & Agencies">
            <NavbarMenuItem href="/submenu1">
              National Digital Department
            </NavbarMenuItem>
            <NavbarMenuItem href="/submenu2">
              Personal Data Protection Department
            </NavbarMenuItem>
            <NavbarMenuItem href="/submenu3">
              Cybersecurity Malaysia
            </NavbarMenuItem>
            <NavbarMenuItem href="/submenu4">
              Digital Nasional Berhad
            </NavbarMenuItem>
            <NavbarMenuItem href="/submenu5">
              Malaysia Digital Economy Coroporation (MDEC)
            </NavbarMenuItem>
            <NavbarMenuItem href="/submenu6">
              MyDIGITAL Corporation
            </NavbarMenuItem>
            <NavbarMenuItem href="/submenu6">MYNIC Berhad</NavbarMenuItem>
          </NavbarMenuDropdown>
        </NavbarMenu>
        <NavbarAction>
          {/* Button Search  : mobile hide if needed  */}
          <Button
            variant="default-ghost"
            iconOnly
            aria-label="search-button"
            size={"small"}
          >
            <ButtonIcon>
              <SearchIcon />
            </ButtonIcon>
          </Button>

          {/* Button Light Mode Toggle : mobile hide if needed  */}
          <ThemeSwitch as="toggle" />

          {/* Select Language Toggle : mobile hide if needed */}
          <div className="hidden sm:block">
            <Select defaultValue="EN" variant="outline" size="medium">
              <SelectTrigger aria-label="language-selection">
                <GlobeIcon className="h-4 w-4"></GlobeIcon>
                <SelectValue>{(value) => value || "EN"}</SelectValue>
              </SelectTrigger>
              <SelectContent className="font-body rounded-[4px] py-1">
                <SelectItem value="EN">EN</SelectItem>
                <SelectItem value="BM">BM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </NavbarAction>
      </>
    ),
  },
  "light",
);
