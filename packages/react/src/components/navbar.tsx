import { FunctionComponent, useEffect, useState } from "react";
import { clx } from "../utils";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Sheet, SheetClose, SheetContent } from "./sheet";
import { Button, button_cva } from "./button";
import { Link } from "./link";
import { ChevronDownIcon, CrossIcon, HamburgerMenuIcon } from "../icons";
import { VariantProps, cva } from "class-variance-authority";

const headerVariant = cva(
  ["font-semibold max-w-[223px] font-heading text-txt-black-900"],

  {
    variants: {
      type: {
        shortname: "text-lg leading-[26px]  ",
        longname: "text-xs leading-[14px] line-clamp-2",
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
  background?: string;
}

const Navbar: FunctionComponent<NavbarProps> = ({
  showMenu,
  children,
  className,
  background,
}) => {
  return (
    <header
      className={clx(
        "bg-bg-white sticky top-0 z-50 lg:border-b lg:backdrop-blur-[30px] print:hidden",
        background,
      )}
    >
      <div
        className={clx(
          "border-otl-gray-200 bg-bg-white container mx-auto flex h-16 items-center justify-between gap-3 py-3 max-xl:pr-3 max-lg:border-b lg:gap-4",
          showMenu ? "" : "xl:bg-transparent",
          className,
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
  className?: string;
}
const NavbarContainer: FunctionComponent<NavbarContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clx(
        "text-bg-black-900 flex items-center justify-between gap-3 lg:gap-4",
        className,
      )}
    >
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
  className?: string;
}
const NavbarActionGroup: FunctionComponent<NavbarActionGroupProps> = ({
  children,
  showMenu,
  setMenu,
  className,
}) => {
  return (
    <div className="flex items-center gap-2">
      {children}
      <Button
        variant="default-outline"
        className={clx(
          "block p-2.5 xl:hidden",
          showMenu && "bg-bg-washed",
          className,
        )}
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
  imageSrc,
  alt,
  href = "/",
  children,
}) => {
  const isStringChild = typeof children === "string";
  const isLongName = isStringChild && children.length > 19;

  return (
    <Link
      href={href}
      underline="none"
      className={clx("flex h-full w-full items-center gap-2.5")}
    >
      <img
        src={imageSrc}
        width={40}
        height={32}
        style={{
          width: "auto",
        }}
        className="h-8 w-fit select-none"
        alt={alt || "brand logo"}
      />
      {isStringChild ? (
        <span
          className={clx(
            headerVariant({ type: isLongName ? "longname" : "shortname" }),
          )}
        >
          {children}
        </span>
      ) : (
        children
      )}
    </Link>
  );
};
//==========================================================================

// Navigation Bar
//==========================================================================

interface NavigationMenuProps {
  showMenu?: boolean;
  setMenu?: (value: boolean) => void;
  children: React.ReactNode;
}

const NavigationMenuCombo: FunctionComponent<NavigationMenuProps> = ({
  showMenu = false,
  setMenu = () => {},
  children,
}) => {
  return (
    <NavigationMenu.Root key="desktop">
      <Sheet key="mobile" open={showMenu} onOpenChange={setMenu}>
        <NavigationMenu.List className="group hidden list-none justify-center space-x-1 xl:flex">
          {children}
        </NavigationMenu.List>
        <div className="relative right-0 top-full">
          <NavigationMenu.Viewport className="shadow-card data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 medium:w-[var(--radix-navigation-menu-viewport-width)] absolute mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-lg" />
        </div>

        <SheetContent
          side="top"
          className="bg-bg-white absolute top-full z-10 flex h-[90vh] flex-col gap-1 overflow-scroll rounded-b-xl p-3 xl:hidden"
        >
          {children}
        </SheetContent>
      </Sheet>
    </NavigationMenu.Root>
  );
};

interface NavItemsMenuProps {
  children: React.ReactNode;
  href: string;
  active: boolean;
  className?: string;
}

interface NavItemsMenuProps {
  children: React.ReactNode;
  href: string;
  active: boolean;
  className?: string;
}

const NavItemsMenu: FunctionComponent<NavItemsMenuProps> = ({
  className,
  children,
  href,
  active = false,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [clientWindow, setClientWindow] = useState(false);

  // Effect to detect client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && window) {
      setClientWindow(window.location.pathname.includes(href));
    }
  }, [isClient, href]);

  return (
    <>
      {/* Desktop */}
      <NavigationMenu.Item className="list-none">
        <Link
          href={href}
          data-state={active ? "open" : "close"}
          underline="none"
          className={clx(
            button_cva({ variant: "default-ghost" }),
            "data-[state=open]:bg-bg-washed w-max bg-transparent transition-colors",
            "hidden lg:block",
            clientWindow && "bg-bg-washed-active",
            className,
          )}
        >
          {children}
        </Link>
      </NavigationMenu.Item>

      {/* Mobile */}
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
            "data-[state=open]:bg-bg-washed flex w-full justify-start text-left text-base",
            "block lg:hidden",
            clientWindow && "bg-bg-washed-active",
            className,
          )}
        >
          {children}
        </Link>
      </SheetClose>
    </>
  );
};

interface NavItemsDropdownProps {
  children: React.ReactNode;
  menu: string;
  className?: string;
}

const NavItemsDropdown: FunctionComponent<NavItemsDropdownProps> = ({
  children,
  menu,
  className,
}) => {
  return [
    //Desktop
    <NavigationMenu.Item
      key="desktop-dropdown"
      className="relative hidden xl:block"
    >
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
      <NavigationMenu.Content
        className={clx(
          "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out",
          "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out",
          "data-[motion=from-end]:slide-in-from-right-52",
          "data-[motion=from-start]:slide-in-from-left-52",
          "data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52",
          className,
        )}
      >
        <ul className="bg-bg-white shadow-card list-none rounded-lg border p-3">
          {children}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>,
    //Mobile
    <Accordion
      className="bg-bg-white block xl:hidden"
      type="single"
      collapsible
      key="mobile-dropdown"
    >
      <AccordionItem className="border-0" value="item-1">
        <AccordionTrigger
          className={clx(
            button_cva({
              variant: "default-ghost",
              size: "medium",
            }),
            "bg-bg-white justify-start text-left text-base hover:bg-none hover:no-underline focus:ring-0",
            className,
          )}
        >
          {menu}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>,
  ];
};

interface NavItemsDropdownItemsProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavItemsDropdownItems: FunctionComponent<NavItemsDropdownItemsProps> = ({
  children,
  href,
  className,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [clientWindow, setClientWindow] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && window) {
      setClientWindow(window.location.pathname.includes(href));
    }
  }, [isClient, href]);

  return (
    <>
      {/* Desktop */}
      <li key={href} className="hidden list-none lg:block">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          className={clx(
            button_cva({ variant: "default-ghost" }),
            "data-[state=open]:bg-bg-washed block w-full justify-start bg-transparent transition-colors",
            "text-left",
            clientWindow && "bg-bg-washed-active",
            className,
          )}
        >
          {children}
        </Link>
      </li>

      {/* Mobile */}
      <SheetClose asChild className="lg:hidden">
        <li key={href} className="list-none">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            className={clx(
              button_cva({ variant: "default-ghost", size: "medium" }),
              clientWindow && "bg-bg-washed-active",
              "data-[state=open]:bg-bg-washed w-full justify-start text-left text-sm",
              "h-10 pl-6",
              className,
            )}
          >
            {children}
          </Link>
        </li>
      </SheetClose>
    </>
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
};
