import type { Meta, StoryObj } from "@storybook/react";
import {
  Footer,
  SiteInfo,
  FooterSection,
  SiteLinkGroup,
  SiteLink,
  FooterLogo,
} from "@govtechmy/myds-react/footer";
import { Link } from "@govtechmy/myds-react/link";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterXIcon,
  YoutubeIcon,
} from "@govtechmy/myds-react/icon";

/**
 * ### Overview
 * The Footer component is a standardized footer for Malaysian government websites.
 * It provides a consistent layout for agency information, navigation links,
 * social media integration, and legal disclaimers.
 *
 * ### Usage
 * ```tsx
 * import {
 *   Footer,
 *   SiteInfo,
 *   FooterLogo,
 *   FooterSection,
 *   SiteLinkGroup,
 *   SiteLink
 * } from "@govtechmy/myds-react/footer";
 *
 * <Footer>
 *   <FooterSection>
 *     <SiteInfo>
 *       <FooterLogo />
 *     </SiteInfo>
 *     <SiteLinkGroup>
 *       <SiteLink />
 *     </SiteLinkGroup>
 *   </FooterSection>
 * </Footer>
 * ```
 */

const meta = {
  title: "@govtechmy/myds-react/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    children: {
      control: false,
      description: "Children for the Footer",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const date = new Date();

    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return (
      <Footer {...args}>
        <FooterTopSection>
          <FooterMainInfo>
            <ImageWithTitle
              imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"
              imgAlt="JataNegara"
            >
              Ministry of Digital
            </ImageWithTitle>
            <Address>
              Aras 13, 14 & 15, Blok Menara,{"\n"}
              Menara Usahawan{"\n"}
              No. 18, Persiaran Perdana, Presint 2{"\n"}
              Pusat Pentadbiran Kerajaan Persekutuan{"\n"}
              62000 Putrajaya, Malaysia
            </Address>
            <SocialMedia title="Follow Us">
              <SocialMediaItem
                icon={<FacebookIcon />}
                href={"www.google.com"}
                name={"Facebook"}
              />
              <SocialMediaItem
                icon={<TwitterXIcon />}
                href={"www.google.com"}
                name={"X"}
              />
              <SocialMediaItem
                icon={<InstagramIcon />}
                href={"www.google.com"}
                name={"Instagram"}
              />
              <SocialMediaItem
                icon={<TikTokIcon />}
                href={"www.google.com"}
                name={"TikTok"}
              />
            </SocialMedia>
          </FooterMainInfo>
          <FooterContent>
            <FooterContentColumn title={"About Us"}>
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
          <SiteLinkGroup groupTitle="Super super long long long long long title">
            <SiteLink href="#">
              Link 1 super super long super super long
            </SiteLink>
            <SiteLink href="#">Link 2</SiteLink>
            <SiteLink href="#">Link 3</SiteLink>
            <SiteLink href="#">Link 4</SiteLink>
          </SiteLinkGroup>
          <SiteLinkGroup groupTitle="Super super long long long long long title">
            <SiteLink href="#">
              Link 1 super super long super super long
            </SiteLink>
            <SiteLink href="#">Link 2</SiteLink>
            <SiteLink href="#">Link 3</SiteLink>
            <SiteLink href="#">Link 4</SiteLink>
          </SiteLinkGroup>
          <SiteLinkGroup groupTitle="Super super long long long long long title">
            <SiteLink href="#">
              Link 1 super super long super super long
            </SiteLink>
            <SiteLink href="#">Link 2</SiteLink>
            <SiteLink href="#">Link 3</SiteLink>
            <SiteLink href="#">Link 4</SiteLink>
          </SiteLinkGroup>
          <SiteLinkGroup groupTitle="Super super long long long long long title">
            <SiteLink href="#">
              Link 1 super super long super super long
            </SiteLink>
            <SiteLink href="#">Link 2</SiteLink>
            <SiteLink href="#">Link 3</SiteLink>
            <SiteLink href="#">Link 4</SiteLink>
            <SiteLink href="#">Link 5</SiteLink>
            <SiteLink href="#">Link 6</SiteLink>
            <SiteLink href="#">Link 7</SiteLink>
            <SiteLink href="#">Link 8</SiteLink>
            <SiteLink href="#">Link 9</SiteLink>
          </SiteLinkGroup>
        </FooterSection>
        <FooterSection className="text-txt-black-500 md:max-lg:gap-4.5 mx-auto flex w-full max-w-[1280px] flex-col justify-between border-none text-sm max-md:gap-4 lg:flex-row lg:gap-6">
          <div className="flex flex-col gap-3 lg:flex-row">
            <p>All Rights Reserved © {date.getFullYear()}</p>
            <p className="hidden lg:inline">|</p>
            <div className="text-txt-black-700 flex flex-grow flex-row gap-3">
              <a href="#">Disclaimer</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <p>Last updated: {formattedDate}</p>
        </FooterSection>
      </Footer>
    );
  },
};

