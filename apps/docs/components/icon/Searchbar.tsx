// // "use client";

// // import {
// //   SearchBar,
// //   SearchBarInput,
// //   SearchBarInputContainer,
// //   SearchBarSearchButton,
// //   SearchBarClearButton,
// //   SearchBarHint,
// // } from "@govtechmy/myds-react/search-bar";
// // import { Pill } from "@govtechmy/myds-react/pill";
// // import { useEffect, useRef, useState } from "react";
// // import {
// //   Tabs,
// //   TabsContent,
// //   TabsList,
// //   TabsTrigger,
// // } from "@govtechmy/myds-react/tabs";
// // import type { IconData } from "./IconDataList";
// // import ResultMap from "./ResultMap";
// // import { clx } from "@govtechmy/myds-react/utils";

// // type Props = {
// //   iconDataList: IconData[];
// // };

// // export default function SearchBarIcons({ iconDataList }: Props) {
// //   const [hasFocus, setHasFocus] = useState(false);
// //   const [query, setQuery] = useState("");
// //   const filterIcons = (query: any, conditions: any) => {
// //     return iconDataList.filter(({ type, filename }) => {
// //       const iconData = `${type} ${filename}`.toLowerCase();
// //       const iconType = type.toLowerCase();
// //       return (
// //         iconData.includes(query.toLowerCase()) &&
// //         conditions.every((condition: (arg0: string) => any) =>
// //           condition(iconType),
// //         )
// //       );
// //     });
// //   };

// //   const resultAll = filterIcons(query, [() => true]);
// //   const resultGeneric = filterIcons(query, [
// //     (iconType: string | string[]) => !iconType.includes("legacy"),
// //     (iconType: string | string[]) => iconType.includes("generic"),
// //     (iconType: string | string[]) => !iconType.includes("filled"),
// //   ]);
// //   const resultFilled = filterIcons(query, [
// //     (iconType: string | string[]) => !iconType.includes("legacy"),
// //     (iconType: string | string[]) => iconType.includes("filled"),
// //   ]);
// //   const resultWYSIWYG = filterIcons(query, [
// //     (iconType: string | string[]) => !iconType.includes("legacy"),
// //     (iconType: string | string[]) => iconType.includes("wysiwyg"),
// //   ]);
// //   const resultSocialMedia = filterIcons(query, [
// //     (iconType: string | string[]) => !iconType.includes("legacy"),
// //     (iconType: string | string[]) => iconType.includes("social media"),
// //   ]);
// //   const resultMedia = filterIcons(query, [
// //     (iconType: string | string[]) => !iconType.includes("legacy"),
// //     (iconType: string | string[]) => !iconType.includes("social"),
// //     (iconType: string | string[]) => iconType.includes("media"),
// //   ]);
// //   const resultLegacyGeneric = filterIcons(query, [
// //     (iconType: string | string[]) => iconType.includes("legacy"),
// //   ]);

// //   const inputRef = useFocusOnKeyPress<HTMLInputElement>("/", hasFocus);
// //   const results = [
// //     resultAll,
// //     resultGeneric,
// //     resultFilled,
// //     resultWYSIWYG,
// //     resultSocialMedia,
// //     resultMedia,
// //     resultLegacyGeneric,
// //   ];

// //   return (
// //     <div>
// //       <SearchBar
// //         size="large"
// //         onBlur={(e) => {
// //           const blurredByChild = e.currentTarget.contains(e.relatedTarget);
// //           if (blurredByChild) return;
// //           setHasFocus(false);
// //         }}
// //       >
// //         <SearchBarInputContainer>
// //           <SearchBarInput
// //             ref={inputRef}
// //             placeholder="Search by name"
// //             value={query}
// //             onValueChange={setQuery}
// //             onFocus={() => setHasFocus(true)}
// //             onBlur={() => setHasFocus(false)}
// //           />
// //           {query && <SearchBarClearButton onClick={() => setQuery("")} />}
// //           {!hasFocus && (
// //             <SearchBarHint className="hidden sm:flex">
// //               Press <Pill size="small">/</Pill> to search
// //             </SearchBarHint>
// //           )}
// //           <SearchBarSearchButton />
// //         </SearchBarInputContainer>
// //       </SearchBar>

