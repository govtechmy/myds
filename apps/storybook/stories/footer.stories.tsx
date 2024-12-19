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
} from "@myds/react/footer";
import { Link } from "@myds/react/link";
import { FacebookIcon } from "../../../packages/react/src/icons/facebook";
import { InstagramIcon } from "../../../packages/react/src/icons/instagram";
import { TwitterIcon } from "../../../packages/react/src/icons/twitter";
import { TikTokIcon } from "../../../packages/react/src/icons/tiktok";

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
 *   Address,
 *   FooterBottomSection,
 *   FooterCopyright,
 *   FooterContent,
 *   FooterMainInfo,
 *   FooterTimestamp,
 *   FooterTopSection,
 *   ImageWithTitle,
 *   SocialMedia,
 *   FooterCopyrightDate,
 *   FooterCopyrightLinkWrapper,
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
    const social_media = [
      {
        icon: <FacebookIcon />,
        name: "Facebook",
        href: "https://www.facebook.com/KementerianDigitalMalaysia/",
      },
      {
        icon: <TikTokIcon />,
        name: "Tiktok",
        href: "https://www.tiktok.com/@kementeriandigital",
      },
    ];

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
              <SocialMedia social_media={social_media}>Follow Us</SocialMedia>
            </FooterMainInfo>
            <FooterContent>
              <FooterContentColumn title={"Title 1"}>
                <Link href="www.google.com" underline="hover">
                  Link 1
                </Link>
                <Link href="www.google.com" underline="hover">
                  Link 2
                </Link>
                <Link href="www.google.com" underline="hover">
                  Link 3
                </Link>
                <Link href="www.google.com" underline="hover">
                  Link 4
                </Link>
              </FooterContentColumn>
              <FooterContentColumn title={"Title 2"}>
                <Link href="www.google.com" underline="hover">
                  Link 1
                </Link>
                <Link href="www.google.com" underline="hover">
                  Link 2
                </Link>
                <Link href="www.google.com" underline="hover">
                  Link 3
                </Link>
                <Link href="www.google.com" underline="hover">
                  Link 4
                </Link>
              </FooterContentColumn>
              <FooterContentColumn title={"Open Source"}>
                <Link href="www.google.com" underline="hover">
                  Github Repo
                </Link>
                <Link href="www.google.com" underline="hover">
                  Figma
                </Link>
              </FooterContentColumn>
            </FooterContent>
          </FooterTopSection>
          <FooterBottomSection>
            <FooterCopyright>
              <FooterCopyrightDate>All Rights Reserved</FooterCopyrightDate>
              <FooterCopyrightLinkWrapper>
                <Link href="www.google.com" underline="hover">
                  Disclaimer
                </Link>
                <Link href="www.google.com" underline="hover">
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
    const social_media = [
      {
        icon: <FacebookIcon />,
        name: "Facebook",
        href: "https://www.facebook.com/KementerianDigitalMalaysia/",
      },
      {
        icon: <TwitterIcon />,
        name: "X",
        href: "https://x.com/KemDigitalMsia",
      },
      {
        icon: <InstagramIcon />,
        name: "Instagram",
        href: "https://www.instagram.com/kementeriandigitalmalaysia/",
      },
      {
        icon: <TikTokIcon />,
        name: "Tiktok",
        href: "https://www.tiktok.com/@kementeriandigital",
      },
    ];

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
              <SocialMedia social_media={social_media}>Follow Us</SocialMedia>
            </FooterMainInfo>
            <FooterContent>
              <FooterContentColumn title={"About Us"}>
                <Link href="www.google.com" underline="hover">
                  Ministry Of Digital
                </Link>
                <Link href="www.google.com" underline="hover">
                  Directory
                </Link>
                <Link href="www.google.com" underline="hover">
                  Achievements
                </Link>
                <Link href="www.google.com" underline="hover">
                  Directory
                </Link>
                <Link href="www.google.com" underline="hover">
                  Policy
                </Link>
                <Link href="www.google.com" underline="hover">
                  Media
                </Link>
                <Link href="www.google.com" underline="hover">
                  Contact Us
                </Link>
              </FooterContentColumn>
              <FooterContentColumn title={"Quick Links"}>
                <Link href="https://www.google.com" underline="hover">
                  SpotMe
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  MyGovUC
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  DDMS
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  MyMesyuarat
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  ePenyata Gaji
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  HRMIS
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  ePerolehan
                </Link>
              </FooterContentColumn>
              <FooterContentColumn title={"Open Source"}>
                <Link href="https://github.com" underline="hover">
                  GitHub Repo
                </Link>
                <Link href="https://www.figma.com" underline="hover">
                  Figma
                </Link>
              </FooterContentColumn>
            </FooterContent>
          </FooterTopSection>
          <FooterBottomSection>
            <FooterCopyright>
              <FooterCopyrightDate>All Rights Reserved</FooterCopyrightDate>
              <FooterCopyrightLinkWrapper>
                <Link href="https://www.google.com" underline="hover">
                  Disclaimer
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  Disclaimer
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
    const social_media = [
      {
        icon: <FacebookIcon />,
        name: "Facebook",
        href: "https://www.facebook.com/KementerianDigitalMalaysia/",
      },
      {
        icon: <TwitterIcon />,
        name: "X",
        href: "https://x.com/KemDigitalMsia",
      },
      {
        icon: <InstagramIcon />,
        name: "Instagram",
        href: "https://www.instagram.com/kementeriandigitalmalaysia/",
      },
      {
        icon: <TikTokIcon />,
        name: "Tiktok",
        href: "https://www.tiktok.com/@kementeriandigital",
      },
    ];

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
              <SocialMedia social_media={social_media}>Follow Us</SocialMedia>
            </FooterMainInfo>
            <FooterContent>
              <FooterContentColumn title={"About Us"}>
                <Link href="www.google.com" underline="hover">
                  Ministry Of Digital
                </Link>
                <Link href="www.google.com" underline="hover">
                  Directory
                </Link>
                <Link href="www.google.com" underline="hover">
                  Achievements
                </Link>
                <Link href="www.google.com" underline="hover">
                  Directory
                </Link>
                <Link href="www.google.com" underline="hover">
                  Policy
                </Link>
                <Link href="www.google.com" underline="hover">
                  Media
                </Link>
                <Link href="www.google.com" underline="hover">
                  Contact Us
                </Link>
              </FooterContentColumn>
              <FooterContentColumn title={"Quick Links"}>
                <Link href="https://www.google.com" underline="hover">
                  SpotMe
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  MyGovUC
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  DDMS
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  MyMesyuarat
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  ePenyata Gaji
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  HRMIS
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  ePerolehan
                </Link>
              </FooterContentColumn>
              <FooterContentColumn title={"Open Source"}>
                <Link href="https://github.com" underline="hover">
                  GitHub Repo
                </Link>
                <Link href="https://www.figma.com" underline="hover">
                  Figma
                </Link>
              </FooterContentColumn>
            </FooterContent>
          </FooterTopSection>
          <FooterBottomSection>
            <FooterCopyright>
              <FooterCopyrightDate>All Rights Reserved</FooterCopyrightDate>
              <FooterCopyrightLinkWrapper>
                <Link href="https://www.google.com" underline="hover">
                  Disclaimer
                </Link>
                <Link href="https://www.google.com" underline="hover">
                  Disclaimer
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
