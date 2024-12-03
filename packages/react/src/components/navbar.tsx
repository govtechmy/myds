import { clx } from "../utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
} from "./sheet";
import { Button, button_cva } from "./button";
import { ChevronDownIcon, MoonIcon, SearchIcon, SunIcon } from "../icons";
import { CrossIcon, HamburgerMenuIcon, GlobeIcon } from "../icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FunctionComponent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import React from "react";
import { VariantProps, cva } from "class-variance-authority";

const headerVariant = cva(
  ["font-semibold max-w-[223px] font-heading"],

  {
    variants: {
      type: {
        shortname:
          "sm:text-lg sm:leading-[26px] text-xs leading-[14px] line-clamp-2 ",
        //more than 10 words
        longname: "text-xs leading-[14px] line-clamp-2",
        //more than 26 words
        acronym: "text-2xl leading-[28px] sm:text-lg sm:leading-[26px]",
        //lesser than 10 words
      },
    },
    defaultVariants: {
      type: "shortname",
    },
  },
);

// Navbar Main
//==========================================================================
interface NavbarProps {
  showMenu: Boolean;
  children?: React.ReactNode;
  className?: string;
}

const Navbar: FunctionComponent<NavbarProps> = ({
  showMenu,
  children,
  className,
}) => {
  return (
    <header
      className={clx(
        "bg-bg-white sticky top-0 z-50 lg:border-b lg:backdrop-blur-[30px] print:hidden",
        className,
      )}
    >
      <div
        className={clx(
          "border-otl-gray-200 bg-bg-white container flex h-16 items-center justify-between gap-3 py-3 max-xl:pr-3 max-lg:border-b lg:gap-4",
          showMenu ? "" : "xl:bg-transparent",
        )}
        data-nosnippet
      >
        {children}
      </div>
    </header>
  );
};
//==========================================================================

// Navbar Container
//==========================================================================
interface NavbarContainerProps {
  children?: React.ReactNode;
}
const NavbarContainer: FunctionComponent<NavbarContainerProps> = ({
  children,
}) => {
  return (
    <div className="text-bg-black-900 flex items-center justify-between gap-3 lg:gap-4">
      {children}
    </div>
  );
};
//==========================================================================

// Navbar Action Group
//==========================================================================
interface NavbarActionGroupProps {
  children?: React.ReactNode;
}
const NavbarActionGroup: FunctionComponent<NavbarActionGroupProps> = ({
  children,
}) => {
  return <div className="flex items-center gap-2">{children}</div>;
};
//==========================================================================

// Language Selector
//==========================================================================
interface LanguageSelectorProps {
  value: string;
  setValue: (value: string) => void;
}
const LanguageSelector: FunctionComponent<LanguageSelectorProps> = ({
  value,
  setValue,
}) => {
  return (
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
  );
};
//==========================================================================

// Mobile Menu (Hamburger)
//==========================================================================
interface MobileMenuToggleProps {
  showMenu: boolean;
  setMenu: (value: boolean) => void;
}
const MobileMenuToggle: FunctionComponent<MobileMenuToggleProps> = ({
  showMenu,
  setMenu,
}) => {
  return (
    <Button
      variant="default-outline"
      className={clx("block p-2.5 xl:hidden", showMenu && "bg-bg-washed")}
      onClick={() => setMenu(!showMenu)}
    >
      {showMenu ? <CrossIcon /> : <HamburgerMenuIcon />}
    </Button>
  );
};
//==========================================================================

// Brand Logo
//==========================================================================

interface BrandLogoProps extends VariantProps<typeof headerVariant> {
  children?: React.ReactNode;
  imageSrc: string;
  alt?: string;
  href?: string;
}
const BrandLogo: FunctionComponent<BrandLogoProps> = ({
  children,
  imageSrc,
  alt,
  type = "shortname",
  href = "/",
}) => {
  return (
    <a href={href} className="flex h-full w-full items-center gap-2.5">
      <img
        src={imageSrc}
        width={40}
        height={32}
        style={{
          width: "auto",
        }}
        className="h-8 w-fit select-none"
        alt={alt}
      />

      <span className={clx(headerVariant({ type }))}>{children}</span>
    </a>
  );
};
//==========================================================================

// Mobile Navigation Menu
//==========================================================================
interface MobileNavigationMenuProps {
  showMenu: boolean;
  setMenu: (value: boolean) => void;
  nav_items: (
    | {
        name: string;
        href: string;
      }
    | {
        name: string;
        href: {
          name: string;
          href: string;
        }[];
      }
  )[];
  active?: boolean;
}

