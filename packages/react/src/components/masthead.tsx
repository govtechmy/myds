import React, { useEffect } from "react";
import { ChevronDownIcon } from "../icons/chevron-down";
import { Lock2Icon } from "../icons/lock-2";
import SolidLockIcon from "../icons/solid-lock";
import MalaysiaFlagIcon from "../icons/malaysia-flag";
import { GovMyIcon } from "../icons/gov-my";

// Types
interface OfficialIndicatorProps {
  text?: string;
}

interface IdentificationToggleProps {
  text?: string;
}

interface OfficialInfoProps {
  title?: string;
  description?: string;
  domain?: string;
  closeText?: string;
}

interface SecureInfoProps {
  title?: string;
  description?: string;
  orText?: string;
  protocol?: string;
  precautionText?: string;
}

interface MastheadProps {
  officialText?: string;
  identifyText?: string;
  officialTitle?: string;
  officialDescription?: string;
  domain?: string;
  closeText?: string;
  secureTitle?: string;
  secureDescription?: string;
  orText?: string;
  protocol?: string;
  precautionText?: string;
}

export const OfficialIndicator: React.FC<OfficialIndicatorProps> = ({
  text = "Official Malaysia Government Website",
}) => (
  <div className="flex select-none items-center gap-2">
    <MalaysiaFlagIcon className="shrink-0" />
    <span className="text-txt-black-900">{text}</span>
  </div>
);

export const IdentificationToggle: React.FC<IdentificationToggleProps> = ({
  text = "Here's how you know",
}) => (
  <div className="max-sm:bg-bg-washed text-primary-600 flex items-center gap-0.5 max-sm:rounded-md max-sm:px-1">
    <span className="hidden select-none tracking-[-0.01em] sm:block">
      {text}
    </span>
    <ChevronDownIcon className="size-4 transition group-open:rotate-180" />
  </div>
);

export const OfficialInfo: React.FC<OfficialInfoProps> = ({
  title = "Official government websites end with .gov.my",
  description = "If the link does not end with ",
  domain = ".gov.my",
  closeText = ", exit the website immediately even if it looks similar.",
}) => (
  <div className="flex gap-3">
    <GovMyIcon className="text-txt-black-500 shrink-0" />
    <div className="space-y-1.5">
      <p className="font-medium max-sm:text-sm">{title}</p>
      <div className="text-txt-black-700 max-w-prose text-balance text-sm">
        {description}
        <span className="font-semibold">{domain}</span>
        {closeText}
      </div>
    </div>
  </div>
);

export const SecureInfo: React.FC<SecureInfoProps> = ({
  title = "Secure websites use HTTPS",
  description = "Look for a lock ( ",
  orText = ") or ",
  protocol = "https://",
  precautionText = " as an added precaution. If not present, do not share any sensitive information.",
}) => (
  <div className="flex gap-3">
    <Lock2Icon className="text-txt-black-500 shrink-0" />
    <div className="space-y-1.5">
      <p className="font-medium max-sm:text-sm">{title}</p>
      <div className="text-txt-black-700 max-w-prose text-balance text-sm">
        {description}
        <SolidLockIcon className="mb-0.5 inline size-3.5" />
        {orText}
        <span className="font-semibold">{protocol}</span>
        {precautionText}
      </div>
    </div>
  </div>
);

export const Masthead: React.FC<MastheadProps> = ({
  officialText = "Official Malaysia Government Website",
  identifyText = "Here's how you know",
  officialTitle = "Official government websites end with .gov.my",
  officialDescription = "If the link does not end with ",
  domain = ".gov.my",
  closeText = ", exit the website immediately even if it looks similar.",
  secureTitle = "Secure websites use HTTPS",
  secureDescription = "Look for a lock (",
  orText = ") or ",
  protocol = "https://",
  precautionText = " as an added precaution. If not present, do not share any sensitive information.",
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

  return (
    <div className="bg-bg-washed print:hidden" data-nosnippet>
      <details id="Masthead" className="group">
        <summary className="block cursor-pointer list-none py-2.5 outline-none sm:py-1">
          <div className="px-4.5 mx-auto flex max-w-[1280px] items-center gap-1.5 text-sm/4 max-sm:justify-between md:px-6">
            <OfficialIndicator text={officialText} />
            <IdentificationToggle text={identifyText} />
          </div>
        </summary>
        <div className="container mx-auto max-w-[1280px]">
          <div className="gap-4.5 pt-4.5 grid grid-cols-1 pb-6 pl-6 sm:grid-cols-2 sm:gap-6 sm:pb-8 sm:pt-6">
            <span className="text-primary-600 static text-sm sm:hidden">
              {identifyText}
            </span>
            <OfficialInfo
              title={officialTitle}
              description={officialDescription}
              domain={domain}
              closeText={closeText}
            />
            <SecureInfo
              title={secureTitle}
              description={secureDescription}
              orText={orText}
              protocol={protocol}
              precautionText={precautionText}
            />
          </div>
        </div>
      </details>
    </div>
  );
};

// Story Exports
export const CompleteMasthead: React.FC = () => {
  return <Masthead />;
};

export default Masthead;
