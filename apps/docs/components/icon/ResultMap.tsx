import { Button } from "@govtechmy/myds-react/button";

import { useToast } from "@govtechmy/myds-react/hooks";
import { IconDataList } from "./IconDataList";

export default function ResultMap({ result }: { result: IconDataList }) {
  const { toast } = useToast();

  return (
    <div className="grid grid-cols-8 gap-2">
      {result.map((icon, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <div className="relative flex h-[140px] w-full flex-col items-center justify-center rounded-xl border border-black shadow-md">
            <div className="flex items-center justify-center">{icon.svg}</div>
            <div className="absolute w-full opacity-0 hover:opacity-100">
              <Button
                onClick={async () => {
                  const response = await fetch(
                    `/assets/icons/${icon.name}.svg`,
                  );
                  const filecontent = await response.text();

                  navigator.clipboard.writeText(filecontent || "");
                  toast({
                    variant: "message",
                    title: "Copied!",
                    description: "You have copied the svg",
                  });
                }}
                className="text-txt-black-500 flex h-[70px] w-full items-center justify-center rounded-b-none rounded-t-lg border-0 bg-transparent hover:bg-gray-300/70 dark:text-[#303030]"
              >
                Copy SVG
              </Button>
              <Button
                onClick={async () => {
                  const response = await fetch(
                    `/assets/icons/${icon.name}.svg`,
                  );
                  const filecontent = await response.text();

                  navigator.clipboard.writeText(filecontent || "");
                  toast({
                    variant: "message",
                    title: "Copied!",
                    description: "You have copied the svg",
                  });
                }}
                className="text-txt-black-500 flex h-[70px] w-full items-center justify-center rounded-b-lg rounded-t-none border-0 bg-transparent hover:bg-gray-300/70 dark:text-[#303030]"
              >
                Copy JSX
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