/*
 * Dark theme variant of the footer
 */

export const CustomDark: Story = {
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const date = new Date();

    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return (
      <Footer {...args}>
        <FooterTopSection>
          <FooterMainInfo>
            <ImageWithTitle
              imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"
              imgAlt="JataNegara"
            >
              Ministry of Digital
            </ImageWithTitle>
            <Address>
              Aras 13, 14 & 15, Blok Menara,{"\n"}
              Menara Usahawan{"\n"}
              No. 18, Persiaran Perdana, Presint 2{"\n"}
              Pusat Pentadbiran Kerajaan Persekutuan{"\n"}
              62000 Putrajaya, Malaysia
            </Address>
            <SocialMedia title="Follow Us">
              <SocialMediaItem
                icon={<FacebookIcon />}
                href={"www.google.com"}
                name={"Facebook"}
              />
              <SocialMediaItem
                icon={<TwitterXIcon />}
                href={"www.google.com"}
                name={"X"}
              />
              <SocialMediaItem
                icon={<InstagramIcon />}
                href={"www.google.com"}
                name={"Instagram"}
              />
              <SocialMediaItem
                icon={<TikTokIcon />}
                href={"www.google.com"}
                name={"TikTok"}
              />
            </SocialMedia>
          </FooterMainInfo>
          <FooterContent>
            <FooterContentColumn title={"About Us"}>
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
          <SiteLinkGroup groupTitle="Super super long long long long long title">
            <SiteLink href="#">
              Link 1 super super long super super long
            </SiteLink>
            <SiteLink href="#">Link 2</SiteLink>
            <SiteLink href="#">Link 3</SiteLink>
            <SiteLink href="#">Link 4</SiteLink>
          </SiteLinkGroup>
          <SiteLinkGroup groupTitle="Super super long long long long long title">
            <SiteLink href="#">
              Link 1 super super long super super long
            </SiteLink>
            <SiteLink href="#">Link 2</SiteLink>
            <SiteLink href="#">Link 3</SiteLink>
            <SiteLink href="#">Link 4</SiteLink>
          </SiteLinkGroup>
          <SiteLinkGroup groupTitle="Super super long long long long long title">
            <SiteLink href="#">
              Link 1 super super long super super long
            </SiteLink>
            <SiteLink href="#">Link 2</SiteLink>
            <SiteLink href="#">Link 3</SiteLink>
            <SiteLink href="#">Link 4</SiteLink>
          </SiteLinkGroup>
          <SiteLinkGroup groupTitle="Super super long long long long long title">
            <SiteLink href="#">
              Link 1 super super long super super long
            </SiteLink>
            <SiteLink href="#">Link 2</SiteLink>
            <SiteLink href="#">Link 3</SiteLink>
            <SiteLink href="#">Link 4</SiteLink>
            <SiteLink href="#">Link 5</SiteLink>
            <SiteLink href="#">Link 6</SiteLink>
            <SiteLink href="#">Link 7</SiteLink>
            <SiteLink href="#">Link 8</SiteLink>
            <SiteLink href="#">Link 9</SiteLink>
          </SiteLinkGroup>
        </FooterSection>
        <FooterSection className="text-txt-black-500 md:max-lg:gap-4.5 mx-auto flex w-full max-w-[1280px] flex-col justify-between border-none text-sm max-md:gap-4 lg:flex-row lg:gap-6">
          <div className="flex flex-col gap-3 lg:flex-row">
            <p>All Rights Reserved © {date.getFullYear()}</p>
            <p className="hidden lg:inline">|</p>
            <div className="text-txt-black-700 flex flex-grow flex-row gap-3">
              <a href="#">Disclaimer</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <p>Last updated: {formattedDate}</p>
        </FooterSection>
      </Footer>
    );
  },
};
