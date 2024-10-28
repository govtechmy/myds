import React, { PropsWithChildren, useEffect } from "react";
import { ChevronDownIcon } from "../icons/chevron-down";
import { Lock2Icon } from "../icons/lock-2";
import SolidLockIcon from "../icons/solid-lock";
import MalaysiaFlagIcon from "../icons/malaysia-flag";
import { GovMyIcon } from "../icons/gov-my";

// Types
type MastheadContentProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

type MastheadSectionTitleProps = {
  children: React.ReactNode;
};

type MastheadSectionBodyProps = {
  children: React.ReactNode;
};

// Component definitions
export const MastheadHeader = ({ children }: PropsWithChildren) => {
  return (
    <summary className="block cursor-pointer list-none py-2.5 outline-none sm:py-1 [&::-webkit-details-marker]:hidden">
      <div className="px-4.5 mx-auto flex max-w-[1280px] items-center gap-1.5 text-sm/4 max-sm:justify-between md:px-6">
        {children}
      </div>
    </summary>
  );
};

export const MastheadOfficialIndicator = ({
  children = "Official Malaysia Government Website",
}: PropsWithChildren) => {
  return (
    <div className="flex select-none items-center gap-2">
      <MalaysiaFlagIcon className="shrink-0" />
      <span className="text-txt-black-700">{children}</span>
    </div>
  );
};

export const MastheadToggle = ({
  children = "Here's how you know",
}: PropsWithChildren) => (
  <div className="max-sm:bg-bg-washed text-primary-600 flex items-center gap-0.5 max-sm:rounded-md max-sm:px-1">
    <span className="hidden select-none tracking-[-0.01em] sm:block">
      {children}
    </span>
    <ChevronDownIcon className="size-4 transition group-open:rotate-180" />
  </div>
);

export const MastheadContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="container mx-auto max-w-[1280px]">
      <div className="gap-4.5 pt-4.5 grid grid-cols-1 pb-6 pl-6 sm:grid-cols-2 sm:gap-6 sm:pb-8 sm:pt-6">
        <span className="text-primary-600 static text-sm sm:hidden">
          Here's how you know
        </span>
        {children}
      </div>
    </div>
  );
};

export const MastheadSection = ({ icon, children }: MastheadContentProps) => {
  return (
    <div className="flex gap-3">
      <div className="text-txt-black-500 shrink-0">{icon}</div>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
};

export const MastheadSectionTitle = ({
  children,
}: MastheadSectionTitleProps) => (
  <p className="text-txt-black-900 font-medium max-sm:text-sm">{children}</p>
);

export const MastheadSectionBody = ({ children }: MastheadSectionBodyProps) => (
  <div className="text-txt-black-700 max-w-prose text-balance text-sm">
    {children}
  </div>
);

// Default content components
const DefaultMastheadContent = () => (
  <MastheadContent>
    <MastheadSection icon={<GovMyIcon />}>
      <MastheadSectionTitle>
        Official government websites end with .gov.my
      </MastheadSectionTitle>
      <MastheadSectionBody>
        If the link does not end with
        <span className="font-semibold"> .gov.my</span>, exit the website
        immediately even if it looks similar.
      </MastheadSectionBody>
    </MastheadSection>
    <MastheadSection icon={<Lock2Icon />}>
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

const DefaultMastheadHeader = () => (
  <MastheadHeader>
    <MastheadOfficialIndicator />
    <MastheadToggle />
  </MastheadHeader>
);

// Main Masthead component
export const Masthead = ({ children }: PropsWithChildren) => {
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

  // If no children provided, render all defaults
  if (!children) {
    return (
      <div className="bg-bg-washed print:hidden" data-nosnippet>
        <details id="Masthead" className="group">
          <DefaultMastheadHeader />
          <DefaultMastheadContent />
        </details>
      </div>
    );
  }

  // Check for header and content in children
  let hasHeader = false;
  let hasContent = false;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === MastheadHeader) hasHeader = true;
      if (child.type === MastheadContent) hasContent = true;
    }
  });

  return (
    <div className="bg-bg-washed print:hidden" data-nosnippet>
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

// Example usage:
const Example = () => {
  return (
    <>
      {/* Default everything */}
      <Masthead />

      {/* Custom header only */}
      <Masthead>
        <MastheadHeader>
          <MastheadOfficialIndicator>
            Custom Official Text
          </MastheadOfficialIndicator>
          <MastheadToggle>Custom Toggle Text</MastheadToggle>
        </MastheadHeader>
      </Masthead>

      {/* Custom content only */}
      <Masthead>
        <MastheadContent>
          <MastheadSection icon={<GovMyIcon />}>
            <MastheadSectionTitle>Custom Title</MastheadSectionTitle>
            <MastheadSectionBody>Custom content here</MastheadSectionBody>
          </MastheadSection>
        </MastheadContent>
      </Masthead>

      {/* Both custom */}
      <Masthead>
        <MastheadHeader>
          <MastheadOfficialIndicator>
            Custom Official Text
          </MastheadOfficialIndicator>
          <MastheadToggle>Custom Toggle Text</MastheadToggle>
        </MastheadHeader>
        <MastheadContent>
          <MastheadSection icon={<GovMyIcon />}>
            <MastheadSectionTitle>Custom Title</MastheadSectionTitle>
            <MastheadSectionBody>Custom content here</MastheadSectionBody>
          </MastheadSection>
        </MastheadContent>
      </Masthead>
    </>
  );
};

export default Masthead;
