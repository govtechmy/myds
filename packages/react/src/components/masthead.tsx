import React, { useEffect } from "react";
import { ChevronDownIcon } from "../icons/chevron-down";
import { Lock2Icon } from "../icons/lock-2";
import SolidLockIcon from "../icons/solid-lock";
import MalaysiaFlagIcon from "../icons/malaysia-flag";
import { GovMyIcon } from "../icons/gov-my";

// Types
type BaseProps = {
  className?: string;
  children?: React.ReactNode;
};

type MastheadProps = BaseProps & {
  officialText?: string;
  identifyText?: string;
};

type SubComponentProps = BaseProps;

// Components
const MastheadOfficialIndicator: React.FC<SubComponentProps> = ({
  children = "Official Malaysia Government Website",
  className = "",
}) => (
  <div className={`flex select-none items-center gap-2 ${className}`}>
    <MalaysiaFlagIcon className="shrink-0" />
    <span className="text-txt-black-900">{children}</span>
  </div>
);

const MastheadIdentificationToggle: React.FC<SubComponentProps> = ({
  children = "Here's how you know",
  className = "",
}) => (
  <div
    className={`max-sm:bg-bg-washed text-primary-600 flex items-center gap-0.5 max-sm:rounded-md max-sm:px-1 ${className}`}
  >
    <span className="hidden select-none tracking-[-0.01em] sm:block">
      {children}
    </span>
    <ChevronDownIcon className="size-4 transition group-open:rotate-180" />
  </div>
);

const MastheadTitleOfficialInfo: React.FC<SubComponentProps> = ({
  children = "Official government websites end with .gov.my",
  className = "",
}) => <p className={`font-medium max-sm:text-sm ${className}`}>{children}</p>;

const MastheadTitleSecureInfo: React.FC<SubComponentProps> = ({
  children = "Secure websites use HTTPS",
  className = "",
}) => <p className={`font-medium max-sm:text-sm ${className}`}>{children}</p>;

const MastheadOfficialInfo: React.FC<SubComponentProps> = ({
  children,
  className = "",
}) => (
  <div className="text-txt-black-700 max-w-prose text-balance text-sm">
    {children}
  </div>
);

const MastheadSecureInfo: React.FC<SubComponentProps> = ({
  children,
  className = "",
}) => (
  <div className="text-txt-black-700 max-w-prose text-balance text-sm">
    {children}
  </div>
);

type CompoundMasthead = React.FC<MastheadProps> & {
  OfficialIndicator: typeof MastheadOfficialIndicator;
  IdentificationToggle: typeof MastheadIdentificationToggle;
  OfficialInfo: typeof MastheadOfficialInfo;
  SecureInfo: typeof MastheadSecureInfo;
  TitleOfficialInfo: typeof MastheadTitleOfficialInfo;
  TitleSecureInfo: typeof MastheadTitleSecureInfo;
};

const Masthead: CompoundMasthead = ({
  children,
  className = "",
  officialText,
  identifyText,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const details = document.getElementById(
        "Masthead",
      ) as HTMLDetailsElement | null;
      if (
        event.altKey &&
        (event.metaKey || event.ctrlKey) &&
        event.key === "Enter"
      ) {
        event.preventDefault();
        if (details) {
          details.open = !details.open;
        }
      }
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderHeader = () => {
    return (
      React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (
            child.type === MastheadOfficialIndicator ||
            child.type === MastheadIdentificationToggle
          ) {
            return child;
          }
        }
        return null;
      }) || (
        <>
          <MastheadOfficialIndicator>{officialText}</MastheadOfficialIndicator>
          <MastheadIdentificationToggle>
            {identifyText}
          </MastheadIdentificationToggle>
        </>
      )
    );
  };

  const renderOfficialSection = () => {
    let title: React.ReactNode = null;
    let content: React.ReactNode = null;

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === MastheadTitleOfficialInfo) {
          title = child;
        } else if (child.type === MastheadOfficialInfo) {
          content = child;
        }
      }
    });

    return (
      <div className="flex gap-3">
        <GovMyIcon className="text-txt-black-500 shrink-0" />
        <div className="space-y-1.5">
          {title || <MastheadTitleOfficialInfo />}
          {content || (
            <MastheadOfficialInfo>
              If the link does not end with
              <span className="font-semibold"> .gov.my</span>, exit the website
              immediately even if it looks similar.
            </MastheadOfficialInfo>
          )}
        </div>
      </div>
    );
  };

  const renderSecureSection = () => {
    let title: React.ReactNode = null;
    let content: React.ReactNode = null;

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === MastheadTitleSecureInfo) {
          title = child;
        } else if (child.type === MastheadSecureInfo) {
          content = child;
        }
      }
    });

    return (
      <div className="flex gap-3">
        <Lock2Icon className="text-txt-black-500 shrink-0" />
        <div className="space-y-1.5">
          {title || <MastheadTitleSecureInfo />}
          {content || (
            <MastheadSecureInfo>
              Look for a lock (
              <SolidLockIcon className="mb-0.5 inline size-3.5" />) or
              <span className="font-semibold"> https:// </span>
              as an added precaution. If not present, do not share any sensitive
              information.
            </MastheadSecureInfo>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`bg-bg-washed print:hidden ${className}`} data-nosnippet>
      <details id="Masthead" className="group">
        <summary className="block cursor-pointer list-none py-2.5 outline-none sm:py-1">
          <div className="px-4.5 mx-auto flex max-w-[1280px] items-center gap-1.5 text-sm/4 max-sm:justify-between md:px-6">
            {renderHeader()}
          </div>
        </summary>
        <div className="container mx-auto max-w-[1280px]">
          <div className="gap-4.5 pt-4.5 grid grid-cols-1 pb-6 pl-6 sm:grid-cols-2 sm:gap-6 sm:pb-8 sm:pt-6">
            <span className="text-primary-600 static text-sm sm:hidden">
              {identifyText || "Here's how you know"}
            </span>
            {renderOfficialSection()}
            {renderSecureSection()}
          </div>
        </div>
      </details>
    </div>
  );
};

// Attach sub-components
Masthead.OfficialIndicator = MastheadOfficialIndicator;
Masthead.IdentificationToggle = MastheadIdentificationToggle;
Masthead.OfficialInfo = MastheadOfficialInfo;
Masthead.SecureInfo = MastheadSecureInfo;
Masthead.TitleOfficialInfo = MastheadTitleOfficialInfo;
Masthead.TitleSecureInfo = MastheadTitleSecureInfo;

export default Masthead;