const MobileNavigationMenu: FunctionComponent<MobileNavigationMenuProps> = ({
  showMenu,
  setMenu,
  nav_items,
  active = false,
}) => {
  return (
    <Sheet open={showMenu} onOpenChange={setMenu}>
      <SheetContent
        side="top"
        className="bg-bg-white absolute top-full -z-10 flex flex-col gap-1 rounded-b-xl p-3 xl:hidden"
      >
        {nav_items.map(({ name, href }) =>
          Array.isArray(href) ? (
            <Accordion
              key={name}
              className="bg-bg-white"
              type="single"
              defaultValue="item-1"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className={clx(
                    button_cva({
                      variant: "default-ghost",
                      size: "medium",
                    }),
                    "bg-bg-white justify-start text-base hover:bg-none focus:ring-0",
                  )}
                >
                  {name}
                </AccordionTrigger>
                <AccordionContent>
                  {href.map((item) => (
                    <SheetClose asChild key={name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clx(
                          button_cva({
                            variant: "default-ghost",
                            size: "medium",
                          }),
                          "data-[state=open]:bg-bg-washed w-full justify-start text-sm",
                        )}
                      >
                        {item.name}
                      </a>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <SheetClose asChild key={name}>
              <a
                href={href}
                data-state={active ? "open" : "close"}
                className={clx(
                  button_cva({
                    variant: "default-ghost",
                    size: "medium",
                  }),
                  "data-[state=open]:bg-bg-washed w-full justify-start text-base",
                )}
              >
                {name}
              </a>
            </SheetClose>
          ),
        )}
      </SheetContent>
      <SheetPortal>
        <SheetOverlay className="z-40" />
      </SheetPortal>
    </Sheet>
  );
};

// Desktop Navigation Menu
//==========================================================================
interface DesktopNavigationMenuProps {
  nav_items: (
    | {
        name: string;
        href: string;
      }
    | {
        name: string;
        href: {
          name: string;
          href: string;
        }[];
      }
  )[];
  active?: boolean;
}

const DesktopNavigationMenu: FunctionComponent<DesktopNavigationMenuProps> = ({
  nav_items,
  active = false,
}) => {
  return (
    <NavigationMenu.Root className="relative z-10 hidden w-max justify-center xl:flex">
      <NavigationMenu.List className="group flex list-none justify-center space-x-1">
        {nav_items.map(({ name, href }) =>
          Array.isArray(href) ? (
            <NavigationMenu.Item key={name}>
              <NavigationMenu.Trigger
                className={clx(
                  button_cva({ variant: "default-ghost" }),
                  "data-[state=open]:bg-bg-washed group w-max select-none bg-transparent transition-colors",
                )}
              >
                {name}
                <ChevronDownIcon
                  className="relative top-px ml-1 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenu.Trigger>

              <NavigationMenu.Content className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 medium:absolute medium:w-auto left-0 top-0 w-full">
                <ul className="bg-bg-white shadow-card rounded-lg border p-3">
                  {href.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clx(
                        button_cva({ variant: "default-ghost" }),
                        "data-[state=open]:bg-bg-washed w-full justify-start bg-transparent transition-colors",
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          ) : (
            <NavigationMenu.Item key={name}>
              <a
                href={href}
                data-state={active ? "open" : "close"}
                className={clx(
                  button_cva({ variant: "default-ghost" }),
                  "data-[state=open]:bg-bg-washed w-max bg-transparent transition-colors",
                )}
              >
                {name}
              </a>
            </NavigationMenu.Item>
          ),
        )}
      </NavigationMenu.List>
      <div className="absolute right-0 top-full">
        <NavigationMenu.Viewport className="origin-top-center shadow-card data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 medium:w-[var(--radix-navigation-menu-viewport-width)] relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-lg" />
      </div>
    </NavigationMenu.Root>
  );
};

//==========================================================================

// Utility Button : can choose want to use or not.
//==========================================================================

interface UtilityButtonProps {
  isDarkMode: boolean;
  handleToggle: () => void;
}
const UtilityButton: FunctionComponent<UtilityButtonProps> = ({
  handleToggle,
  isDarkMode,
}) => {
  return (
    <>
      <Button variant="default-ghost" className="p-2">
        <SearchIcon></SearchIcon>
      </Button>
      <Button variant="default-ghost" className="p-2" onClick={handleToggle}>
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </Button>
    </>
  );
};
//==========================================================================

export {
  Navbar,
  NavbarContainer,
  BrandLogo,
  MobileNavigationMenu,
  DesktopNavigationMenu,
  NavbarActionGroup,
  LanguageSelector,
  MobileMenuToggle,
  UtilityButton,
};

// <Navbar>
//   <NavbarContainer>
//     <BrandLogo></BrandLogo>
//     <MobileNavigationMenu></MobileNavigationMenu>
//     <DesktopNavigationMenu></DesktopNavigationMenu>
//   </NavbarContainer>
//   <NavbarActionGroup>
//     <UtilityButton></UtilityButton>
//     <LanguageSelector></LanguageSelector>
//     <MobileMenuToggle></MobileMenuToggle>
//   </NavbarActionGroup>
// </Navbar>;
