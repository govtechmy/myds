import { FunctionComponent, PropsWithChildren } from "react";

type FooterContent = PropsWithChildren;
type FooterContentAgencySection = PropsWithChildren;
type FooterContentLinkSection = PropsWithChildren;
type FooterContentLinkSectionTitle = PropsWithChildren;
type FooterContentLinkSectionContent = {
  children: React.ReactNode;
  href: string;
};

const FooterContent: FunctionComponent<FooterContent> = ({ children }) => {
  return (
    <div className="max-sm:px-4.5 flex flex-col gap-6 pb-8 lg:flex-row lg:justify-between">
      {children}
    </div>
  );
};

const FooterContentAgencySection: FunctionComponent<
  FooterContentAgencySection
> = ({ children }) => {
  return <div className="lg:gap-4.5 flex flex-col gap-4">{children}</div>;
};

const FooterContentLinkSection: FunctionComponent<FooterContentLinkSection> = ({
  children,
}) => {
  return (
    <div className="flex flex-col gap-6 text-sm lg:flex-row">
      <div className="space-y-2">{children}</div>
    </div>
  );
};

const FooterContentLinkSectionTitle: FunctionComponent<
  FooterContentLinkSectionTitle
> = ({ children }) => {
  return <p className="font-semibold">{children}</p>;
};

const FooterContentLinkSectionContent: FunctionComponent<
  FooterContentLinkSectionContent
> = ({ children, href }) => {
  return (
    <div className="grid grid-cols-2 flex-col gap-y-2 sm:grid-cols-4 sm:gap-x-6 lg:flex lg:w-[200px] lg:gap-2">
      <a className="" target="_blank" rel="noopenner noreferrer" href={href}>
        {children}
      </a>
    </div>
  );
};

type FooterAgencyHeaderProps = {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
};

type FooterAgencyMediaLinksLogoPathProps = {
  children?: React.ReactNode;
  icons: {
    href: string;
    icon: React.ReactNode;
  }[];
};

type FooterAgencyAddressProps = PropsWithChildren;
type FooterAgencyMediaLinks = PropsWithChildren;

// FooterAgencyHeader
const FooterAgencyHeader: FunctionComponent<FooterAgencyHeaderProps> = ({
  imageSrc,
  imageAlt,
  children,
}) => {
  return (
    <div className="flex items-center gap-x-2.5">
      <img
        src={imageSrc}
        width={28}
        height={28}
        alt={imageAlt}
        className="select-none"
      ></img>
      <div>
        <p className="font-heading whitespace-nowrap font-semibold">
          {children}
        </p>
      </div>
    </div>
  );
};

// FooterAgencyAddress.tsx
const FooterAgencyAddress: FunctionComponent<FooterAgencyAddressProps> = ({
  children,
}) => <p className="text-txt-black-700 whitespace-pre text-sm">{children}</p>;
//use whitespace-pre so they can display as typed.

// FooterAgencyMediaLinks.tsx
const FooterAgencyMediaLinks: FunctionComponent<FooterAgencyMediaLinks> = ({
  children,
}) => {
  return (
    <div className="space-y-2 lg:space-y-3">
      <p className="text-sm font-semibold">Follow us</p>
      {children}
    </div>
  );
};

// FooterAgencyMediaLinksLogoPath
const FooterAgencyMediaLinksLogoPath: FunctionComponent<
  FooterAgencyMediaLinksLogoPathProps
