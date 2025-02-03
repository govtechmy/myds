import { ComponentProps, FunctionComponent, ReactNode } from "react";
import { clx } from "../utils";
import { Link } from "./link";

// Main Footer
//====================================================================================================

interface FooterProps extends ComponentProps<"div"> {
  background?: string;
}

const Footer: FunctionComponent<FooterProps> = ({
  children,
  className,
  background,
  ...props
}) => (
  <div
    className={clx(
      "border-otl-gray-200 bg-bg-gray-50 border-t print:hidden",
      background,
    )}
    {...props}
  >
    <div
      className={clx(
        "divide-otl-gray-200 bg-bg-gray-50 container mx-auto divide-y px-6 py-8 max-sm:px-0 lg:py-16",
        className,
      )}
    >
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
    <div className="text-txt-black-700 grid grid-cols-2 flex-col gap-y-2 sm:grid-cols-4 sm:gap-x-6 lg:flex lg:w-[200px] lg:gap-2">
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
      <div className="font-poppins whitespace-nowrap font-semibold">
        {children}
      </div>
    </div>
  </div>
);

//Address
const Address: FunctionComponent<ComponentProps<"p">> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={clx("text-txt-black-700 whitespace-pre text-sm", className)}
    {...props}
  >
    {children}
  </div>
);

// Social Media
interface SocialMediaProps extends React.ComponentProps<"div"> {
  title?: string;
  children: ReactNode;
}

const SocialMedia: FunctionComponent<SocialMediaProps> = ({
  title,
  children,
  className,
  ...props
}) => (
  <div
    className={clx("text-txt-black-700 space-y-2 lg:space-y-3", className)}
    {...props}
  >
    {title && (
      <p className="text-txt-black-900 text-sm font-semibold">{title}</p>
    )}
    <div className="flex gap-3">{children}</div>
  </div>
);

interface SocialMediaItemProps {
  icon: ReactNode;
  href: string;
  name: string;
  className?: string;
}

const SocialMediaItem: FunctionComponent<SocialMediaItemProps> = ({
  icon,
  href,
  name,
  className,
  ...props
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    underline="none"
    className={clx("hover:text-txt-black-900", className)}
    {...props}
  >
    {icon}
  </Link>
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
    <div className={clx("text-txt-black-500 text-sm", className)} {...props}>
      {children} © {new Date().getFullYear()}
    </div>
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
  time: string | number | Date;
}

const FooterTimestamp: FunctionComponent<FooterTimestampProps> = ({
  children,
  className,
  time,
  ...props
}) => {
  const date = new Date(time);
  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kuala_Lumpur",
  }).format(date);

  return (
    <time dateTime={date.toISOString()} className={className} {...props}>
      {children} {formattedTime}
    </time>
  );
};

export default FooterTimestamp;

export {
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
};
