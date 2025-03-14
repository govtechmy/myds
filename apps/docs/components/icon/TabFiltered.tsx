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

interface resultsProps {
  all: IconData[];
  generic: IconData[];
  filled: IconData[];
  wysiwyg: IconData[];
  socialMedia: IconData[];
  media: IconData[];
  legacyGeneric: IconData[];
}

export default function TabFiltered() {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error("Hello must be used within a SearchProvider");
  }

  const { results } = searchContext;

  return (
    <div className="w-full">
      <Tabs defaultValue="2" size="medium" variant="pill">
        <div className="flex h-[60px] justify-center">
          <TabsList
            width="full"
            className={clx(
              "no-scrollbar h-full flex-grow justify-center overflow-y-clip overflow-x-scroll scroll-smooth text-nowrap",
            )}
          >
            <div className="w-1 shrink-0"></div>
            <TabsTrigger value="1">All</TabsTrigger>
            <TabsTrigger value="2">Generic</TabsTrigger>
            <TabsTrigger value="3">Filled</TabsTrigger>
            <TabsTrigger value="4">WYSIWYG</TabsTrigger>
            <TabsTrigger value="5">Social Media</TabsTrigger>
            <TabsTrigger value="6">Media</TabsTrigger>
            <TabsTrigger value="7">Agency Icon (Legacy)</TabsTrigger>
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
              className="py-6"
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
