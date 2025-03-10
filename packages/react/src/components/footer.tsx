import {
  Children,
  cloneElement,
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  FunctionComponent,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import { clx } from "../utils";
import { Link } from "./link";
import { Slot } from "@radix-ui/react-slot";

// Main Footer
//====================================================================================================

// interface FooterProps extends ComponentProps<"div"> {
//   background?: string;
// }

// const Footer: FunctionComponent<FooterProps> = ({
//   children,
//   className,
//   background,
//   ...props
// }) => (
//   <div
//     className={clx(
//       "border-otl-gray-200 bg-bg-gray-50 border-t print:hidden",
//       background,
//     )}
//     {...props}
//   >
//     <div
//       className={clx(
//         "divide-otl-gray-200 bg-bg-gray-50 container mx-auto divide-y px-6 py-8 max-sm:px-0 lg:py-16",
//         className,
//       )}
//     >
//       {children}
//     </div>
//   </div>
// );

//====================================================================================================
// Refactoring starts

interface FooterProps extends ComponentProps<"div"> {}
const Footer: ForwardRefExoticComponent<FooterProps> = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx(
          "grid grid-cols-2 gap-6 md:grid-cols-4 lg:mx-auto lg:max-w-[1280px] lg:grid-cols-12",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

interface FooterRootProps extends ComponentProps<"footer"> {}
const FooterRoot: ForwardRefExoticComponent<FooterRootProps> = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <footer
        className={clx(
          "bg-bg-gray-50 border-otl-gray-200 font-body text-body-sm flex flex-col border-t print:hidden",
          "max-md:px-4.5 max-md:gap-6 max-md:py-8",
          "gap-8 md:px-6 md:max-lg:pt-8",
          "lg:py-16",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </footer>
    );
  },
);

interface SiteInfoProps extends ComponentProps<"aside"> {}
const SiteInfo: ForwardRefExoticComponent<SiteInfoProps> = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <aside
        className={clx(
          "flex flex-col max-lg:col-span-full lg:col-start-1 lg:col-end-4",
          "max-lg:gap-4",
          "lg:gap-3",
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </aside>
    );
  },
);

interface SiteLinkGroupProps extends ComponentProps<"div"> {}
const SiteLinkGroup: ForwardRefExoticComponent<SiteLinkGroupProps> = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={clx(
          "flex flex-col gap-2",
          "max-lg:col-span-full md:gap-3",
          "lg:col-span-2",
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

interface SiteLinkTitle extends ComponentProps<"h6"> {
  asChild?: boolean;
}
const SiteLinkTitle: ForwardRefExoticComponent<SiteLinkTitle> = forwardRef(
  ({ children, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h6";

    return (
      <Comp
        className={clx("line-clamp-1 font-semibold", className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

interface SiteLink extends ComponentProps<"nav"> {}

const SiteLink: ForwardRefExoticComponent<SiteLink> = forwardRef(
  ({ children, className, ...props }, ref) => {
    // clone the child and add line-clamp-1 to limit text length
    const processedChildren = Children.toArray(children)
      .slice(0, 8)
      .map((child, index) => {
        if (!isValidElement(child)) return child;

        return cloneElement(child as ReactElement<any>, {
          className: clx(
            "line-clamp-1 lg:col-span-full text-txt-black-700",
            child.props.className,
          ),
          key: index, // Adding key to avoid React warnings
        });
      });

    return (
      <nav
        className={clx(
          "gap-x-4.5 grid grid-cols-2 md:grid-cols-4 md:gap-x-6 lg:grid-cols-2",
          "max-md:gap-y-2 md:max-lg:gap-y-3 lg:gap-y-2",
          className,
        )}
        ref={ref}
        {...props}
      >
        {processedChildren}
      </nav>
    );
  },
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
    <span className="bg-otl-gray-300 hidden h-3 w-px last:hidden lg:block"></span>
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

/*========================================================================================================================*/

Footer.displayName = "Footer";
SiteInfo.displayName = "SiteInfo";
SiteLinkGroup.displayName = "SiteLinkGroup";
SiteLinkTitle.displayName = "SiteLinkTitle";
SiteLink.displayName = "SiteLink";

FooterTopSection.displayName = "FooterTopSection";
FooterMainInfo.displayName = "FooterMainInfo";
ImageWithTitle.displayName = "ImageWithTitle";
Address.displayName = "Address";
SocialMedia.displayName = "SocialMedia";
SocialMediaItem.displayName = "SocialMediaItem";
FooterContent.displayName = "FooterContent";
FooterContentColumn.displayName = "FooterContentColumn";
FooterBottomSection.displayName = "FooterBottomSection";
FooterCopyright.displayName = "FooterCopyright";
FooterCopyrightDate.displayName = "FooterCopyrightDate";
FooterCopyrightLinkWrapper.displayName = "FooterCopyrightLinkWrapper";
FooterTimestamp.displayName = "FooterTimestamp";

/*========================================================================================================================*/

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
  SiteInfo,
  SiteLinkGroup,
  SiteLinkTitle,
  SiteLink,
  FooterRoot,
};
