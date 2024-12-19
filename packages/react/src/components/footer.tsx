import { ComponentProps, FunctionComponent, ReactNode } from "react";
import { clx } from "../utils";
import { Link } from "./link";

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

//Footer Content

interface FooterContentProps {
  children: React.ReactNode;
}

const FooterContent: FunctionComponent<FooterContentProps> = ({ children }) => (
  <div className="text-txt-black-900 flex flex-col gap-6 text-sm lg:flex-row">
    {children}
  </div>
);

interface FooterContentColumnProps {
  children: ReactNode;
  title: string;
}

const FooterContentColumn: FunctionComponent<FooterContentColumnProps> = ({
  title,
  children,
}) => (
  <div className="space-y-2">
    <p className="font-semibold">{title}</p>
    <div className="grid grid-cols-2 flex-col gap-y-2 sm:grid-cols-4 sm:gap-x-6 lg:flex lg:w-[200px] lg:gap-2">
      {children}
    </div>
  </div>
);

//====================================================================================================

// ImageWithTitle
interface ImageWithTitleProps extends ComponentProps<"div"> {
  imgSrc: string;
  imgAlt: string;
}

const ImageWithTitle: FunctionComponent<ImageWithTitleProps> = ({
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
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          underline="none"
          className="hover:text-txt-black-900"
        >
          {icon}
        </Link>
      ))}
    </div>
  </div>
);

//====================================================================================================

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

const FooterCopyrightLinkWrapper: FunctionComponent<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => (
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
  ImageWithTitle,
  Address,
  SocialMedia,
  FooterContent,
  FooterContentColumn,
  FooterBottomSection,
  FooterCopyright,
  FooterCopyrightDate,
  FooterCopyrightLinkWrapper,
  FooterTimestamp,
};
