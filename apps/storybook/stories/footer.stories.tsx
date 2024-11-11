import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Footer,
  FooterContent,
  FooterContentAgencySection,
  FooterAgencyHeader,
  FooterAgencyAddress,
  FooterAgencyMediaLinks,
  FooterAgencyMediaLinksLogoPath,
  FooterContentLinkSection,
  FooterContentLinkSectionTitle,
  FooterContentLinkSectionContent,
  FooterGeneralLink,
  FooterDisclaimer,
  FooterDisclaimerGroup,
  FooterDisclaimerGroupRights,
  FooterDisclaimerGroupDisclaimer,
  FooterDisclaimerLastUpdate,
} from "@myds/react/footer";
import { FacebookIcon } from "../../../packages/react/src/icons/facebook";
import { InstagramIcon } from "../../../packages/react/src/icons/instagram";
import { TwitterIcon } from "../../../packages/react/src/icons/twitter";
import { TiktokIcon } from "../../../packages/react/src/icons/tiktok";

const meta = {
  title: "@myds/react/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

const socialMediaIcons = [
  {
    href: "https://facebook.com/ministryofdigital",
    icon: <FacebookIcon className="currentColor" />,
  },
  {
    href: "https://instagram.com/ministryofdigital",
    icon: <InstagramIcon />,
  },
  {
    href: "https://twitter.com/ministryofdigital",
    icon: <TwitterIcon />,
  },
  {
    href: "https://tiktok.com/@ministryofdigital",
    icon: <TiktokIcon />,
  },
];

/**
 * Default footer configuration with complete layout including agency information,
 * navigation links, social media, and disclaimer.
 */

export const Default: Story = {
  render: () => {
    const socialMediaIcons = [
      {
        href: "https://facebook.com/ministryofdigital",
        icon: <FacebookIcon />,
      },
      {
        href: "https://instagram.com/ministryofdigital",
        icon: <InstagramIcon />,
      },
      {
        href: "https://twitter.com/ministryofdigital",
        icon: <TwitterIcon />,
      },
      {
        href: "https://tiktok.com/@ministryofdigital",
        icon: <TiktokIcon />,
      },
    ];

    return (
      <Footer>
        <FooterContent>
          <FooterContentAgencySection>
            <FooterAgencyHeader
              imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"
              imageAlt="JataNegara"
            >
              Ministry of Digital
            </FooterAgencyHeader>
            <FooterAgencyAddress>
              Aras 13, 14 & 15, Blok Menara,{"\n"}
              Menara Usahawan{"\n"}
              No. 18, Persiaran Perdana, Presint 2{"\n"}
              Pusat Pentadbiran Kerajaan Persekutuan{"\n"}
              62000 Putrajaya, Malaysia
            </FooterAgencyAddress>
            <FooterAgencyMediaLinks>
              <FooterAgencyMediaLinksLogoPath icons={socialMediaIcons} />
            </FooterAgencyMediaLinks>
          </FooterContentAgencySection>

          <FooterContentLinkSection>
            <FooterContentLinkSectionTitle>
              About Us
            </FooterContentLinkSectionTitle>
            <FooterContentLinkSectionContent>
              <FooterGeneralLink href="">Ministry of Digital</FooterGeneralLink>
              <FooterGeneralLink href="">Directory</FooterGeneralLink>
              <FooterGeneralLink href="">Achievements</FooterGeneralLink>
              <FooterGeneralLink href="">Policy</FooterGeneralLink>
              <FooterGeneralLink href="">Media</FooterGeneralLink>
              <FooterGeneralLink href="">Contact Us</FooterGeneralLink>
            </FooterContentLinkSectionContent>
          </FooterContentLinkSection>

          <FooterContentLinkSection>
            <FooterContentLinkSectionTitle>
              Quick Links
            </FooterContentLinkSectionTitle>
            <FooterContentLinkSectionContent>
              <FooterGeneralLink href="">SpotMe</FooterGeneralLink>
              <FooterGeneralLink href="">MyGovUC</FooterGeneralLink>
              <FooterGeneralLink href="">DDMS</FooterGeneralLink>
              <FooterGeneralLink href="">MyMesyuarat</FooterGeneralLink>
              <FooterGeneralLink href="">ePenyata Gaji</FooterGeneralLink>
              <FooterGeneralLink href="">HRMIS</FooterGeneralLink>
              <FooterGeneralLink href="">ePerolehan</FooterGeneralLink>
            </FooterContentLinkSectionContent>
          </FooterContentLinkSection>

          <FooterContentLinkSection>
            <FooterContentLinkSectionTitle>
              Open Source
            </FooterContentLinkSectionTitle>
            <FooterContentLinkSectionContent>
              <FooterGeneralLink href="">Github Repo</FooterGeneralLink>
              <FooterGeneralLink href="">Figma</FooterGeneralLink>
            </FooterContentLinkSectionContent>
          </FooterContentLinkSection>
        </FooterContent>

        <FooterDisclaimer>
          <FooterDisclaimerGroup>
            <FooterDisclaimerGroupRights>
              All Rights Reserved © {new Date().getFullYear()}
            </FooterDisclaimerGroupRights>
            <FooterDisclaimerGroupDisclaimer>
              <FooterGeneralLink href="">Disclaimer</FooterGeneralLink>
              <FooterGeneralLink href="">Privacy Policy</FooterGeneralLink>
            </FooterDisclaimerGroupDisclaimer>
          </FooterDisclaimerGroup>
          <FooterDisclaimerLastUpdate>
            Last Updated: 5 November 2024 at 00:59 pm
          </FooterDisclaimerLastUpdate>
        </FooterDisclaimer>
      </Footer>
    );
  },
};
Default.storyName = "Default";

/*
 * Dark theme variant of the footer
 */
export const DefaultDark: Story = {
  ...createStory({}, "dark"),
  render: () => {
    const socialMediaIcons = [
      {
        href: "https://facebook.com/ministryofdigital",
        icon: <FacebookIcon />,
      },
      {
        href: "https://instagram.com/ministryofdigital",
        icon: <InstagramIcon />,
      },
      {
        href: "https://twitter.com/ministryofdigital",
        icon: <TwitterIcon />,
      },
      {
        href: "https://tiktok.com/@ministryofdigital",
        icon: <TiktokIcon />,
      },
    ];

    return (
      <div className="dark">
        <Footer>
          <FooterContent>
            <FooterContentAgencySection>
              <FooterAgencyHeader
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_Malaysia.svg/500px-Coat_of_arms_of_Malaysia.svg.png"
                imageAlt="JataNegara"
              >
                Ministry of Digital
              </FooterAgencyHeader>
              <FooterAgencyAddress>
                Aras 13, 14 & 15, Blok Menara,{"\n"}
                Menara Usahawan{"\n"}
                No. 18, Persiaran Perdana, Presint 2{"\n"}
                Pusat Pentadbiran Kerajaan Persekutuan{"\n"}
                62000 Putrajaya, Malaysia
              </FooterAgencyAddress>
              <FooterAgencyMediaLinks>
                <FooterAgencyMediaLinksLogoPath icons={socialMediaIcons} />
              </FooterAgencyMediaLinks>
            </FooterContentAgencySection>

            <FooterContentLinkSection>
              <FooterContentLinkSectionTitle>
                About Us
              </FooterContentLinkSectionTitle>
              <FooterContentLinkSectionContent>
                <FooterGeneralLink href="">
                  Ministry of Digital
                </FooterGeneralLink>
                <FooterGeneralLink href="">Directory</FooterGeneralLink>
                <FooterGeneralLink href="">Achievements</FooterGeneralLink>
                <FooterGeneralLink href="">Policy</FooterGeneralLink>
                <FooterGeneralLink href="">Media</FooterGeneralLink>
                <FooterGeneralLink href="">Contact Us</FooterGeneralLink>
              </FooterContentLinkSectionContent>
            </FooterContentLinkSection>

            <FooterContentLinkSection>
              <FooterContentLinkSectionTitle>
                Quick Links
              </FooterContentLinkSectionTitle>
              <FooterContentLinkSectionContent>
                <FooterGeneralLink href="">SpotMe</FooterGeneralLink>
                <FooterGeneralLink href="">MyGovUC</FooterGeneralLink>
                <FooterGeneralLink href="">DDMS</FooterGeneralLink>
                <FooterGeneralLink href="">MyMesyuarat</FooterGeneralLink>
                <FooterGeneralLink href="">ePenyata Gaji</FooterGeneralLink>
                <FooterGeneralLink href="">HRMIS</FooterGeneralLink>
                <FooterGeneralLink href="">ePerolehan</FooterGeneralLink>
              </FooterContentLinkSectionContent>
            </FooterContentLinkSection>

            <FooterContentLinkSection>
              <FooterContentLinkSectionTitle>
                Open Source
              </FooterContentLinkSectionTitle>
              <FooterContentLinkSectionContent>
                <FooterGeneralLink href="">Github Repo</FooterGeneralLink>
                <FooterGeneralLink href="">Figma</FooterGeneralLink>
              </FooterContentLinkSectionContent>
            </FooterContentLinkSection>
          </FooterContent>

          <FooterDisclaimer>
            <FooterDisclaimerGroup>
              <FooterDisclaimerGroupRights>
                All Rights Reserved © {new Date().getFullYear()}
              </FooterDisclaimerGroupRights>
              <FooterDisclaimerGroupDisclaimer>
                <FooterGeneralLink href="">Disclaimer</FooterGeneralLink>
                <FooterGeneralLink href="">Privacy Policy</FooterGeneralLink>
              </FooterDisclaimerGroupDisclaimer>
            </FooterDisclaimerGroup>
            <FooterDisclaimerLastUpdate>
              Last Updated: 5 November 2024 at 00:59 pm
            </FooterDisclaimerLastUpdate>
          </FooterDisclaimer>
        </Footer>
      </div>
    );
  },
};
DefaultDark.storyName = "Default - Dark Mode";