// //       {/* <Tabs defaultValue="2" size="medium" variant="line">
// //         <div className="border-otl-gray-200 h-[60px] border-b-2">
// //           <TabsList
// //             width="full"
// //             className={clx(
// //               "no-scrollbar h-full flex-grow overflow-y-clip overflow-x-scroll scroll-smooth text-nowrap",
// //               "before:-bottom-0 before:contents before:h-0 before:bg-transparent",
// //             )}
// //           >
// //             <div className="w-1 shrink-0"></div>
// //             <TabsTrigger className="before:-bottom-[9px]" value="1">
// //               All
// //             </TabsTrigger>
// //             <TabsTrigger className="before:-bottom-[9px]" value="2">
// //               Generic
// //             </TabsTrigger>
// //             <TabsTrigger className="before:-bottom-[9px]" value="3">
// //               Filled
// //             </TabsTrigger>
// //             <TabsTrigger className="before:-bottom-[9px]" value="4">
// //               WYSIWYG
// //             </TabsTrigger>
// //             <TabsTrigger className="before:-bottom-[9px]" value="5">
// //               Social Media
// //             </TabsTrigger>
// //             <TabsTrigger className="before:-bottom-[9px]" value="6">
// //               Media
// //             </TabsTrigger>
// //             <TabsTrigger className="before:-bottom-[9px]" value="7">
// //               Agency Icon (Legacy)
// //             </TabsTrigger>
// //           </TabsList>
// //         </div>

// //         {results.map((result, index) => (
// //           <TabsContent
// //             key={index}
// //             className="py-6"
// //             value={(index + 1).toString()}
// //           >
// //             <ResultMap result={result} />
// //           </TabsContent>
// //         ))}
// //       </Tabs> */}
// //     </div>
// //   );
// // }

// // function useFocusOnKeyPress<T extends HTMLElement>(
// //   key: string,
// //   isFocused: boolean,
// // ) {
// //   const ref = useRef<T>(null);

// //   useEffect(() => {
// //     const handleKeyDown = (e: KeyboardEvent) => {
// //       if (!isFocused && e.key === key) {
// //         ref.current?.focus();
// //         e.preventDefault();
// //       }
// //     };
// //     document.addEventListener("keydown", handleKeyDown);
// //     return () => {
// //       document.removeEventListener("keydown", handleKeyDown);
// //     };
// //   }, [isFocused, ref]);

// //   return ref;
// // }

// "use client";

// import { useContext, useRef, useState, useEffect } from "react";
// import {
//   SearchBar,
//   SearchBarInput,
//   SearchBarInputContainer,
//   SearchBarSearchButton,
//   SearchBarClearButton,
//   SearchBarHint,
// } from "@govtechmy/myds-react/search-bar";
// import { Pill } from "@govtechmy/myds-react/pill";
// import type { IconData } from "./IconDataList";
// import { SearchContext } from "./SearchProvider";

// export default function SearchBarIcons({
//   iconDataList,
// }: {
//   iconDataList: IconData[];
// }) {
//   const searchContext = useContext(SearchContext);
//   if (!searchContext) {
//     throw new Error("SearchBarIcons must be used within a SearchProvider");
//   }

//   const { query, setQuery, setResults } = searchContext;
//   const [hasFocus, setHasFocus] = useState(false);
//   const inputRef = useFocusOnKeyPress<HTMLInputElement>("/", hasFocus);

//   // Filtering logic remains inside the component
//   useEffect(() => {
//     const filterIcons = (
//       query: string,
//       conditions: ((iconType: string) => boolean)[],
//     ) => {
//       return iconDataList.filter(({ type, filename }) => {
//         const iconData = `${type} ${filename}`.toLowerCase();
//         const iconType = type.toLowerCase();
//         return (
//           iconData.includes(query.toLowerCase()) &&
//           conditions.every((condition) => condition(iconType))
//         );
//       });
//     };

//     const resultAll = filterIcons(query, [() => true]);
//     const resultGeneric = filterIcons(query, [
//       (iconType) => !iconType.includes("legacy"),
//       (iconType) => iconType.includes("generic"),
//       (iconType) => !iconType.includes("filled"),
//     ]);
//     const resultFilled = filterIcons(query, [
//       (iconType) => !iconType.includes("legacy"),
//       (iconType) => iconType.includes("filled"),
//     ]);
//     const resultWYSIWYG = filterIcons(query, [
//       (iconType) => !iconType.includes("legacy"),
//       (iconType) => iconType.includes("wysiwyg"),
//     ]);
//     const resultSocialMedia = filterIcons(query, [
//       (iconType) => !iconType.includes("legacy"),
//       (iconType) => iconType.includes("social media"),
//     ]);
//     const resultMedia = filterIcons(query, [
//       (iconType) => !iconType.includes("legacy"),
//       (iconType) => !iconType.includes("social"),
//       (iconType) => iconType.includes("media"),
//     ]);
//     const resultLegacyGeneric = filterIcons(query, [
//       (iconType) => iconType.includes("legacy"),
//     ]);

//     // Store the results in context so other components can access them
//     setResults({
//       all: resultAll,
//       generic: resultGeneric,
//       filled: resultFilled,
//       wysiwyg: resultWYSIWYG,
//       socialMedia: resultSocialMedia,
//       media: resultMedia,
//       legacyGeneric: resultLegacyGeneric,
//     });
//   }, [query, iconDataList, setResults]);

