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
import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Link } from "./link";

const headerVariant = cva(
  ["font-semibold max-w-[223px] font-heading"],

  {
    variants: {
      type: {
        shortname: "text-lg leading-[26px]  ",
        //more than 10 words
        longname: "text-xs leading-[14px] line-clamp-2",
        //more than 26 words
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
  showMenu: boolean;
  setMenu: (value: boolean) => void;
}
const NavbarActionGroup: FunctionComponent<NavbarActionGroupProps> = ({
  children,
  showMenu,
  setMenu,
}) => {
  return (
    <div className="flex items-center gap-2">
      {children}
      <Button
        variant="default-outline"
        className={clx("block p-2.5 xl:hidden", showMenu && "bg-bg-washed")}
        onClick={() => setMenu(!showMenu)}
      >
        {showMenu ? <CrossIcon /> : <HamburgerMenuIcon />}
      </Button>
    </div>
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
    <Link
      href={href}
      underline="none"
      className="flex h-full w-full items-center gap-2.5"
    >
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
    </Link>
  );
};
//==========================================================================

// Navigation Bar
//==========================================================================

interface NavigationMenuProps {
  showMenu?: boolean;
  setMenu?: (value: boolean) => void;
  childrenDesktop: React.ReactNode;
  childrenMobile: React.ReactNode;
}

const NavigationMenuCombo: FunctionComponent<NavigationMenuProps> = ({
  showMenu = false,
  setMenu = () => {},
  childrenDesktop,
  childrenMobile,
}) => {
  return [
    <NavigationMenu.Root
      key="desktop"
      className="relative z-10 hidden w-max justify-center xl:flex"
    >
      <NavigationMenu.List className="group flex list-none justify-center space-x-1">
        {childrenDesktop}
      </NavigationMenu.List>
      <div className="absolute right-0 top-full">
        <NavigationMenu.Viewport className="origin-top-center shadow-card data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 medium:w-[var(--radix-navigation-menu-viewport-width)] relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-lg" />
      </div>
    </NavigationMenu.Root>,

    <Sheet key="mobile" open={showMenu} onOpenChange={setMenu}>
      <SheetContent
        side="top"
        className="bg-bg-white absolute top-full -z-10 flex flex-col gap-1 rounded-b-xl p-3 xl:hidden"
      >
        {childrenMobile}
      </SheetContent>
      <SheetPortal>
        <SheetOverlay className="z-40" />
      </SheetPortal>
    </Sheet>,
  ];
};

//For Desktop
interface NavItemsMenuProps {
  children: React.ReactNode;
  href: string;
  active: boolean;
}

const NavItemsMenu: FunctionComponent<NavItemsMenuProps> = ({
  children,
  href,
  active = false,
}) => {
  return (
    <NavigationMenu.Item>
      <Link
        href={href}
        data-state={active ? "open" : "close"}
        underline="none"
        className={clx(
          button_cva({ variant: "default-ghost" }),
          "data-[state=open]:bg-bg-washed w-max bg-transparent transition-colors",
        )}
      >
        {children}
      </Link>
    </NavigationMenu.Item>
  );
};

interface NavItemsDropdownProps {
  children: React.ReactNode;
  menu: string;
}

const NavItemsDropdown: FunctionComponent<NavItemsDropdownProps> = ({
  children,
  menu,
}) => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger
        className={clx(
          button_cva({ variant: "default-ghost" }),
          "data-[state=open]:bg-bg-washed group w-max select-none bg-transparent transition-colors",
        )}
      >
        {menu}
        <ChevronDownIcon
          className="relative top-px ml-1 transition duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 medium:absolute medium:w-auto left-0 top-0 w-full">
        <ul className="bg-bg-white shadow-card rounded-lg border p-3">
          {children}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};

interface NavItemsDropdownItemsProps {
  href: string;
  children: React.ReactNode;
}

const NavItemsDropdownItems: FunctionComponent<NavItemsDropdownItemsProps> = ({
  children,
  href,
}) => {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        className={clx(
          button_cva({ variant: "default-ghost" }),
          "data-[state=open]:bg-bg-washed block w-full justify-start bg-transparent transition-colors",
        )}
      >
        {children}
      </Link>
    </li>
  );
};

//For Mobile
interface NavItemsMenuPropsMobile {
  children: React.ReactNode;
  href: string;
  active: boolean;
}

const NavItemsMenuMobile: FunctionComponent<NavItemsMenuPropsMobile> = ({
  children,
  href,
  active = false,
}) => {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        data-state={active ? "open" : "close"}
        underline="none"
        className={clx(
          button_cva({
            variant: "default-ghost",
            size: "medium",
          }),
          "data-[state=open]:bg-bg-washed w-full justify-start text-base",
        )}
      >
        {children}
      </Link>
    </SheetClose>
  );
};

interface NavItemsDropdownPropsMobile {
  children: React.ReactNode;
  menu: string;
}

const NavItemsDropdownMobile: FunctionComponent<
  NavItemsDropdownPropsMobile
> = ({ children, menu }) => {
  return (
    <Accordion className="bg-bg-white" type="single" collapsible>
      <AccordionItem className="border-0" value="item-1">
        <AccordionTrigger
          className={clx(
            button_cva({
              variant: "default-ghost",
              size: "medium",
            }),
            "bg-bg-white justify-start text-base hover:bg-none hover:no-underline focus:ring-0",
          )}
        >
          {menu}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

interface NavItemsDropdownItemsPropsMobile {
  href: string;
  children: React.ReactNode;
}

const NavItemsDropdownItemsMobile: FunctionComponent<
  NavItemsDropdownItemsPropsMobile
> = ({ children, href }) => {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        className={clx(
          button_cva({
            variant: "default-ghost",
            size: "medium",
          }),
          "data-[state=open]:bg-bg-washed w-full justify-start text-sm",
        )}
      >
        {children}
      </Link>
    </SheetClose>
  );
};

export {
  Navbar,
  NavbarContainer,
  BrandLogo,
  NavbarActionGroup,
  NavigationMenuCombo,
  NavItemsMenu,
  NavItemsDropdown,
  NavItemsDropdownItems,
  NavItemsMenuMobile,
  NavItemsDropdownMobile,
  NavItemsDropdownItemsMobile,
};
