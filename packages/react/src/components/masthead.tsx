import React, { useEffect } from "react";
import { ChevronDownIcon } from "../icons/chevron-down";
import { Lock2Icon } from "../icons/lock-2";
import SolidLockIcon from "../icons/solid-lock";
import MalaysiaFlagIcon from "../icons/malaysia-flag";
import { GovMyIcon } from "../icons/gov-my";

// Subcomponent for the official website indicator
export const OfficialIndicator = ({
  text = "Official Malaysia Government Website",
}) => (
  <div className="flex select-none items-center gap-2">
    <MalaysiaFlagIcon />
    <span className="text-txt-black-900">{text}</span>
  </div>
);

// Subcomponent for the identification toggle
export const IdentificationToggle = ({ text = "Here's how you know" }) => (
  <div className="max-sm:bg-bg-washed text-primary-600 flex items-center gap-0.5 max-sm:rounded-md max-sm:px-1">
    <span className="hidden select-none tracking-[-0.01em] sm:block">
      {text}
    </span>
    <ChevronDownIcon className="size-4 transition group-open:rotate-180" />
  </div>
);

// Subcomponent for the official website information
export const OfficialInfo = ({
  title = "Official Malaysia Government Platform",
  description = "Official government websites end with",
  domain = ".gov.my",
  closeText = ". Close this site if the URL is different.",
}) => (
  <div className="flex gap-3">
    <GovMyIcon className="text-txt-black-500 shrink-0" />
    <div className="space-y-1.5">
      <p className="font-medium max-sm:text-sm">{title}</p>
      <p className="text-txt-black-700 max-w-prose text-balance text-sm">
        {description}
        <span className="font-semibold">{domain}</span>
        {closeText}
      </p>
    </div>
  </div>
);

// Subcomponent for the secure connection information
export const SecureInfo = ({
  title = "Secure Connection",
  description = "Look for a lock icon",
  orText = " or ",
  protocol = "https://",
  precautionText = " in your browser's address bar before sharing any information.",
}) => (
  <div className="flex gap-3">
    <Lock2Icon className="text-txt-black-500 shrink-0" />
    <div className="space-y-1.5">
      <p className="font-medium max-sm:text-sm">{title}</p>
      <div className="text-txt-black-700 max-w-prose text-balance text-sm">
        {description}{" "}
        <SolidLockIcon className="-ml-[3px] mb-0.5 mr-px inline size-3.5" />
        {orText}
        <span className="font-semibold">{protocol}</span>
        {precautionText}
      </div>
    </div>
  </div>
);

export const Masthead = ({
  officialText = "Official Malaysia Government Website",
  identifyText = "Here's how you know",
  officialTitle = "Official government websites end with .gov.my",
  officialDescription = "If the link does not end with ",
  domain = ".gov.my, ",
  closeText = "exit the website immediately even if it looks similar.",
  secureTitle = "Secure websites use HTTPS",
  secureDescription = "Look for a lock (",
  orText = ") or ",
  protocol = "https://",
  precautionText = " as an added precaution. If not present, do not share any sensitive information.",
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const details = document.getElementById("Masthead") as HTMLDetailsElement;
      if (
        event.altKey &&
        (event.metaKey || event.ctrlKey) &&
        event.key === "Enter"
      ) {
        event.preventDefault();
        details.open = !details.open;
      }
      // Check if 'CMD + K' or 'Ctrl + K' key combination is pressed
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-bg-washed print:hidden" data-nosnippet>
      <details id="Masthead" className="group peer max-w-full overflow-hidden">
        <summary className="block cursor-pointer list-none py-2.5 outline-none sm:py-1">
          <div className="px-4.5 mx-auto flex max-w-[1280px] items-center gap-1.5 text-sm/4 max-sm:justify-between md:px-6">
            <OfficialIndicator text={officialText} />
            <IdentificationToggle text={identifyText} />
          </div>
        </summary>
      </details>
      <div className="max-h-0 max-w-full transform-gpu overflow-hidden opacity-0 transition-[max-height,opacity] duration-300 ease-in-out peer-open:max-h-96 peer-open:opacity-100 peer-open:duration-200 motion-reduce:transition-none">
        <div className="gap-4.5 pt-4.5 container grid grid-cols-1 pb-6 pl-6 sm:grid-cols-2 sm:gap-6 sm:pb-8 sm:pt-6">
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
    </div>
  );
};
