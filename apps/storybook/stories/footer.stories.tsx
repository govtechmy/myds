import type { Meta, StoryObj } from "@storybook/react";
import {
  Footer,
  SiteInfo,
  FooterRoot,
  SiteLinkGroup,
  SiteLinkTitle,
  SiteLink,
} from "@govtechmy/myds-react/footer";
import { Link } from "@govtechmy/myds-react/link";
import { FacebookIcon } from "../../../packages/react/src/icons/facebook";
import { InstagramIcon } from "../../../packages/react/src/icons/instagram";
import { TikTokIcon } from "../../../packages/react/src/icons/tiktok";
import { TwitterIcon, XIcon, YoutubeIcon } from "@govtechmy/myds-react/icon";

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
 *   FooterRoot,
 *   SiteLinkGroup,
 *   SiteLinkTitle,
 *   SiteLink
 * } from "@govtechmy/myds-react/footer";
 *
 * <FooterRoot>
 *   <Footer>
 *     <SiteInfo />
 *     <SiteLinkGroup>
 *       <SiteLinkTitle />
 *       <SiteLink />
 *     </SiteLinkGroup>
 *   </Footer>
 * </FooterRoot>
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

/**
 * Default example showing basic usage of the Footer component
 */
const ExampleFooterComponent = ({ ...args }) => {
  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <FooterRoot {...args}>
      <Footer>
        <SiteInfo>
          <div className="text-txt-black-900 flex items-center gap-x-2.5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"
              width={36}
              alt="Malaysia Coat of Arms"
              className="select-none"
            />
            <p className="font-poppins text-body-md whitespace-nowrap font-semibold">
              Kementerian Digital
            </p>
          </div>
          <p className="text-txt-black-700 text-body-sm">
            Aras 13, 14 & 15, Blok Menara, Menara Usahawan, No. 18, Persiaran
            Perdana, Presint 2, Pusat Pentadbiran Kerajaan Persekutuan, 62000
            Putrajaya, Malaysia
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
        <SiteLinkGroup>
          <SiteLinkTitle>
            Super super long long long long long title
          </SiteLinkTitle>
          <SiteLink>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 1 super super long super super long
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 2
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 3
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 4
            </Link>
          </SiteLink>
        </SiteLinkGroup>
        <SiteLinkGroup>
          <SiteLinkTitle>
            Super super long long long long long title
          </SiteLinkTitle>
          <SiteLink>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 1
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 2
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 3
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 4
            </Link>
          </SiteLink>
        </SiteLinkGroup>
        <SiteLinkGroup>
          <SiteLinkTitle>
            Super super long long long long long title
          </SiteLinkTitle>
          <SiteLink>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 1
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 2
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 3
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 4
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 5
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 6
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 7
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 8
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 9
            </Link>
          </SiteLink>
        </SiteLinkGroup>
        <SiteLinkGroup>
          <SiteLinkTitle>
            Super super long long long long long title
          </SiteLinkTitle>
          <SiteLink>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 1
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 2
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 3
            </Link>
            <Link
              href="www.google.com"
              underline="hover"
              className="hover:text-txt-black-900"
            >
              Link 4
            </Link>
          </SiteLink>
        </SiteLinkGroup>
      </Footer>
      <hr className="bg-otl-gray-200" />
      <div className="text-txt-black-500 md:max-lg:gap-4.5 mx-auto flex w-full max-w-[1280px] flex-col justify-between max-md:gap-4 lg:flex-row lg:gap-6">
        <div className="flex flex-col gap-3 lg:flex-row">
          <p>All Rights Reserved © {date.getFullYear()}</p>
          <p className="hidden lg:inline">|</p>
          <div className="text-txt-black-700 flex flex-grow flex-row gap-3">
            <a href="#">Disclaimer</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <p>Last updated: {formattedDate}</p>
      </div>
    </FooterRoot>
  );
};

export const Default: Story = {
  render: (args) => {
    return <ExampleFooterComponent {...args} />;
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
    return <ExampleFooterComponent {...args} />;
  },
};
