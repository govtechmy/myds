import { FunctionComponent, PropsWithChildren } from "react";
import { clx } from "../utils";

type WithClassName = { className?: string };
type FooterContent = PropsWithChildren<WithClassName>;
type FooterContentAgencySection = PropsWithChildren<WithClassName>;
type FooterContentLinkSection = PropsWithChildren<WithClassName>;
type FooterContentLinkSectionTitle = PropsWithChildren<WithClassName>;
type FooterContentLinkSectionContent = PropsWithChildren<WithClassName>;
type FooterContentLinkSectionWrapper = PropsWithChildren<WithClassName>;
type FooterAgencyHeaderProps = {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  className?: string;
};
type FooterAgencyMediaLinksLogoPathProps = {
  children?: React.ReactNode;
  className?: string;
  icons: {
    href: string;
    icon: React.ReactNode;
  }[];
};
type FooterAgencyAddressProps = PropsWithChildren<WithClassName>;
type FooterAgencyMediaLinks = PropsWithChildren<WithClassName>;
type FooterDisclaimer = PropsWithChildren<WithClassName>;
type FooterDisclaimerGroup = PropsWithChildren<WithClassName>;
type FooterDisclaimerGroupRights = PropsWithChildren<WithClassName>;
type FooterDisclaimerGroupDisclaimer = PropsWithChildren<WithClassName>;
type FooterDisclaimerLastUpdate = PropsWithChildren<WithClassName>;
type FooterGeneralLink = {
  children: React.ReactNode;
  href: string;
  className?: string;
};
type Footer = PropsWithChildren<WithClassName>;

const FooterContent: FunctionComponent<FooterContent> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clx(
        "max-sm:px-4.5 flex flex-col gap-6 pb-8 lg:flex-row lg:justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

const FooterContentAgencySection: FunctionComponent<
  FooterContentAgencySection
> = ({ children, className }) => {
  return (
    <div className={clx("lg:gap-4.5 flex flex-col gap-4", className)}>
      {children}
    </div>
  );
};

const FooterContentLinkSection: FunctionComponent<FooterContentLinkSection> = ({
  children,
  className,
}) => {
  return (
    <div className={clx("flex flex-col gap-6 text-sm lg:flex-row", className)}>
      {children}
    </div>
  );
};

const FooterContentLinkSectionWrapper: FunctionComponent<
  FooterContentLinkSectionWrapper
> = ({ children, className }) => {
  return <div className={clx("space-y-2", className)}>{children}</div>;
};

const FooterContentLinkSectionTitle: FunctionComponent<
  FooterContentLinkSectionTitle
> = ({ children, className }) => {
  return (
    <p className={clx("text-txt-black-900 font-semibold", className)}>
      {children}
    </p>
  );
};

const FooterContentLinkSectionContent: FunctionComponent<
  FooterContentLinkSectionContent
> = ({ children, className }) => {
  return (
    <div
      className={clx(
        "grid grid-cols-2 flex-col gap-y-2 sm:grid-cols-4 sm:gap-x-6 lg:flex lg:w-[200px] lg:gap-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

const FooterAgencyHeader: FunctionComponent<FooterAgencyHeaderProps> = ({
  imageSrc,
  imageAlt,
  children,
  className,
}) => {
  return (
    <div className={clx("flex items-center gap-x-2.5", className)}>
      <img
        src={imageSrc}
        width={28}
        height={28}
        alt={imageAlt}
        className="select-none"
      />
      <div>
        <p className="font-heading text-txt-black-900 whitespace-nowrap font-semibold">
          {children}
        </p>
      </div>
    </div>
  );
};

const FooterAgencyAddress: FunctionComponent<FooterAgencyAddressProps> = ({
  children,
  className,
}) => (
  <p className={clx("text-txt-black-700 whitespace-pre text-sm", className)}>
    {children}
  </p>
);

const FooterAgencyMediaLinks: FunctionComponent<FooterAgencyMediaLinks> = ({
  children,
  className,
}) => {
  return (
    <div className={clx("space-y-2 lg:space-y-3", className)}>
      <p className="text-txt-black-900 text-sm font-semibold">Follow us</p>
      {children}
    </div>
  );
};

const FooterAgencyMediaLinksLogoPath: FunctionComponent<
  FooterAgencyMediaLinksLogoPathProps
> = ({ icons, className }) => {
  return (
    <div className={clx("text-txt-black-700 flex gap-3", className)}>
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

const FooterDisclaimer: FunctionComponent<FooterDisclaimer> = ({
  children,
  className,
}) => (
  <div
    className={clx(
      "text-txt-black-500 max-sm:px-4.5 flex flex-col justify-between gap-6 pt-8 text-sm lg:flex-row",
      className,
    )}
  >
    {children}
  </div>
);

const FooterDisclaimerGroup: FunctionComponent<FooterDisclaimerGroup> = ({
  children,
  className,
}) => (
  <div
    className={clx(
      "flex flex-col gap-2 lg:flex-row lg:items-center",
      className,
    )}
  >
    {children}
  </div>
);

const FooterDisclaimerGroupRights: FunctionComponent<
  FooterDisclaimerGroupRights
> = ({ children, className }) => (
  <>
    <p className={className}>{children}</p>
    <span className="bg-otl-divider hidden h-3 w-px lg:block"></span>
  </>
);

const FooterDisclaimerGroupDisclaimer: FunctionComponent<
  FooterDisclaimerGroupDisclaimer
> = ({ children, className }) => (
  <div
    className={clx(
      "text-txt-black-700 flex flex-wrap gap-x-3 gap-y-2",
      className,
    )}
  >
    {children}
  </div>
);

const FooterDisclaimerLastUpdate: FunctionComponent<
  FooterDisclaimerLastUpdate
> = ({ children, className }) => (
  <time className={className} dateTime={new Date().toISOString()}>
    {children}
  </time>
);

const FooterGeneralLink: FunctionComponent<FooterGeneralLink> = ({
  children,
  href,
  className,
}) => (
  <a
    href={href}
    className={clx(
      "text-txt-black-700 hover:text-txt-black-900 text-sm hover:underline hover:underline-offset-auto",
      className,
    )}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Footer: FunctionComponent<Footer> = ({ children, className }) => (
  <div
    className={clx(
      "border-otl-gray-200 bg-bg-gray-50 border-t print:hidden",
      className,
    )}
  >
    <div className="divide-otl-gray-200 bg-bg-gray-50 container mx-auto divide-y px-6 py-8 max-sm:px-0 lg:px-[60px] lg:py-16">
      {children}
    </div>
  </div>
);

export {
  Footer,
  FooterContent,
  FooterContentAgencySection,
  FooterAgencyHeader,
  FooterAgencyAddress,
  FooterAgencyMediaLinks,
  FooterAgencyMediaLinksLogoPath,
  FooterContentLinkSection,
  FooterContentLinkSectionWrapper,
  FooterContentLinkSectionTitle,
  FooterContentLinkSectionContent,
  FooterGeneralLink,
  FooterDisclaimer,
  FooterDisclaimerGroup,
  FooterDisclaimerGroupRights,
  FooterDisclaimerGroupDisclaimer,
  FooterDisclaimerLastUpdate,
};
