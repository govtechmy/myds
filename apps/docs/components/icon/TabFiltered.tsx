"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@govtechmy/myds-react/tabs";
import { clx } from "@govtechmy/myds-react/utils";
import ResultMap from "./ResultMap";
import { IconData } from "./IconDataList";
import { useContext } from "react";
import { SearchContext } from "./SearchProvider";

export default function TabFiltered() {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error("SearchContext must be used within a SearchProvider");
  }

  const { results } = searchContext;

  return (
    <div className="w-full">
      <Tabs defaultValue="2" size="medium" variant="pill">
        <div className="flex h-[46px] justify-center">
          <TabsList
            width="full"
            className={clx(
              "no-scrollbar h-full flex-grow items-center justify-center overflow-x-scroll scroll-smooth text-nowrap max-md:justify-start",
            )}
          >
            <div className="w-1 shrink-0"></div>
            <TabsTrigger
              className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
              value="1"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
              value="2"
            >
              Generic
            </TabsTrigger>
            <TabsTrigger
              className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
              value="3"
            >
              Filled
            </TabsTrigger>
            <TabsTrigger
              className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
              value="4"
            >
              WYSIWYG
            </TabsTrigger>
            <TabsTrigger
              className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
              value="5"
            >
              Social Media
            </TabsTrigger>
            <TabsTrigger
              className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
              value="6"
            >
              Media
            </TabsTrigger>
            <TabsTrigger
              className="before:!static before:!left-0 before:!h-0 before:!w-0 before:bg-transparent before:!content-none before:first-of-type:!block"
              value="7"
            >
              Agency Icon (Legacy)
            </TabsTrigger>
          </TabsList>
        </div>
        <div>
          {(
            [
              results.all,
              results.generic,
              results.filled,
              results.wysiwyg,
              results.socialMedia,
              results.media,
              results.legacyGeneric,
            ] as IconData[][]
          ).map((resultArray, index) => (
            <TabsContent
              key={index}
              className="py-8"
              value={(index + 1).toString()}
            >
              <ResultMap result={resultArray} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
