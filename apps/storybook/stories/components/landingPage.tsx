import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import {
  Address,
  Footer,
  FooterBottomSection,
  FooterContent,
  FooterContentColumn,
  FooterCopyright,
  FooterCopyrightDate,
  FooterCopyrightLinkWrapper,
  FooterMainInfo,
  FooterTimestamp,
  FooterTopSection,
  ImageWithTitle,
  SocialMedia,
  SocialMediaItem,
} from "@govtechmy/myds-react/footer";
import {
  FacebookIcon,
  GlobeIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  TikTokIcon,
} from "@govtechmy/myds-react/icon";
import { Link } from "@govtechmy/myds-react/link";
import { Masthead } from "@govtechmy/myds-react/masthead";
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
    <Navbar showMenu={showMenu}>
      <NavbarContainer>
        <BrandLogo
          imageSrc="https://d2391uizq0pg2.cloudfront.net/common/logo.svg"
          href="#"
        >
          MyDS
        </BrandLogo>

        <NavigationMenuCombo showMenu={showMenu} setMenu={setMenu}>
          <NavItemsMenu key={1} href="#">
            Menu 1
          </NavItemsMenu>
          <NavItemsMenu key={1} href="#">
            Menu 2
          </NavItemsMenu>
          <NavItemsMenu key={1} href="#">
            Menu 3
          </NavItemsMenu>
        </NavigationMenuCombo>
      </NavbarContainer>

      <NavbarActionGroup
        showMenu={showMenu}
        setMenu={setMenu}
      ></NavbarActionGroup>
    </Navbar>
  );
};

const DemoFooter = () => {
  return (
    <Footer>
      <FooterTopSection>
        <FooterMainInfo>
          <ImageWithTitle
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"
            imgAlt="JataNegara"
          >
            Organization Title
          </ImageWithTitle>
          <Address>
            Sample Address Line 1,{"\n"}
            Sample Street Name, Sample Area,{"\n"}
            Sample District, Sample City,{"\n"}
            12345 Sample Postal Code,{"\n"}
            Sample Country
          </Address>
          <SocialMedia title="Follow Us">
            <SocialMediaItem
              icon={<FacebookIcon />}
              href={"www.google.com"}
              name={"Facebook"}
            />
            <SocialMediaItem
              icon={<TikTokIcon />}
              href={"www.google.com"}
              name={"TikTok"}
            />
          </SocialMedia>
        </FooterMainInfo>
      </FooterTopSection>
      <FooterBottomSection>
        <FooterCopyright>
          <FooterCopyrightDate>All Rights Reserved</FooterCopyrightDate>
        </FooterCopyright>
      </FooterBottomSection>
    </Footer>
  );
};

export default function LandingPage() {
  return (
    <div>
      <Masthead />
      <DemoNavbar />
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
            src="../stories/assets/addon-library.png"
            className="w-full object-cover"
          />
        </picture>
        <div
          className={clx(
            "max-auto gap-4.5 col-span-full flex max-w-[640px] flex-col md:order-1",
            "md:max-lg:col-span-3 md:max-lg:col-start-1",
            "lg:col-span-3 lg:col-start-2",
          )}
        >
          <h5 className="text-txt-primary text-body-sm font-semibold">
            AKTIVITI TERKINI
          </h5>
          <h4 className="font-heading text-heading-sm font-semibold">
            ANOTHER TITLE
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            quibusdam aspernatur molestias laboriosam impedit necessitatibus
            iusto ullam? Magnam iusto tenetur cumque saepe in odit ad.
          </p>
          <Button>Click here</Button>
        </div>
      </div>
      <DemoFooter />
    </div>
  );
}
