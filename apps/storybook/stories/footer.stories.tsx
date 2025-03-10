import type { Meta, StoryObj } from "@storybook/react";
import {
  Address,
  Footer,
  FooterBottomSection,
  FooterCopyright,
  FooterContent,
  FooterMainInfo,
  FooterTimestamp,
  FooterTopSection,
  ImageWithTitle,
  SocialMedia,
  FooterCopyrightDate,
  FooterCopyrightLinkWrapper,
  FooterContentColumn,
  SocialMediaItem,
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
 * Footer,
 * FooterTopSection,
 * FooterMainInfo,
 * ImageWithTitle,
 * Address,
 * SocialMedia,
 * SocialMediaItem,
 * FooterContent,
 * FooterContentColumn,
 * FooterBottomSection,
 * FooterCopyright,
 * FooterCopyrightDate,
 * FooterCopyrightLinkWrapper,
 * FooterTimestamp,
 * } from "@govtechmy/myds-react/footer";
 * ```
 */

const meta = {
  title: "@govtechmy/myds-react/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    children: {
      control: false,
      description: "Content for the Footer",
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
          <p className="text-txt-black-700 text-body-sm whitespace-pre">
            Aras 13, 14 & 15, Blok Menara,{"\n"}
            Menara Usahawan{"\n"}
            No. 18, Persiaran Perdana, Presint 2{"\n"}
            Pusat Pentadbiran Kerajaan Persekutuan{"\n"}
            62000 Putrajaya, Malaysia
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
              <FacebookIcon />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube link"
              underline="none"
              className="hover:text-txt-black-900"
            >
              <YoutubeIcon />
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
      <div className="text-txt-black-500 mx-auto flex w-full max-w-[1280px] flex-row justify-between">
        <div className="flex flex-row gap-3">
          <p>All Rights Reserved © {date.getFullYear()}</p>
          <p>|</p>
          <a href="#">Disclaimer</a>
          <a href="#">Privacy Policy</a>
        </div>
        <p>Last updated: {formattedDate}</p>
      </div>
    </FooterRoot>
  );
};
// const ExampleFooterComponent = ({ ...args }) => {
//   return (
//     <Footer {...args}>
//       <FooterTopSection>
//         <FooterMainInfo>
//           <ImageWithTitle
//             imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"
//             imgAlt="JataNegara"
//           >
//             Organization Title
//           </ImageWithTitle>
//           <Address>
//             Sample Address Line 1,{"\n"}
//             Sample Street Name, Sample Area,{"\n"}
//             Sample District, Sample City,{"\n"}
//             12345 Sample Postal Code,{"\n"}
//             Sample Country
//           </Address>
//           <SocialMedia title="Follow Us">
//             <SocialMediaItem
//               icon={<FacebookIcon />}
//               href={"www.google.com"}
//               name={"Facebook"}
//             />
//             <SocialMediaItem
//               icon={<TikTokIcon />}
//               href={"www.google.com"}
//               name={"TikTok"}
//             />
//           </SocialMedia>
//         </FooterMainInfo>
//         <FooterContent>
//           <FooterContentColumn title={"Title 1"}>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Link 1
//             </Link>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Link 2
//             </Link>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Link 3
//             </Link>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Link 4
//             </Link>
//           </FooterContentColumn>
//           <FooterContentColumn title={"Title 2"}>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Link 1
//             </Link>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Link 2
//             </Link>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Link 3
//             </Link>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Link 4
//             </Link>
//           </FooterContentColumn>
//           <FooterContentColumn title={"Open Source"}>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Github Repo
//             </Link>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Figma
//             </Link>
//           </FooterContentColumn>
//         </FooterContent>
//       </FooterTopSection>
//       <FooterBottomSection>
//         <FooterCopyright>
//           <FooterCopyrightDate>All Rights Reserved</FooterCopyrightDate>
//           <FooterCopyrightLinkWrapper>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Disclaimer
//             </Link>
//             <Link
//               href="www.google.com"
//               underline="hover"
//               className="hover:text-txt-black-900"
//             >
//               Privacy Policy
//             </Link>
//           </FooterCopyrightLinkWrapper>
//         </FooterCopyright>
//         <FooterTimestamp time="2024-12-05T10:00:00Z">
//           Last Updated:
//         </FooterTimestamp>
//       </FooterBottomSection>
//     </Footer>
//   );
// };

export const Default: Story = {
  render: (args) => {
    return <ExampleFooterComponent {...args} />;
  },
};

/**
 * Custom footer configuration with complete layout including agency information,
 * navigation links, social media, and disclaimer.
 */

export const Custom: Story = {
  render: (args) => {
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
                icon={<XIcon />}
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
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Ministry Of Digital
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Directory
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Achievements
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Directory
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Policy
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Media
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Contact Us
              </Link>
            </FooterContentColumn>
            <FooterContentColumn title={"Quick Links"}>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                SpotMe
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                MyGovUC
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                DDMS
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                MyMesyuarat
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                ePenyata Gaji
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                HRMIS
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                ePerolehan
              </Link>
            </FooterContentColumn>
            <FooterContentColumn title={"Open Source"}>
              <Link
                href="https://github.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                GitHub Repo
              </Link>
              <Link
                href="https://www.figma.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Figma
              </Link>
            </FooterContentColumn>
          </FooterContent>
        </FooterTopSection>
        <FooterBottomSection>
          <FooterCopyright>
            <FooterCopyrightDate>All Rights Reserved</FooterCopyrightDate>
            <FooterCopyrightLinkWrapper>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Disclaimer
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Privacy Policy
              </Link>
            </FooterCopyrightLinkWrapper>
          </FooterCopyright>
          <FooterTimestamp time="2024-12-05T10:00:00Z">
            Last Updated:
          </FooterTimestamp>
        </FooterBottomSection>
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
                icon={<XIcon />}
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
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Ministry Of Digital
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Directory
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Achievements
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Directory
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Policy
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Media
              </Link>
              <Link
                href="www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Contact Us
              </Link>
            </FooterContentColumn>
            <FooterContentColumn title={"Quick Links"}>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                SpotMe asdkjadjkaskjhda asdkjadjkaskjhda asdkjadjkaskjhda
                asdkjadjkaskjhda
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                MyGovUC
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                DDMS
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                MyMesyuarat
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                ePenyata Gaji
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                HRMIS
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                ePerolehan
              </Link>
            </FooterContentColumn>
            <FooterContentColumn title={"Open Source"}>
              <Link
                href="https://github.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                GitHub Repo
              </Link>
              <Link
                href="https://www.figma.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Figma
              </Link>
            </FooterContentColumn>
          </FooterContent>
        </FooterTopSection>
        <FooterBottomSection>
          <FooterCopyright>
            <FooterCopyrightDate>All Rights Reserved</FooterCopyrightDate>
            <FooterCopyrightLinkWrapper>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Disclaimer
              </Link>
              <Link
                href="https://www.google.com"
                underline="hover"
                className="hover:text-txt-black-900"
              >
                Privacy Policy
              </Link>
            </FooterCopyrightLinkWrapper>
          </FooterCopyright>
          <FooterTimestamp time={new Date()}>Last Updated:</FooterTimestamp>
        </FooterBottomSection>
      </Footer>
    );
  },
};
