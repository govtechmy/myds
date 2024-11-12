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
  FooterContentLinkSection2,
} from "@myds/react/footer";
import { FacebookIcon } from "../../../packages/react/src/icons/facebook";
import { InstagramIcon } from "../../../packages/react/src/icons/instagram";
import { TwitterIcon } from "../../../packages/react/src/icons/twitter";
import { TiktokIcon } from "../../../packages/react/src/icons/tiktok";

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
 *   FooterContent,
 *   FooterContentAgencySection,
 *   FooterAgencyHeader,
 *   FooterAgencyAddress,
 *   FooterAgencyMediaLinks,
 *   FooterAgencyMediaLinksLogoPath,
 *   FooterContentLinkSection,
 *   FooterContentLinkSectionTitle,
 *   FooterContentLinkSectionContent,
 *   FooterGeneralLink,
 *   FooterDisclaimer,
 *   FooterDisclaimerGroup,
 *   FooterDisclaimerGroupRights,
 *   FooterDisclaimerGroupDisclaimer,
 *   FooterDisclaimerLastUpdate,
 * } from "@myds/react/footer";
 * ```
 */

const meta = {
  title: "@myds/react/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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
  render: () => {
    const socialMediaIconsSample = [
      {
        href: "https://facebook.com/sample",
        icon: <FacebookIcon />,
      },
      {
        href: "https://instagram.com/sample",
        icon: <InstagramIcon />,
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
              AgencyName
            </FooterAgencyHeader>
            <FooterAgencyAddress>
              Agency Address 1,{"\n"}
              Agency Address 2{"\n"}
              Agency Address 3
            </FooterAgencyAddress>
            <FooterAgencyMediaLinks>
              <FooterAgencyMediaLinksLogoPath icons={socialMediaIconsSample} />
            </FooterAgencyMediaLinks>
          </FooterContentAgencySection>

          <FooterContentLinkSection>
            <FooterContentLinkSection2>
              <FooterContentLinkSectionTitle>
                Title 1
              </FooterContentLinkSectionTitle>
              <FooterContentLinkSectionContent>
                <FooterGeneralLink href="">Link 1</FooterGeneralLink>
                <FooterGeneralLink href="">Link 2</FooterGeneralLink>
                <FooterGeneralLink href="">Link 3</FooterGeneralLink>
                <FooterGeneralLink href="">Link 4</FooterGeneralLink>
              </FooterContentLinkSectionContent>
            </FooterContentLinkSection2>
            <FooterContentLinkSection2>
              <FooterContentLinkSectionTitle>
                Title 2
              </FooterContentLinkSectionTitle>
              <FooterContentLinkSectionContent>
                <FooterGeneralLink href="">Link 1</FooterGeneralLink>
                <FooterGeneralLink href="">Link 2</FooterGeneralLink>
                <FooterGeneralLink href="">Link 3</FooterGeneralLink>
                <FooterGeneralLink href="">Link 4</FooterGeneralLink>
              </FooterContentLinkSectionContent>
            </FooterContentLinkSection2>

            <FooterContentLinkSection2>
              <FooterContentLinkSectionTitle>
                Open Source
              </FooterContentLinkSectionTitle>
              <FooterContentLinkSectionContent>
                <FooterGeneralLink href="">Github Repo</FooterGeneralLink>
                <FooterGeneralLink href="">Figma</FooterGeneralLink>
              </FooterContentLinkSectionContent>
            </FooterContentLinkSection2>
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
            Last Updated: 12 Jun 2024
          </FooterDisclaimerLastUpdate>
        </FooterDisclaimer>
      </Footer>
    );
  },
};

/**
 * Custom footer configuration with complete layout including agency information,
 * navigation links, social media, and disclaimer.
 */
export const Custom: Story = {
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
            <FooterContentLinkSection2>
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
            </FooterContentLinkSection2>
            <FooterContentLinkSection2>
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
            </FooterContentLinkSection2>
            <FooterContentLinkSection2>
              <FooterContentLinkSectionTitle>
                Open Source
              </FooterContentLinkSectionTitle>
              <FooterContentLinkSectionContent>
                <FooterGeneralLink href="">Github Repo</FooterGeneralLink>
                <FooterGeneralLink href="">Figma</FooterGeneralLink>
              </FooterContentLinkSectionContent>
            </FooterContentLinkSection2>
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

/*
 * Dark theme variant of the footer
 */
export const CustomDark: Story = {
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
              <FooterContentLinkSection2>
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
              </FooterContentLinkSection2>
              <FooterContentLinkSection2>
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
              </FooterContentLinkSection2>
              <FooterContentLinkSection2>
                <FooterContentLinkSectionTitle>
                  Open Source
                </FooterContentLinkSectionTitle>
                <FooterContentLinkSectionContent>
                  <FooterGeneralLink href="">Github Repo</FooterGeneralLink>
                  <FooterGeneralLink href="">Figma</FooterGeneralLink>
                </FooterContentLinkSectionContent>
              </FooterContentLinkSection2>
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
