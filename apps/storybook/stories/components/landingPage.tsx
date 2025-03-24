import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import {
  Footer,
  FooterLogo,
  FooterSection,
  SiteInfo,
  SiteLink,
  SiteLinkGroup,
} from "@govtechmy/myds-react/footer";
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@govtechmy/myds-react/icon";
import { Link } from "@govtechmy/myds-react/link";
import { Masthead } from "@govtechmy/myds-react/masthead";
import {
  Navbar,
  NavbarAction,
  NavbarLogo,
  NavbarMenu,
  NavbarMenuDropdown,
  NavbarMenuItem,
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
    <Navbar>
      {/* <NavbarLogo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"
        alt="Kementerian Digital"
        className="sm:max-md:hidden"
      >
        Ministry Of Digital
      </NavbarLogo> */}
      <NavbarMenu>
        <NavbarMenuItem href="#">Menu 1</NavbarMenuItem>
        <NavbarMenuItem href="#">Menu 2</NavbarMenuItem>
        <NavbarMenuItem href="#">Menu 3</NavbarMenuItem>
        <NavbarMenuItem href="#">Menu 4</NavbarMenuItem>
        <NavbarMenuItem href="#">Menu 5</NavbarMenuItem>
        <NavbarMenuItem href="#">Contact Us</NavbarMenuItem>

        <NavbarMenuDropdown title="Menu Dropdown">
          <NavbarMenuItem href="#">Submenu 1</NavbarMenuItem>
          <NavbarMenuItem href="#">Submenu 2</NavbarMenuItem>
          <NavbarMenuItem href="#">Submenu 3</NavbarMenuItem>
          <NavbarMenuItem href="#">Submenu 4</NavbarMenuItem>
          <NavbarMenuItem href="#">Submenu 5</NavbarMenuItem>
          <NavbarMenuItem href="#">Submenu 6</NavbarMenuItem>
          <NavbarMenuItem href="#">Submenu 7</NavbarMenuItem>
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
      </NavbarAction>
    </Navbar>
  );
};

const DemoFooter = () => {
  return (
    <Footer>
      <FooterSection>
        <SiteInfo>
          <div className="text-txt-black-900 flex items-center gap-x-2.5">
            <FooterLogo
              logoTitle={
                <p className="font-poppins text-body-md whitespace-nowrap font-semibold">
                  Brand name
                </p>
              }
            />
          </div>
          <p className="text-txt-black-700 text-body-sm">
            Tower A, Floors 9, 10 & 11, ABC Corporate Center, No. 23, Jalan
            Teknologi 8, Precinct 5, Selangor, Malaysia
          </p>
          <p className="text-txt-black-900 text-body-sm font-semibold">
            Follow us
          </p>
          <div className="flex gap-3">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <FacebookIcon className="text-txt-black-700" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <TwitterIcon className="text-txt-black-700" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <InstagramIcon className="text-txt-black-700" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <YoutubeIcon className="text-txt-black-700" />
            </Link>
          </div>
        </SiteInfo>
        <SiteLinkGroup groupTitle="Title">
          <SiteLink href="#">Link 1 </SiteLink>
          <SiteLink href="#">Link 2</SiteLink>
          <SiteLink href="#">Link 3</SiteLink>
          <SiteLink href="#">Link 4</SiteLink>
        </SiteLinkGroup>
        <SiteLinkGroup groupTitle="Title">
          <SiteLink href="#">Link 1 </SiteLink>
          <SiteLink href="#">Link 2</SiteLink>
          <SiteLink href="#">Link 3</SiteLink>
          <SiteLink href="#">Link 4</SiteLink>
        </SiteLinkGroup>
        <SiteLinkGroup groupTitle="Title">
          <SiteLink href="#">Link 1 </SiteLink>
          <SiteLink href="#">Link 2</SiteLink>
          <SiteLink href="#">Link 3</SiteLink>
          <SiteLink href="#">Link 4</SiteLink>
        </SiteLinkGroup>
        <SiteLinkGroup groupTitle="Title">
          <SiteLink href="#">Link 1 </SiteLink>
          <SiteLink href="#">Link 2</SiteLink>
          <SiteLink href="#">Link 3</SiteLink>
          <SiteLink href="#">Link 4</SiteLink>
        </SiteLinkGroup>
      </FooterSection>
      <FooterSection className="text-txt-black-500 md:max-lg:gap-4.5 mx-auto flex w-full max-w-[1280px] flex-col justify-between border-none text-sm max-md:gap-4 lg:flex-row lg:gap-6">
        <div className="flex flex-col gap-3 lg:flex-row">
          <p>All Rights Reserved © </p>
          <p className="hidden lg:inline">|</p>
          <div className="text-txt-black-700 flex flex-grow flex-row gap-3">
            <a href="#">Disclaimer</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </FooterSection>
    </Footer>
  );
};

export default function LandingPage() {
  return (
    <div>
      <Masthead />
      <DemoNavbar />
      <section className="flex h-screen flex-col items-center justify-center">
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
              alt=""
              src="../stories/assets/addon-library.png"
              className="h-auto w-full"
            />
          </picture>
          <div
            className={clx(
              "max-auto gap-4.5 col-span-full flex max-w-[640px] flex-col md:order-1",
              "md:max-lg:col-span-3 md:max-lg:col-start-1",
              "lg:col-span-3 lg:col-start-2",
            )}
          >
            <p className="text-txt-primary text-body-sm font-semibold">
              Subtitle
            </p>
            <h1 className="font-heading text-heading-sm font-semibold">
              Title
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus enim cupiditate doloribus quam ut perferendis illo
              quaerat architecto autem possimus recusandae corrupti commodi
              blanditiis, a impedit?
            </p>
            <Button>Click here</Button>
          </div>
        </div>
      </section>
      <DemoFooter />
    </div>
  );
}
