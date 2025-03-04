import React, { FunctionComponent, PropsWithChildren, useEffect } from "react";
import { ChevronDownIcon } from "../icons/chevron-down";
import { Lock2Icon } from "../icons/lock-2";
import SolidLockIcon from "../icons/solid-lock";
import MalaysiaFlagIcon from "../icons/malaysia-flag";
import { GovMyIcon } from "../icons/gov-my";
import { clx } from "../utils";

// Types
type MastheadContentProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

type ClassnameWithChildrenProps = {
  className?: string;
  children: React.ReactNode;
};

type MastheadSectionTitleProps = PropsWithChildren;
type MastheadSectionBodyProps = PropsWithChildren;
type MastheadProps = PropsWithChildren;
type MastheadHeaderProps = PropsWithChildren;
type MastheadOfficialIndicatorProps = PropsWithChildren;
type MastheadToggleProps = PropsWithChildren;

// Component definitions
const MastheadHeader: FunctionComponent<MastheadHeaderProps> = ({
  children,
}) => {
  return (
    <summary
      className="block cursor-pointer list-none py-2.5 outline-none sm:py-1 [&::-webkit-details-marker]:hidden"
      tabIndex={-1}
    >
      <div className="px-4.5 container mx-auto flex items-center gap-1.5 text-sm/4 max-sm:justify-between md:px-4">
        {children}
      </div>
    </summary>
  );
};

const MastheadOfficialIndicator: FunctionComponent<
  MastheadOfficialIndicatorProps
> = ({ children = "Official Malaysia Government Website" }) => {
  return (
    <div className="flex select-none items-center gap-2">
      <MalaysiaFlagIcon className="shrink-0" />
      <span className="text-txt-black-700">{children}</span>
    </div>
  );
};

const MastheadToggle: FunctionComponent<MastheadToggleProps> = ({
  children = "Here's how you know",
}) => (
  <div
    className="max-sm:bg-bg-washed text-txt-primary focus:ring-fr-primary flex items-center gap-0.5 rounded-sm p-1 pl-1.5 focus:outline-none focus:ring-[3px] focus:ring-inset max-sm:rounded-md max-sm:px-1"
    tabIndex={0}
  >
    <span className="text-txt-primary hidden select-none tracking-[-0.01em] sm:block">
      {children}
    </span>
    <ChevronDownIcon className="size-4 transition group-open:rotate-180" />
  </div>
);

const MastheadContent: FunctionComponent<ClassnameWithChildrenProps> = ({
  children,
  className,
}) => {
  return (
    <div className="group-open:animate-in group-open:slide-in-from-top-2 group-closed:animate-out group-closed:slide-out-to-top-1 overflow-hidden transition-all duration-300 ease-in-out">
      <div className={clx("px-4.5 container mx-auto", className)}>
        <div className="gap-4.5 pt-4.5 grid grid-cols-1 pb-6 sm:grid-cols-2 sm:gap-6 sm:pb-8 sm:pt-6">
          <span className="text-txt-primary static text-sm sm:hidden">
            Here's how you know
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

const MastheadSection: FunctionComponent<MastheadContentProps> = ({
  icon,
  children,
}) => {
  return (
    <div className="flex gap-3">
      <div className="text-txt-black-500 shrink-0">{icon}</div>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
};

const MastheadSectionTitle: FunctionComponent<MastheadSectionTitleProps> = ({
  children,
}) => (
  <p className="text-txt-black-900 font-medium max-sm:text-sm">{children}</p>
);

const MastheadSectionBody: FunctionComponent<MastheadSectionBodyProps> = ({
  children,
}) => (
  <div className="text-txt-black-700 max-w-prose text-balance text-sm">
    {children}
  </div>
);

// Default content components
const DefaultMastheadContent: FunctionComponent = () => (
  <MastheadContent>
    <MastheadSection icon={<GovMyIcon height={24} width={24} />}>
      <MastheadSectionTitle>
        Official government websites end with .gov.my
      </MastheadSectionTitle>
      <MastheadSectionBody>
        If the link does not end with
        <span className="font-semibold"> .gov.my</span>, exit the website
        immediately even if it looks similar.
      </MastheadSectionBody>
    </MastheadSection>
    <MastheadSection icon={<Lock2Icon height={24} width={24} />}>
      <MastheadSectionTitle>Secure websites use HTTPS</MastheadSectionTitle>
      <MastheadSectionBody>
        Look for a lock (
        <SolidLockIcon className="mb-0.5 inline size-3.5" />) or
        <span className="font-semibold"> https:// </span>
        as an added precaution. If not present, do not share any sensitive
        information.
      </MastheadSectionBody>
    </MastheadSection>
  </MastheadContent>
);

const DefaultMastheadHeader: FunctionComponent = () => (
  <MastheadHeader>
    <MastheadOfficialIndicator />
    <MastheadToggle />
  </MastheadHeader>
);

// Main Masthead component
const Masthead: FunctionComponent<MastheadProps> = ({ children }) => {
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

  if (!children) {
    return (
      <div className="bg-bg-washed outline-none print:hidden" data-nosnippet>
        <details id="Masthead" className="group">
          <DefaultMastheadHeader />
          <DefaultMastheadContent />
        </details>
      </div>
    );
  }

  let hasHeader = false;
  let hasContent = false;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === MastheadHeader) hasHeader = true;
      if (child.type === MastheadContent) hasContent = true;
    }
  });

  return (
    <div className="bg-bg-washed outline-none print:hidden" data-nosnippet>
      <details id="Masthead" className="group">
        {!hasHeader && <DefaultMastheadHeader />}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            if (
              child.type === MastheadHeader ||
              child.type === MastheadContent
            ) {
              return child;
            }
          }
        })}
        {!hasContent && <DefaultMastheadContent />}
      </details>
    </div>
  );
};

// Exports
export {
  Masthead,
  MastheadHeader,
  MastheadOfficialIndicator,
  MastheadToggle,
  MastheadContent,
  MastheadSection,
  MastheadSectionTitle,
  MastheadSectionBody,
};
