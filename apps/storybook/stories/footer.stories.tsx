import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
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
} from "@myds/react/footer";
import { Link } from "@myds/react/link";
import { FacebookIcon } from "../../../packages/react/src/icons/facebook";
import { InstagramIcon } from "../../../packages/react/src/icons/instagram";
import { TikTokIcon } from "../../../packages/react/src/icons/tiktok";
import { XIcon } from "@myds/react/icon";

/**
 * ### Overview
 * The Footer component is a standardized footer for Malaysian government websites.
 * It provides a consistent layout for agency information, navigation links,
 * social media integration, and legal disclaimers.
 *
 * ### Usage
 * ```tsx
 * import {
  Footer,
  FooterTopSection,
  FooterMainInfo,
  ImageWithTitle,
  Address,
  SocialMedia,
  SocialMediaItem,
  FooterContent,
  FooterContentColumn,
  FooterBottomSection,
  FooterCopyright,
  FooterCopyrightDate,
  FooterCopyrightLinkWrapper,
  FooterTimestamp,
 * } from "@myds/react/footer";
 * ```
 */

const meta = {
  title: "@myds/react/Footer",
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
export const Default: Story = {
  ...createStory({}, "light"),
  render: () => {
    return (
      <div className="light">
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
            <FooterContent>
              <FooterContentColumn title={"Title 1"}>
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
              </FooterContentColumn>
              <FooterContentColumn title={"Title 2"}>
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
              </FooterContentColumn>
              <FooterContentColumn title={"Open Source"}>
                <Link
                  href="www.google.com"
                  underline="hover"
                  className="hover:text-txt-black-900"
                >
                  Github Repo
                </Link>
                <Link
                  href="www.google.com"
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
                  href="www.google.com"
                  underline="hover"
                  className="hover:text-txt-black-900"
                >
                  Disclaimer
                </Link>
                <Link
                  href="www.google.com"
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
      </div>
    );
  },
};

/**
 * Custom footer configuration with complete layout including agency information,
 * navigation links, social media, and disclaimer.
 */

export const Custom: Story = {
  ...createStory({}, "light"),
  render: () => {
    return (
      <div className="light">
        <Footer>
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
      </div>
    );
  },
};

/*
 * Dark theme variant of the footer
 */

export const CustomDark: Story = {
  ...createStory({}, "dark"),
  render: () => {
    return (
      <div className="dark">
        <Footer>
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
            <FooterTimestamp time={new Date()}>Last Updated:</FooterTimestamp>
          </FooterBottomSection>
        </Footer>
      </div>
    );
  },
};
