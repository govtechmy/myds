"use client";

import React, { useState, ComponentProps, FunctionComponent } from "react";
import { Button } from "@govtechmy/myds-react/button";
import { Toggle, ToggleThumb } from "./myds";
export * from "@govtechmy/myds-react/toggle";
export * from "@govtechmy/myds-react/button";
export * from "@govtechmy/myds-react/link";
export * from "@govtechmy/myds-react/skiplink";
export * from "@govtechmy/myds-react/accordion";
export * from "@govtechmy/myds-react/announce-bar";
export * from "@govtechmy/myds-react/toast";
export * from "@govtechmy/myds-react/callout";
export * from "@govtechmy/myds-react/breadcrumb";
export * from "@govtechmy/myds-react/checkbox";
export * from "@govtechmy/myds-react/label";
export * from "@govtechmy/myds-react/date-field";
export * from "@govtechmy/myds-react/date-picker";
export * from "@govtechmy/myds-react/daterange-picker";
export * from "@govtechmy/myds-react/pill";
export * from "@govtechmy/myds-react/navbar";
import {
  Callout,
  CalloutTitle,
  CalloutContent,
  CalloutAction,
} from "@govtechmy/myds-react/callout";
import { useToast } from "@govtechmy/myds-react/hooks";
import { DatePicker } from "@govtechmy/myds-react/date-picker";
import { DateRangePicker } from "@govtechmy/myds-react/daterange-picker";
import { Pill } from "@govtechmy/myds-react/pill";
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
  GlobeIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "@govtechmy/myds-react/icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@govtechmy/myds-react/select";

interface PreviewButtonProps extends ComponentProps<typeof Button> {
  pantun: string;
}
interface ToastTriggerButtonProps extends ComponentProps<typeof Button> {
  toastVariant: "message" | "success" | "info" | "warning" | "error";
  text?: string;
}

export const PreviewButton: FunctionComponent<PreviewButtonProps> = (props) => {
  return <Button {...props} onClick={() => alert(props.pantun)} />;
};

export const ToastTriggerButton: FunctionComponent<ToastTriggerButtonProps> = (
  props,
) => {
  const { toast } = useToast();
  return (
    <Button
      {...props}
      onClick={() => {
        toast({
          variant: props.toastVariant,
          title: "Hello, world!",
          description: "this is a description",
        });
      }}
    >
      {props.text}
    </Button>
  );
};

interface DismissibleCalloutExampleProps {
  type: "basic" | "action";
  title?: string;
  description?: string;
}

export const DismissibleCalloutExample: FunctionComponent<
  DismissibleCalloutExampleProps
> = ({ type, title, description }) => {
  const [show, setShow] = useState(true);
  const handleDismiss = (dismiss: () => void) => {
    alert("Action taken before callout gets dismissed");
    dismiss();
  };
  return show ? (
    <Callout
      dismissible
      onDismiss={() => {
        setShow(false);
        console.log("MYDS: Dismissed event captured!");
      }}
    >
      <CalloutTitle>{title}</CalloutTitle>
      <CalloutContent>{description}</CalloutContent>
      <CalloutAction>
        {(dismiss) =>
          type === "action" && (
            <Button
              variant="default-outline"
              onClick={() => handleDismiss(dismiss)}
            >
              Call to Action
            </Button>
          )
        }
      </CalloutAction>
    </Callout>
  ) : (
    <Button variant={"default-outline"} onClick={() => setShow(true)}>
      Show Callout: {type}
    </Button>
  );
};

interface PreviewToggleProps extends ComponentProps<typeof Toggle> {}

export const ControlledToggle: FunctionComponent<PreviewToggleProps> = (
  props,
) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <p>State: {isChecked ? "On" : "Off"}</p>
      <Toggle
        checked={isChecked}
        onCheckedChange={(checked) => setIsChecked(checked)}
        {...props}
      >
        <ToggleThumb />
      </Toggle>
    </div>
  );
};

const [NOW, YESTERDAY, TOMORROW] = [new Date(), new Date(), new Date()];
YESTERDAY.setDate(NOW.getDate() - 1);
TOMORROW.setDate(NOW.getDate() + 1);

export const CustomDisableDatePicker: FunctionComponent = () => {
  return (
    <DatePicker
      defaultValue={new Date()}
      disabled={(date) => date.getDate() === 13}
    />
  );
};

export const CustomDisableDateRangePicker: FunctionComponent = () => {
  return (
    <DateRangePicker
      defaultValue={{ from: YESTERDAY, to: TOMORROW }}
      disabled={(date) => date.getDate() === 13}
    />
  );
};

export { NOW, YESTERDAY, TOMORROW };
interface PillWithTrailingXButtonProps extends ComponentProps<typeof Pill> {}
export const PillWithTrailingXButton: FunctionComponent<
  PillWithTrailingXButtonProps
> = (props) => {
  return <Pill onDismiss={() => {}} {...props} />;
};

interface PreviewNavbarProps extends ComponentProps<typeof Navbar> {}

export const PreviewNavbar: FunctionComponent<PreviewNavbarProps> = (props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [value, setValue] = React.useState("EN");
  const [showMenu, setMenu] = useState<boolean>(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
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
        {/* Button Search  : mobile hide if needed  */}
        <Button variant="default-ghost" className="p-2">
          <SearchIcon></SearchIcon>
        </Button>

        {/* Button Light Mode Toggle  : mobile hide if needed  */}
        <Button variant="default-ghost" className="p-2" onClick={handleToggle}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>

        {/* Select Language Toggle  : mobile hide if needed  */}
        <div className="hidden sm:block">
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
        </div>
      </NavbarActionGroup>
    </Navbar>
  );
};

interface PreviewBrandLogoProps extends ComponentProps<typeof BrandLogo> {}

export const PreviewBrandLogo: FunctionComponent<PreviewBrandLogoProps> = (
  props,
) => {
  return (
    <BrandLogo
      imageSrc="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
      href="/"
    >
      MYDS
    </BrandLogo>
  );
};

export const PreviewNavItemsMenu: FunctionComponent<PreviewNavbarProps> = (
  props,
) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [value, setValue] = React.useState("EN");
  const [showMenu, setMenu] = useState<boolean>(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Navbar showMenu={showMenu} className="px-2">
      <NavbarContainer>
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
        ></NavigationMenuCombo>
      </NavbarContainer>

      <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
        <div className="block h-10 w-[200px] lg:hidden"></div>
      </NavbarActionGroup>
    </Navbar>
  );
};

export const PreviewActionGroup: FunctionComponent<PreviewNavbarProps> = (
  props,
) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [value, setValue] = React.useState("EN");
  const [showMenu, setMenu] = useState<boolean>(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Navbar showMenu={showMenu} className="px-2">
      <NavbarContainer></NavbarContainer>

      <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
        {/* Button Search  : mobile hide if needed  */}
        <Button variant="default-ghost" className="p-2">
          <SearchIcon></SearchIcon>
        </Button>

        {/* Button Light Mode Toggle  : mobile hide if needed  */}
        <Button variant="default-ghost" className="p-2" onClick={handleToggle}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>

        {/* Select Language Toggle  : mobile hide if needed  */}
        <div className="hidden sm:block">
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
        </div>
      </NavbarActionGroup>
    </Navbar>
  );
};
