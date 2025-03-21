import { Button } from "@govtechmy/myds-react/button";
import { IconDataList } from "./IconDataList";
import { clx } from "@govtechmy/myds-react/utils";
import { useState } from "react";

export default function ResultMap({ result }: { result: IconDataList }) {
  const [copiedSVGIndex, setCopiedSVGIndex] = useState<number | null>(null);
  const [copiedJSXIndex, setCopiedJSXIndex] = useState<number | null>(null);

  const handleCopy = async (
    iconName: string,
    index: number,
    type: "svg" | "jsx",
  ) => {
    const response = await fetch(`/assets/icons/${iconName}.svg`);
    const filecontent = await response.text();
    navigator.clipboard.writeText(filecontent || "");

    if (type === "svg") {
      setCopiedSVGIndex(index);
      setTimeout(() => setCopiedSVGIndex(null), 2000);
    } else {
      setCopiedJSXIndex(index);
      setTimeout(() => setCopiedJSXIndex(null), 2000);
    }
  };

  return (
    <div className={clx("grid gap-2", "icon-custom-grid-cols")}>
      {result.map((icon, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <div className="relative flex h-[140px] w-full flex-col items-center justify-center rounded-xl border border-black shadow-md">
            <div className="flex items-center justify-center">{icon.svg}</div>
            <div className="absolute w-full opacity-0 hover:opacity-100">
              <Button
                onClick={() => handleCopy(icon.name ?? "", index, "svg")}
                className="text-txt-black-500 flex h-[70px] w-full items-center justify-center rounded-b-none rounded-t-lg border-0 bg-transparent hover:bg-gray-300/70 dark:text-[#303030]"
              >
                {copiedSVGIndex === index ? "Copied!" : "Copy SVG"}
              </Button>
              <Button
                onClick={() => handleCopy(icon.name ?? "", index, "jsx")}
                className="text-txt-black-500 flex h-[70px] w-full items-center justify-center rounded-b-lg rounded-t-none border-0 bg-transparent hover:bg-gray-300/70 dark:text-[#303030]"
              >
                {copiedJSXIndex === index ? "Copied!" : "Copy JSX"}
              </Button>
            </div>
          </div>
          <div className="text-txt-black-500 flex items-center justify-center truncate py-2 text-sm hover:line-clamp-2">
            {icon.name}
          </div>
        </div>
      ))}
    </div>
  );
}
