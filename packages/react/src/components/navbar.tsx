import {
  FunctionComponent,
  useState,
  createContext,
  useContext,
  ReactNode,
  ComponentProps,
  useRef,
  useId,
  useEffect,
  RefObject,
} from "react";
import { clx } from "../utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Button } from "./button";
import { Link } from "./link";
import { ChevronDownIcon, CrossIcon, HamburgerMenuIcon } from "../icons";
import { cva } from "class-variance-authority";
import { RemoveScroll } from "react-remove-scroll";
import { Root, Slot } from "@radix-ui/react-slot";

interface NavbarProps extends ComponentProps<"header"> {}

interface NavbarContextProps {
  id: string;
  show: boolean;
  setShow: (value: boolean) => void;
}
const NavbarContext = createContext<NavbarContextProps>({
  id: "",
  show: false,
  setShow: () => {},
});

const Navbar: FunctionComponent<NavbarProps> = ({
  children,
  className,
  ...props
}) => {
  const id = useId();

  const [show, setShow] = useState(false);
  return (
    <NavbarContext.Provider value={{ id, show, setShow }}>
      <header
        id={id}
        className={clx(
          "bg-bg-white border-otl-gray-200 shadow-button sticky top-0 z-50 h-16 w-full border-b max-md:h-14 print:hidden",
          className,
        )}
        data-nosnippet
        {...props}
      >
        <div className="relative mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-4 px-4.5 lg:px-6 max-md:h-14">
          {children}
        </div>
      </header>
    </NavbarContext.Provider>
  );
};

Navbar.displayName = "Navbar";

interface NavbarLogoProps extends ComponentProps<typeof Link> {
  src: string;
  alt: string;
  maxChars?: number;
}

const logo_cva = cva(
  ["font-semibold max-w-[200px] font-heading text-txt-black-900"],
  {
    variants: {
      too_long: {
        false: "text-body-lg",
        true: "text-body-xs leading-[14px] line-clamp-2",
      },
    },
    defaultVariants: {
      too_long: false,
    },
  },
);
const NavbarLogo: FunctionComponent<NavbarLogoProps> = ({
  src,
  alt,
  href = "/",
  children,
  maxChars = 19,
  className,
  ...props
}) => {
  return (
    <Link
      href={href}
      underline="none"
      className={clx("flex h-full w-auto items-center gap-2.5", className)}
      {...props}
    >
      <img
        src={src}
        width={40}
        height={32}
        className="aspect-auto h-full max-h-8 w-auto select-none"
        alt={alt}
      />
      {typeof children === "string" ? (
        <span className={logo_cva({ too_long: children.length > maxChars })}>
          {children}
        </span>
      ) : (
        children
      )}
    </Link>
  );
};

NavbarLogo.displayName = "NavbarLogo";
interface NavigationMenuProps {
  children: ReactNode;
}

const NavbarMenu: FunctionComponent<NavigationMenuProps> = ({ children }) => {
  return (
    <NavigationMenu className="grow">
      {/* Desktop */}
      <NavigationMenuList className="hidden xl:flex xl:justify-start xl:gap-1">
        {children}
      </NavigationMenuList>

      {/* Tablet / Mobile */}
      <NavbarMobileMenu>{children}</NavbarMobileMenu>
    </NavigationMenu>
  );
};

interface NavbarMobileMenuProps {
  children: ReactNode;
}

type Measurable = {
  getBoundingClientRect: () => DOMRect;
};

const NavbarMobileMenu: FunctionComponent<NavbarMobileMenuProps> = ({ children }) => {
  const { id, show, setShow } = useContext(NavbarContext);

  const virtualRef = useRef<Measurable | null>(null);

  useEffect(() => {
    const node = document.getElementById(id);

    if (node) {
      virtualRef.current = node;
    }
  }, [virtualRef]);

  if (!show) {
    return null;
  };

  return (
    <RemoveScroll as={Root} allowPinchZoom enabled>
      <Popover open={show} onOpenChange={setShow}>
        <PopoverAnchor virtualRef={virtualRef as RefObject<Measurable>} />
        <PopoverContent
          sideOffset={0}
          align="start"
          className={clx("absolute top-full z-40 h-dvh xl:hidden")}
          style={{
            width: "var(--radix-popover-trigger-width)",
          }}
        >
          <div
            className={clx(
              "absolute h-dvh w-full",
              "bg-gray-700/60",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
            )}
            aria-hidden
            onClick={() => setShow(false)}
            onKeyDown={() => setShow(false)}
          />
          <ul
            className={clx(
              "absolute max-h-[80dvh] overflow-y-auto p-3",
              "border-otl-gray-200 rounded-md rounded-t-none border border-t-0 outline-none",
              "bg-bg-dialog text-txt-black-900 shadow-context-menu",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2",
            )}
            style={{
              width: "var(--radix-popover-trigger-width)", // width - padding
            }}
          >
            {children}
          </ul>
        </PopoverContent>
      </Popover>
    </RemoveScroll>
  )
}