//   return (
//     <div>
//       <SearchBar
//         size="large"
//         onBlur={(e) => {
//           const blurredByChild = e.currentTarget.contains(e.relatedTarget);
//           if (blurredByChild) return;
//           setHasFocus(false);
//         }}
//       >
//         <SearchBarInputContainer>
//           <SearchBarInput
//             ref={inputRef}
//             placeholder="Search by name"
//             value={query}
//             onValueChange={(newValue) => setQuery(newValue)}
//             onFocus={() => setHasFocus(true)}
//             onBlur={() => setHasFocus(false)}
//           />
//           {query && <SearchBarClearButton onClick={() => setQuery("")} />}
//           {!hasFocus && (
//             <SearchBarHint className="hidden sm:flex">
//               Press <Pill size="small">/</Pill> to search
//             </SearchBarHint>
//           )}
//           <SearchBarSearchButton />
//         </SearchBarInputContainer>
//       </SearchBar>
//     </div>
//   );
// }

// function useFocusOnKeyPress<T extends HTMLElement>(
//   key: string,
//   isFocused: boolean,
// ) {
//   const ref = useRef<T>(null);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (!isFocused && e.key === key) {
//         ref.current?.focus();
//         e.preventDefault();
//       }
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isFocused]);

//   return ref;
// }
"use client";
import { useContext, useRef, useState, useEffect } from "react";
import {
  SearchBar,
  SearchBarInput,
  SearchBarInputContainer,
  SearchBarSearchButton,
  SearchBarClearButton,
  SearchBarHint,
} from "@govtechmy/myds-react/search-bar";
import { Pill } from "@govtechmy/myds-react/pill";
import type { IconData } from "./IconDataList";
import { SearchContext } from "./SearchProvider";

export default function SearchBarIcons({
  iconDataList,
}: {
  iconDataList: IconData[];
}) {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error("SearchBarIcons must be used within a SearchProvider");
  }

  const { query, setQuery, setResults } = searchContext;
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useFocusOnKeyPress<HTMLInputElement>("/", hasFocus);

  useEffect(() => {
    const filterIcons = (
      query: string,
      conditions: ((iconType: string) => boolean)[],
    ) => {
      return iconDataList.filter(({ type, filename }) => {
        const iconData = `${type} ${filename}`.toLowerCase();
        const iconType = type.toLowerCase();
        return (
          iconData.includes(query.toLowerCase()) &&
          conditions.every((condition) => condition(iconType))
        );
      });
    };

    const resultAll = filterIcons(query, [() => true]);
    const resultGeneric = filterIcons(query, [
      (iconType) => !iconType.includes("legacy"),
      (iconType) => iconType.includes("generic"),
      (iconType) => !iconType.includes("filled"),
    ]);
    const resultFilled = filterIcons(query, [
      (iconType) => !iconType.includes("legacy"),
      (iconType) => iconType.includes("filled"),
    ]);
    const resultWYSIWYG = filterIcons(query, [
      (iconType) => !iconType.includes("legacy"),
      (iconType) => iconType.includes("wysiwyg"),
    ]);
    const resultSocialMedia = filterIcons(query, [
      (iconType) => !iconType.includes("legacy"),
      (iconType) => iconType.includes("social media"),
    ]);
    const resultMedia = filterIcons(query, [
      (iconType) => !iconType.includes("legacy"),
      (iconType) => !iconType.includes("social"),
      (iconType) => iconType.includes("media"),
    ]);
    const resultLegacyGeneric = filterIcons(query, [
      (iconType) => iconType.includes("legacy"),
    ]);

    setResults({
      all: resultAll,
      generic: resultGeneric,
      filled: resultFilled,
      wysiwyg: resultWYSIWYG,
      socialMedia: resultSocialMedia,
      media: resultMedia,
      legacyGeneric: resultLegacyGeneric,
    });
  }, [query, iconDataList, setResults]);

  return (
    <div>
      <SearchBar
        size="large"
        onBlur={(e) => {
          const blurredByChild = e.currentTarget.contains(e.relatedTarget);
          if (blurredByChild) return;
          setHasFocus(false);
        }}
      >
        <SearchBarInputContainer>
          <SearchBarInput
            ref={inputRef}
            placeholder="Search by name"
            value={query}
            onValueChange={(newValue) => setQuery(newValue)}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
          />
          {query && <SearchBarClearButton onClick={() => setQuery("")} />}
          {!hasFocus && (
            <SearchBarHint className="hidden sm:flex">
              Press <Pill size="small">/</Pill> to search
            </SearchBarHint>
          )}
          <SearchBarSearchButton />
        </SearchBarInputContainer>
      </SearchBar>
    </div>
  );
}

function useFocusOnKeyPress<T extends HTMLElement>(
  key: string,
  isFocused: boolean,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFocused && e.key === key) {
        ref.current?.focus();
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFocused]);

  return ref;
}