> = ({ icons }) => {
  return (
    <div className="flex gap-3">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className=""
          //check for hover animation
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

type FooterDisclaimer = PropsWithChildren;
type FooterDisclaimerGroup = PropsWithChildren;
type FooterDisclaimerGroupRights = PropsWithChildren;
type FooterDisclaimerGroupDisclaimer = PropsWithChildren;
type FooterDisclaimerLastUpdate = PropsWithChildren;
type FooterGeneralLink = {
  children: React.ReactNode;
  href: string;
};

// FooterDisclaimer.tsx
const FooterDisclaimer: FunctionComponent<FooterDisclaimer> = ({
  children,
}) => (
  <div className="text-txt-black-500 max-sm:px-4.5 flex flex-col justify-between gap-6 pt-8 text-sm lg:flex-row">
    {children}
  </div>
);

// FooterDisclaimerGroup.tsx
const FooterDisclaimerGroup: FunctionComponent<FooterDisclaimerGroup> = ({
  children,
}) => (
  <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
    {children}
  </div>
);

// FooterDisclaimerGroupRights.tsx
const FooterDisclaimerGroupRights: FunctionComponent<
  FooterDisclaimerGroupRights
> = ({ children }) => (
  <>
    <p>{children}</p>
    <span className="bg-otl-divider hidden h-3 w-px lg:block"></span>
  </>
);

const FooterDisclaimerGroupDisclaimer: FunctionComponent<
  FooterDisclaimerGroupDisclaimer
> = ({ children }) => (
  <div className="text-txt-black-700 flex flex-wrap gap-x-3 gap-y-2">
    {children}
  </div>
);

//FooterDicalimerLastUpdate.tsx
const FooterDisclaimerLastUpdate: FunctionComponent<
  FooterDisclaimerLastUpdate
> = ({ children }) => (
  <time dateTime={new Date().toISOString()}>{children}</time>
);

//FooterGeneralLink.tsx
const FooterGeneralLink: FunctionComponent<FooterGeneralLink> = ({
  children,
  href,
}) => (
  <a
    href={href}
    className="text-txt-black-700 hover:text-txt-black-900 text-sm hover:underline hover:underline-offset-auto"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

<FooterDisclaimer>
  <FooterDisclaimerGroup>
    <FooterDisclaimerGroupRights></FooterDisclaimerGroupRights>
    <FooterDisclaimerGroupDisclaimer>
      <FooterGeneralLink href="helo">Disclaimer</FooterGeneralLink>
      <FooterGeneralLink href="helo">PrivacyPlicy</FooterGeneralLink>
    </FooterDisclaimerGroupDisclaimer>
  </FooterDisclaimerGroup>
  <FooterDisclaimerLastUpdate></FooterDisclaimerLastUpdate>
</FooterDisclaimer>;

type Footer = PropsWithChildren;

// Footer.tsx
const Footer: FunctionComponent<Footer> = ({ children }) => (
  <div className="border-otl-gray-200 bg-bg-gray-50 border-t py-8 lg:py-16 print:hidden">
    <div className="divide-otl-gray-200 container divide-y max-sm:px-0">
      {children}
    </div>
  </div>
);

// Exports

export {
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
};

<Footer>
  <FooterContent>
    <FooterContentAgencySection>
      <FooterAgencyHeader imageSrc={""} imageAlt={""}>
        AgencyName
      </FooterAgencyHeader>
      <FooterAgencyAddress></FooterAgencyAddress>
      <FooterAgencyMediaLinks>
        <FooterAgencyMediaLinksLogoPath
          icons={[]}
        ></FooterAgencyMediaLinksLogoPath>
      </FooterAgencyMediaLinks>
    </FooterContentAgencySection>
    <FooterContentLinkSection>
      <FooterContentLinkSectionTitle>Title</FooterContentLinkSectionTitle>
      <FooterContentLinkSectionContent href={""}>
        sample
      </FooterContentLinkSectionContent>
    </FooterContentLinkSection>
  </FooterContent>
  <FooterDisclaimer>
    <FooterDisclaimerGroup>
      <FooterDisclaimerGroupRights></FooterDisclaimerGroupRights>
      <FooterDisclaimerGroupDisclaimer>
        <FooterGeneralLink href="helo">Disclaimer</FooterGeneralLink>
        <FooterGeneralLink href="helo">PrivacyPlicy</FooterGeneralLink>
      </FooterDisclaimerGroupDisclaimer>
    </FooterDisclaimerGroup>
    <FooterDisclaimerLastUpdate></FooterDisclaimerLastUpdate>
  </FooterDisclaimer>
</Footer>;