NavbarMenu.displayName = "NavbarMenu";

interface NavbarMenuItemProps
  extends ComponentProps<typeof NavigationMenuItem> {
  children: ReactNode;
  href: string;
  className?: string;
  asChild?: boolean;
}

const navbar_menu_item_cva = cva(
  [
    "bg-transparent hover:bg-bg-washed text-txt-black-700 truncate px-2.5 py-1.5",
    "transition-colors motion-reduce:transition-none list-none",
    "w-full xl:w-fit text-body-sm flex items-center cursor-pointer",
  ],
  {
    variants: {
      is_from_dropdown: {
        true: "text-sm font-normal ml-3 mt-1 xl:ml-0 xl:w-full xl:mt-0 rounded-xs text-left",
        false: "font-medium rounded-md",
      },
    },
  },
);

const NavbarMenuItem: FunctionComponent<NavbarMenuItemProps> = ({
  className,
  children,
  href,
  asChild,
  ...props
}) => {
  const is_from_dropdown = useContext(NavbarMenuDropdownContext);
  const Comp = asChild ? Slot : Link;
  return (
    <NavigationMenuItem
      className={clx(navbar_menu_item_cva({ is_from_dropdown }), className)}
      {...props}
    >
      <Comp href={href} underline="none" className="w-full">
        {children}
      </Comp>
    </NavigationMenuItem>
  );
};

NavbarMenuItem.displayName = "NavbarMenuItem";

interface NavbarMenuDropdownProps {
  children: ReactNode;
  title: ReactNode;
  className?: string;
}

const NavbarMenuDropdownContext = createContext(false);

const NavbarMenuDropdown: FunctionComponent<NavbarMenuDropdownProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <NavbarMenuDropdownContext.Provider value={true}>
      <NavigationMenuItem key="desktop-dropdown" className="relative list-none">
        <NavigationMenuTrigger
          className={clx(
            navbar_menu_item_cva({ is_from_dropdown: false }),
            "data-[state=open]:bg-bg-washed group w-full select-none bg-transparent transition-colors xl:w-max",
          )}
        >
          {title}
          <ChevronDownIcon
            className="relative top-px ml-1.5 size-4 transition group-data-[state=open]:rotate-180 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </NavigationMenuTrigger>
        <NavigationMenuContent
          className={clx(
            "xl:absolute xl:left-0 xl:top-full xl:mt-2 xl:min-w-[220px]",
            "xl:bg-bg-white xl:shadow-context-menu xl:list-none xl:rounded-md xl:p-1.5",
            "w-full xl:w-fit",
            className,
          )}
        >
          <ul>{children}</ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavbarMenuDropdownContext.Provider>
  );
};

NavbarMenuDropdown.displayName = "NavbarMenuDropdown";

interface NavbarActionProps extends ComponentProps<typeof Button> {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavbarAction: FunctionComponent<NavbarActionProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  const { show, setShow } = useContext(NavbarContext);
  const handleToggle = () => {
    setShow(!show);
    if (onClick) onClick();
  };
  return (
    <div className="flex items-center justify-end gap-2">
      {children}
      <Button
        variant="default-ghost"
        iconOnly
        className={clx("xl:hidden", className)}
        onClick={handleToggle}
        aria-label={`${show ? "Close" : "Open"} navigation menu`}
        {...props}
      >
        {show ? <CrossIcon /> : <HamburgerMenuIcon />}
      </Button>
    </div>
  );
};

NavbarAction.displayName = "NavbarAction";

export {
  Navbar,
  NavbarLogo,
  NavbarAction,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuDropdown,
};
