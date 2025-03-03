import {
  SearchBar,
  SearchBarInput,
  SearchBarInputContainer,
  SearchBarSearchButton,
  SearchBarClearButton,
  SearchBarHint,
} from "@govtechmy/myds-react/search-bar";
import { Pill } from "@govtechmy/myds-react/pill";
import { useEffect, useRef, useState } from "react";
import { iconDataList } from "./IconDataList";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@govtechmy/myds-react/tabs";
import { PlaceholderIcon } from "@govtechmy/myds-react/icon";

export default function SearchBarIcons() {
  const [hasFocus, setHasFocus] = useState(false);
  const [query, setQuery] = useState("");

  const filterIcons = (query: any, conditions: any) => {
    return iconDataList.filter(({ type, name }) => {
      const iconData = `${type} ${name}`.toLowerCase();
      const iconType = type.toLowerCase();
      return (
        iconData.includes(query.toLowerCase()) &&
        conditions.every((condition: (arg0: string) => any) =>
          condition(iconType),
        )
      );
    });
  };

  const result1 = filterIcons(query, [() => true]);
  const result2 = filterIcons(query, [
    (iconType: string | string[]) => !iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("generic"),
    (iconType: string | string[]) => !iconType.includes("filled"),
  ]);
  const result3 = filterIcons(query, [
    (iconType: string | string[]) => !iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("filled"),
  ]);
  const result4 = filterIcons(query, [
    (iconType: string | string[]) => !iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("wysiwyg"),
  ]);
  const result5 = filterIcons(query, [
    (iconType: string | string[]) => !iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("social media"),
  ]);
  const result6 = filterIcons(query, [
    (iconType: string | string[]) => !iconType.includes("legacy"),
    (iconType: string | string[]) => !iconType.includes("social"),
    (iconType: string | string[]) => iconType.includes("media"),
  ]);
  const result7 = filterIcons(query, [
    (iconType: string | string[]) => iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("generic"),
  ]);
  const result8 = filterIcons(query, [
    (iconType: string | string[]) => iconType.includes("legacy"),
    (iconType: string | string[]) => iconType.includes("borderless"),
  ]);

  const inputRef = useFocusOnKeyPress<HTMLInputElement>("/", hasFocus);

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
            onValueChange={setQuery}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
          />
          {query && <SearchBarClearButton onClick={() => setQuery("")} />}
          <SearchBarSearchButton />
          {!hasFocus && (
            <SearchBarHint className="hidden lg:flex">
              Press <Pill size="small">/</Pill> to search
            </SearchBarHint>
          )}
        </SearchBarInputContainer>
      </SearchBar>

      <div className="my-8 flex space-x-2">
        <PlaceholderIcon></PlaceholderIcon>
        <Tabs defaultValue="2" size="medium" variant="line">
          <TabsList>
            <TabsTrigger value="1">All</TabsTrigger>
            <TabsTrigger value="2">Generic</TabsTrigger>
            <TabsTrigger value="3">Filled</TabsTrigger>
            <TabsTrigger value="4">WYSIWYG</TabsTrigger>
            <TabsTrigger value="5">Social Media</TabsTrigger>
            <TabsTrigger value="6">Media</TabsTrigger>
            <TabsTrigger value="7">Legacy: Generic</TabsTrigger>
            <TabsTrigger value="8">Legacy: Borderless</TabsTrigger>
          </TabsList>
          {[...Array(8)].map((_, index) => (
            <TabsContent
              key={index + 1}
              value={(index + 1).toString()}
              className="py-6"
            >
              <pre>
                {JSON.stringify(
                  { [`result${index + 1}`]: eval(`result${index + 1}`) },
                  null,
                  2,
                )}
              </pre>
              <div className="bg-bg-danger-200">
                {result1.map((item, index) => (
                  <div key={index}>
                    <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-xl border border-black bg-white p-4 shadow-md">
                      <div>{item.name}</div>
                      <div className="border-bg-black-900 flex h-10 w-10 items-center justify-center border">
                        {item.svg}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
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
  }, [isFocused, ref]);

  return ref;
}
