"use client";
import { Button } from "@govtechmy/myds-react/button";
import { IconData } from "./IconDataList";
import { FunctionComponent, useContext, useRef, useState } from "react";
import { CopyIcon } from "@govtechmy/myds-react/icon";
import { SearchContext } from "./SearchProvider";

const IconGridItem: FunctionComponent<{ icon: IconData }> = ({ icon }) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!iconRef.current) throw new Error("iconRef not ready");

    navigator.clipboard.writeText(iconRef.current?.innerHTML || "");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex h-[140px] w-full flex-col items-center justify-center rounded-xl border border-black shadow-md">
        <div ref={iconRef} className="flex items-center justify-center">
          {icon.svg}
        </div>
        <div className="absolute h-full w-full opacity-0 hover:opacity-100">
          <Button
            onClick={() => handleCopy()}
            className="text-txt-black-500 flex h-full w-full flex-row-reverse items-start rounded-lg border-0 bg-transparent p-4 hover:bg-gray-50/10 dark:text-[#303030]"
          >
            {isCopied === true ? (
              <span className="rounded-md text-xs font-normal shadow-gray-50">
                Copied!
              </span>
            ) : (
              <div className="rounded-md shadow-gray-50">
                <CopyIcon className="size-4" />
              </div>
            )}
          </Button>
        </div>
      </div>
      <div className="text-txt-black-500 flex items-center justify-center truncate py-2 text-sm hover:line-clamp-2">
        {icon.name}
      </div>
    </div>
  );
};

IconGridItem.displayName = "IconGridItem";

const ResultMap: FunctionComponent = () => {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("SearchContext must be used within a SearchProvider");
  const { result } = context;

  return (
    <div className="icon-custom-grid-cols grid gap-2 py-8">
      {result.map((icon, index) => (
        <IconGridItem key={index} icon={icon} />
      ))}
    </div>
  );
};

ResultMap.displayName = "ResultMap";

export default ResultMap;
