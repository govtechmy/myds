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
} from "@myds/react/footer";
import { FacebookIcon } from "../../../packages/react/src/icons/facebook";
import { InstagramIcon } from "../../../packages/react/src/icons/instagram";
import { TwitterIcon } from "../../../packages/react/src/icons/twitter";
import { TiktokIcon } from "../../../packages/react/src/icons/tiktok";
import { Link } from "@myds/react/link";

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
    const links = {
      "Title 1": [
        { name: "Link 1", href: "https://www.google.com/" },
        { name: "Link 2", href: "https://www.google.com/" },
        { name: "Link 3", href: "https://www.google.com/" },
        { name: "Link 4", href: "https://www.google.com/" },
      ],
      "Title 2": [
        { name: "Link 1", href: "https://www.google.com/" },
        { name: "Link 2", href: "https://www.google.com/" },
        { name: "Link 3", href: "https://www.google.com/" },
        { name: "Link 4", href: "https://www.google.com/" },
      ],
      "Title 3": [
        { name: "Link 1", href: "https://www.google.com/" },
        { name: "Link 2", href: "https://www.google.com/" },
        { name: "Link 3", href: "https://www.google.com/" },
        { name: "Link 4", href: "https://www.google.com/" },
      ],
    };

    const social_media = [
      {
        icon: <FacebookIcon />,
        name: "Facebook",
        href: "https://www.facebook.com/KementerianDigitalMalaysia/",
      },
      {
        icon: <TiktokIcon />,
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
                Sample Address Line 1{"\n"}
                Sample Street Name, Sample Area{"\n"}
                Sample District, Sample City{"\n"}
                12345 Sample Postal Code,{"\n"}
                Sample Country
              </Address>
              <SocialMedia social_media={social_media}>Follow Us</SocialMedia>
            </FooterMainInfo>
            <FooterContent links={links}></FooterContent>
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
    const links = {
      "About Us": [
        { name: "Ministry of Digital", href: "https://www.google.com/" },
        { name: "Directory", href: "https://www.google.com/" },
        { name: "Achievements", href: "https://www.google.com/" },
        { name: "Policy", href: "https://www.google.com/" },
        { name: "Media", href: "https://www.google.com/" },
        { name: "Contact Us", href: "https://www.google.com/" },
      ],
      "Quick Links": [
        { name: "SpotMe", href: "https://www.google.com/" },
        { name: "MyGovUC", href: "https://www.google.com/" },
        { name: "DDMS", href: "https://www.google.com/" },
        { name: "MyMesyuarat", href: "https://www.google.com/" },
        { name: "ePenyata Gaji", href: "https://www.google.com/" },
        { name: "HRMIS", href: "https://www.google.com/" },
        { name: "ePerolehan", href: "https://www.google.com/" },
      ],
      "Open Source": [
        { name: "Github Repo", href: "https://www.google.com/" },
        { name: "Figma", href: "https://www.google.com/" },
      ],
    };

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
        icon: <TiktokIcon />,
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
            <FooterContent links={links}></FooterContent>
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
    const links = {
      "About Us": [
        { name: "Ministry of Digital", href: "https://www.google.com/" },
        { name: "Directory", href: "https://www.google.com/" },
        { name: "Achievements", href: "https://www.google.com/" },
        { name: "Policy", href: "https://www.google.com/" },
        { name: "Media", href: "https://www.google.com/" },
        { name: "Contact Us", href: "https://www.google.com/" },
      ],
      "Quick Links": [
        { name: "SpotMe", href: "https://www.google.com/" },
        { name: "MyGovUC", href: "https://www.google.com/" },
        { name: "DDMS", href: "https://www.google.com/" },
        { name: "MyMesyuarat", href: "https://www.google.com/" },
        { name: "ePenyata Gaji", href: "https://www.google.com/" },
        { name: "HRMIS", href: "https://www.google.com/" },
        { name: "ePerolehan", href: "https://www.google.com/" },
      ],
      "Open Source": [
        { name: "Github Repo", href: "https://www.google.com/" },
        { name: "Figma", href: "https://www.google.com/" },
      ],
    };

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
        icon: <TiktokIcon />,
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
            <FooterContent links={links}></FooterContent>
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
