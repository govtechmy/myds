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
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

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

const defaultContent = (
  <div className="flex min-h-screen flex-col">
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
          <FooterContentLinkSectionContent href="">
            Ministry of Digital
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            Directory
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            Achievements
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            Policy
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            Media
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            Contact Us
          </FooterContentLinkSectionContent>
        </FooterContentLinkSection>

        <FooterContentLinkSection>
          <FooterContentLinkSectionTitle>
            Quick Links
          </FooterContentLinkSectionTitle>
          <FooterContentLinkSectionContent href="">
            SpotMe
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            MyGovUC
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            DDMS
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            MyMesyuarat
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            ePenyata Gaji
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            HRMIS
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            ePerolehan
          </FooterContentLinkSectionContent>
        </FooterContentLinkSection>

        <FooterContentLinkSection>
          <FooterContentLinkSectionTitle>
            Open Source
          </FooterContentLinkSectionTitle>
          <FooterContentLinkSectionContent href="">
            GitHub Repo
          </FooterContentLinkSectionContent>
          <FooterContentLinkSectionContent href="">
            Figma
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

/**
 * Default footer configuration with complete layout including agency information,
 * navigation links, social media, and disclaimer.
 */
export const Default: Story = createStory({
  children: defaultContent,
});

/**
 * Dark theme variant of the footer
 */
export const Dark: Story = createStory(
  {
    children: defaultContent,
    className: "dark",
  },
  "dark",
);
