import { ComponentProps, FunctionComponent, PropsWithChildren } from "react";
import { clx } from "../utils";

{
  /* <Footer>
  <FooterTopSection>
    <FooterMainInfo>
      <ImageExporter></ImageExporter>
      <Address></Address>
      <SocialMedia></SocialMedia>
    </FooterMainInfo>
    <FooterLink></FooterLink>
  </FooterTopSection>
  <FooterBottomSection>
    <FooterCopyright></FooterCopyright>
    <FooterTimestamp></FooterTimestamp>
  </FooterBottomSection>
</Footer>; */
}

// Main Footer
//====================================================================================================
const Footer: FunctionComponent<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={clx(
      "border-otl-gray-200 bg-bg-gray-50 border-t print:hidden",
      className,
    )}
    {...props}
  >
    <div className="divide-otl-gray-200 bg-bg-gray-50 container mx-auto divide-y px-6 py-8 max-sm:px-0 lg:px-[60px] lg:py-16">
      {children}
    </div>
  </div>
);
//====================================================================================================

// <FooterTopSection>
//   <FooterMainInfo></FooterMainInfo>
//   <FooterLink></FooterLink>
// </FooterTopSection>

//Footer Top Section
//====================================================================================================
const FooterTopSection: FunctionComponent<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => (
  <div
    className="max-sm:px-4.5 flex flex-col gap-6 pb-8 lg:flex-row lg:justify-between"
    {...props}
  >
    {children}
  </div>
);

//Main Info
const FooterMainInfo: FunctionComponent<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => (
  <div className="lg:gap-4.5 flex flex-col gap-4" {...props}>
    {children}
  </div>
);

//Footer Link

interface LinkItem {
  name: string;
  href: string;
}

type LinksObject = Record<string, LinkItem[]>;
interface FooterLinkProps extends ComponentProps<"div"> {
  links: LinksObject;
}

const FooterContentLink: FunctionComponent<FooterLinkProps> = ({
  children,
  className,
  links,
  ...props
}) => (
  <div
    className="text-txt-black-900 flex flex-col gap-6 text-sm lg:flex-row"
    {...props}
  >
    {Object.entries(links).map(([category, items]) => (
      <div className="space-y-2" key={category}>
        <p className="font-semibold">{category}</p>
        <div className="grid grid-cols-2 flex-col gap-y-2 sm:grid-cols-4 sm:gap-x-6 lg:flex lg:w-[200px] lg:gap-2">
          {items.map(({ name, href }) => (
            <a
              key={name}
              className="text-txt-black-700 underline-font hover:text-txt-black-900 text-sm hover:underline"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
);

//====================================================================================================

//   <FooterMainInfo>
//     <ImageExporter></ImageExporter>
//     <Address></Address>
//     <SocialMedia></SocialMedia>
//   </FooterMainInfo>

// ImageExporter
interface ImageExporterProps extends ComponentProps<"div"> {
  imgSrc: string;
  imgAlt: string;
}

const ImageExporter: FunctionComponent<ImageExporterProps> = ({
  children,
  className,
  imgSrc,
  imgAlt,
  ...props
}) => (
  <div
    className={clx("text-txt-black-900 flex items-center gap-x-2.5", className)}
    {...props}
  >
    <img
      src={imgSrc}
      width={28}
      height={28}
      alt={imgAlt}
      className="select-none"
    />
    <div>
      <p className="font-poppins whitespace-nowrap font-semibold">{children}</p>
    </div>
  </div>
);

//Address
const Address: FunctionComponent<ComponentProps<"p">> = ({
  children,
  className,
  ...props
}) => (
  <p
    className={clx("text-txt-black-700 whitespace-pre text-sm", className)}
    {...props}
  >
    {children}
  </p>
);

// Social Media
interface SocialMediaItem {
  icon: React.ReactNode;
  href: string;
  name: string;
}
interface SocialMediaProps extends ComponentProps<"div"> {
  social_media: SocialMediaItem[];
}
const SocialMedia: FunctionComponent<SocialMediaProps> = ({
  children,
  className,
  social_media,
  ...props
}) => (
  <div
    className={clx("text-txt-black-700 space-y-2 lg:space-y-3", className)}
    {...props}
  >
    <p className="text-txt-black-900 text-sm font-semibold">{children}</p>
    <div className="flex gap-3">
      {social_media.map(({ icon, href, name }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          {icon}
        </a>
      ))}
    </div>
  </div>
);

//====================================================================================================

// <FooterBottomSection>
//   <FooterCopyright>
//    <FooterCopyrightDate>
// .  <FooterCopyrightLink>
//   </FooterCopyright>
//   <FooterTimestamp></FooterTimestamp>
// </FooterBottomSection>;

//Footer Bottom Section
//====================================================================================================

const FooterBottomSection: FunctionComponent<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={clx(
      "text-txt-black-500 max-sm:px-4.5 flex flex-col justify-between gap-6 pt-8 text-sm lg:flex-row",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const FooterCopyright: FunctionComponent<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={clx(
      "flex flex-col gap-2 lg:flex-row lg:items-center",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const FooterCopyrightDate: FunctionComponent<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => (
  <>
    <p className={clx("text-txt-black-500 text-sm", className)} {...props}>
      {children} © {new Date().getFullYear()}
    </p>
    <span className="bg-otl-gray-300 hidden h-3 w-px lg:block"></span>
  </>
);

const FooterCopyrightUtilityWrapper: FunctionComponent<
  ComponentProps<"div">
> = ({ children, className, ...props }) => (
  <div
    className={clx(
      "text-txt-black-700 flex flex-wrap gap-x-3 gap-y-2",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const FooterCopyrightLink: FunctionComponent<ComponentProps<"a">> = ({
  className,
  href,
  children,
  ...props
}) => (
  <a
    className={clx(
      "underline-font text-black-700 hover:text-foreground text-sm hover:underline",
      className,
    )}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

interface FooterTimestampProps extends ComponentProps<"time"> {
  time: string;
}
const FooterTimestamp: FunctionComponent<FooterTimestampProps> = ({
  children,
  className,
  time,
  ...props
}) => {
  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kuala_Lumpur",
  }).format(new Date(time));

  return (
    <time dateTime={time} className={clx(className)} {...props}>
      {children} {formattedTime}
    </time>
  );
};

export {
  Footer,
  FooterTopSection,
  FooterMainInfo,
  ImageExporter,
  Address,
  SocialMedia,
  FooterContentLink,
  FooterBottomSection,
  FooterCopyright,
  FooterCopyrightDate,
  FooterCopyrightUtilityWrapper,
  FooterCopyrightLink,
  FooterTimestamp,
};

/* <Footer>
  <FooterTopSection>
    <FooterMainInfo>
      <ImageExporter></ImageExporter>
      <Address></Address>
      <SocialMedia></SocialMedia>
    </FooterMainInfo>
    <FooterLink></FooterLink>
  </FooterTopSection>
  <FooterBottomSection>
    <FooterCopyright></FooterCopyright>
    <FooterTimestamp></FooterTimestamp>
  </FooterBottomSection>
</Footer>; */
