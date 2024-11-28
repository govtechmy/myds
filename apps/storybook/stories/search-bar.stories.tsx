import type { Meta, StoryObj } from "@storybook/react";
import { createRender } from "../utils";
import {
  SearchBar,
  SearchBarInput,
  SearchBarClearButton,
  SearchBarInputContainer,
  SearchBarSearchButton,
  SearchBarResultsDropdown,
  SearchBarResultsList,
  SearchBarResultsItem,
  SearchBarResultsGroup,
  SearchBarHint,
} from "@myds/react/search-bar";
import { ComponentProps, useEffect, useRef, useState } from "react";
import {
  ChevronRightIcon,
  MoneyIcon,
  StarIcon,
  TrophyIcon,
  UserIcon,
} from "@myds/react/icon";
import { Pill } from "@myds/react/pill";

/**
 * ### Overview
 * Allow users to enter a query or keyword to search through content within a website.
 *
 * ### Usage
 * ```tsx
 * import {
 *   SearchBar,
 *   SearchBarInput,
 *   SearchBarClearButton,
 *   SearchBarInputContainer,
 *   SearchBarSearchButton,
 *   SearchBarResultsDropdown,
 *   SearchBarResultsList,
 *   SearchBarResultsItem,
 *   SearchBarResultsGroup,
 *   SearchBarHint,
 * } from "@myds/react/search-bar";
 *
 * <SearchBar size="large">
 *   <SearchBarInputContainer>
 *     <SearchBarInput value={query} onValueChange={setQuery} />
 *     <SearchBarHint>
 *       Press <Pill size="small">/</Pill> to search
 *     </SearchBarHint>
 *     <SearchBarClearButton />
 *     <SearchBarSearchButton />
 *   </SearchBarInputContainer>
 *   <SearchBarResultsDropdown>
 *     <SearchBarResultsList>
 *       <SearchBarResultsItem
 *         value="foo"
 *         onSelect={(item) => console.log(item)}
 *       >
 *         Foo
 *       </SearchBarResultsItem>
 *       <SearchBarResultsItem
 *         value="bar"
 *         onSelect={(item) => console.log(item)}
 *       >
 *         Bar
 *       </SearchBarResultsItem>
 *     </SearchBarResultsList>
 *   </SearchBarResultsDropdown>
 * </SearchBar>
 * ```
 */
const meta = {
  title: "@myds/react/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: { size: "large" },
  argTypes: {
    size: {
      table: {
        type: {
          summary: "enum",
        },
        category: "myds API",
      },
      description: "Available search bar sizes",
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoBasicSearchBar = (props: ComponentProps<typeof SearchBar>) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        inputRef.current?.focus();
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputRef]);

  const results = notableMalaysians.filter((person) =>
    person.name.toLowerCase().includes(query.toLocaleLowerCase()),
  );

  return (
    <SearchBar {...props}>
      <SearchBarInputContainer>
        <SearchBarInput
          ref={inputRef}
          placeholder="Search by name"
          value={query}
          onValueChange={setQuery}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        />
        {!hasFocus && props.size === "large" && (
          <SearchBarHint>
            Press <Pill size="small">/</Pill> to search
          </SearchBarHint>
        )}
        <SearchBarClearButton onClick={() => setQuery("")} />
        <SearchBarSearchButton />
      </SearchBarInputContainer>
      <SearchBarResultsDropdown>
        <SearchBarResultsList className="max-h-[400px] overflow-y-scroll">
          {!results.length && (
            <p className="text-txt-black-900 text-center">No results found</p>
          )}
          {results.map((item) => (
            <SearchBarResultsItem
              key={item.name}
              value={item.name}
              onSelect={() => {
                alert(`${item.name} - ${item.note}`);
              }}
            >
              <span className="bg-primary-50 text-txt-primary rounded-full p-px">
                <UserIcon className="size-4" />
              </span>
              <p className="line-clamp-1 flex-1">
                {item.name}{" "}
                <span className="text-txt-black-500 text-xs">{item.note}</span>
              </p>
              <ChevronRightIcon />
            </SearchBarResultsItem>
          ))}
        </SearchBarResultsList>
      </SearchBarResultsDropdown>
    </SearchBar>
  );
};

const DemoGroupedSearchBar = (props: ComponentProps<typeof SearchBar>) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        inputRef.current?.focus();
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputRef]);

  const results = notableMalaysians.filter((person) =>
    person.name.toLowerCase().includes(query.toLocaleLowerCase()),
  );

  const groupedResults: Record<string, typeof results> = {};
  for (const item of results) {
    const group = groupedResults[item.field];
    if (!group) {
      groupedResults[item.field] = [item];
    } else {
      group.push(item);
    }
  }

  return (
    <SearchBar {...props}>
      <SearchBarInputContainer>
        <SearchBarInput
          ref={inputRef}
          placeholder="Search by name"
          value={query}
          onValueChange={setQuery}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        />
        {!hasFocus && props.size === "large" && (
          <SearchBarHint>
            Press <Pill size="small">/</Pill> to search
          </SearchBarHint>
        )}
        <SearchBarClearButton onClick={() => setQuery("")} />
        <SearchBarSearchButton />
      </SearchBarInputContainer>
      <SearchBarResultsDropdown>
        <SearchBarResultsList className="max-h-[400px] overflow-y-scroll">
          {!results.length && (
            <p className="text-txt-black-900 text-center">No results found</p>
          )}
          {Object.entries(groupedResults).map(([group, items]) => (
            <SearchBarResultsGroup key={group} heading={group}>
              {items.map((item) => (
                <SearchBarResultsItem
                  key={item.name}
                  value={item.name}
                  onSelect={() => {
                    alert(`${item.name} - ${item.note}`);
                  }}
                >
                  <span className="bg-primary-50 text-txt-primary rounded-full p-px">
                    {group === "Arts" ? (
                      <StarIcon className="size-4" />
                    ) : group === "Sports" ? (
                      <TrophyIcon className="size-4" />
                    ) : (
                      <MoneyIcon className="size-4" />
                    )}
                  </span>
                  <p className="line-clamp-1 flex-1">
                    {item.name}{" "}
                    <span className="text-txt-black-500 text-xs">
                      {item.note}
                    </span>
                  </p>
                  <ChevronRightIcon />
                </SearchBarResultsItem>
              ))}
            </SearchBarResultsGroup>
          ))}
        </SearchBarResultsList>
      </SearchBarResultsDropdown>
    </SearchBar>
  );
};

export const Light = createRender((args: Story["args"]) => {
  return <DemoBasicSearchBar {...args} />;
}, "light");

export const LightGrouped = createRender((args: Story["args"]) => {
  return <DemoGroupedSearchBar {...args} />;
}, "light");

export const Dark = createRender((args: Story["args"]) => {
  return <DemoBasicSearchBar {...args} className="dark" />;
}, "dark");

export const DarkGrouped = createRender((args: Story["args"]) => {
  return <DemoGroupedSearchBar {...args} className="dark" />;
}, "dark");

const notableMalaysians = [
  // Arts
  {
    name: "Michelle Yeoh",
    field: "Arts",
    note: "Internationally acclaimed actress",
  },
  {
    name: "P. Ramlee",
    field: "Arts",
    note: "Iconic actor, director, and musician",
  },
  {
    name: "Siti Nurhaliza",
    field: "Arts",
    note: "Award-winning singer and songwriter",
  },
  {
    name: "Yuna",
    field: "Arts",
    note: "Internationally recognized singer-songwriter",
  },
  {
    name: "Namewee",
    field: "Arts",
    note: "Controversial filmmaker and musician",
  },
  { name: "Sheila Majid", field: "Arts", note: "Jazz queen of Malaysia" },
  { name: "M. Nasir", field: "Arts", note: "Musician, composer, and actor" },
  {
    name: "Afdlin Shauki",
    field: "Arts",
    note: "Actor, director, and comedian",
  },
  { name: "Adibah Noor", field: "Arts", note: "Singer and actress" },
  { name: "Zang Toi", field: "Arts", note: "World-renowned fashion designer" },
  { name: "Harith Iskander", field: "Arts", note: "Comedian and actor" },
  {
    name: "Lisa Surihani",
    field: "Arts",
    note: "Award-winning actress and TV host",
  },
  {
    name: "Bront Palarae",
    field: "Arts",
    note: "Critically acclaimed actor and filmmaker",
  },
  { name: "Erra Fazira", field: "Arts", note: "Actress and singer" },
  { name: "Faizal Tahir", field: "Arts", note: "Singer and performer" },
  { name: "Hannah Tan", field: "Arts", note: "Singer-songwriter and actress" },
  {
    name: "Jaclyn Victor",
    field: "Arts",
    note: "Winner of the first Malaysian Idol",
  },
  {
    name: "Shila Amzah",
    field: "Arts",
    note: "Award-winning singer and songwriter",
  },
  { name: "Fazura", field: "Arts", note: "Actress, singer, and entrepreneur" },
  { name: "Henry Golding", field: "Arts", note: "Hollywood actor and TV host" },

  // Business
  { name: "Tony Fernandes", field: "Business", note: "Founder of AirAsia" },
  {
    name: "Robert Kuok",
    field: "Business",
    note: "Malaysia's richest man, involved in sugar and palm oil",
  },
  { name: "Vincent Tan", field: "Business", note: "Founder of Berjaya Group" },
  {
    name: "Francis Yeoh",
    field: "Business",
    note: "Managing Director of YTL Corporation",
  },
  { name: "Jimmy Choo", field: "Business", note: "World-famous shoe designer" },
  {
    name: "Tan Sri Syed Mokhtar Al-Bukhary",
    field: "Business",
    note: "Prominent entrepreneur and philanthropist",
  },
  {
    name: "Loke Wan Tho",
    field: "Business",
    note: "Co-founder of Cathay Organisation",
  },
  {
    name: "Lim Goh Tong",
    field: "Business",
    note: "Founder of Genting Highlands",
  },
  {
    name: "Quek Leng Chan",
    field: "Business",
    note: "Co-founder of Hong Leong Group",
  },
  {
    name: "Tan Sri Loh Boon Siew",
    field: "Business",
    note: "Founder of Boon Siew Honda",
  },
  {
    name: "Ananda Krishnan",
    field: "Business",
    note: "Telecommunications tycoon and founder of Maxis",
  },
  {
    name: "Tan Sri Michelle Yeoh",
    field: "Business",
    note: "Entrepreneur in various industries",
  },
  {
    name: "Dato' Seri Farah Khan",
    field: "Business",
    note: "Founder of luxury fashion brand The Melium Group",
  },
  { name: "Dato' Vida", field: "Business", note: "Cosmetics entrepreneur" },
  {
    name: "Neelofa",
    field: "Business",
    note: "Actress turned entrepreneur and co-founder of Naelofar Hijab",
  },
  {
    name: "Dato' Sri Aliff Syukri",
    field: "Business",
    note: "Founder of D'Herbs Health products",
  },
  {
    name: "Cheah Cheng Hye",
    field: "Business",
    note: "Co-founder of Value Partners Group",
  },
  {
    name: "Tan Sri Dr. Jeffrey Cheah",
    field: "Business",
    note: "Founder of Sunway Group",
  },

  // Sports
  {
    name: "Nicol David",
    field: "Sports",
    note: "World champion squash player",
  },
  {
    name: "Lee Chong Wei",
    field: "Sports",
    note: "Olympic silver medalist in badminton",
  },
  {
    name: "Pandelela Rinong",
    field: "Sports",
    note: "Olympic medalist in diving",
  },
  { name: "Cheong Jun Hoong", field: "Sports", note: "World champion diver" },
  {
    name: "Khairul Fahmi Che Mat",
    field: "Sports",
    note: "Malaysian football goalkeeper",
  },
  {
    name: "Datuk Azizulhasni Awang",
    field: "Sports",
    note: "Olympic medalist in track cycling",
  },
  {
    name: "Tan Boon Heong",
    field: "Sports",
    note: "Professional badminton player",
  },
  {
    name: "Goh Liu Ying",
    field: "Sports",
    note: "Olympic silver medalist in badminton",
  },
  {
    name: "Chan Peng Soon",
    field: "Sports",
    note: "Olympic silver medalist in badminton",
  },
  { name: "Shalin Zulkifli", field: "Sports", note: "Champion bowler" },
  {
    name: "Mokhtar Dahari",
    field: "Sports",
    note: "Legendary Malaysian footballer",
  },
  { name: "Safee Sali", field: "Sports", note: "Professional footballer" },
  {
    name: "Soh Wooi Yik",
    field: "Sports",
    note: "Olympic silver medalist in badminton",
  },
  {
    name: "Aaron Chia",
    field: "Sports",
    note: "World champion badminton doubles player",
  },
  {
    name: "Nur Dhabitah Sabri",
    field: "Sports",
    note: "Diving prodigy and Olympian",
  },
  {
    name: "Syakilla Salni Jefry Krisnan",
    field: "Sports",
    note: "Karate gold medalist",
  },
  {
    name: "Faiz Subri",
    field: "Sports",
    note: "Puskas Award-winning footballer",
  },
  {
    name: "Siti Noor Radiah",
    field: "Sports",
    note: "Paralympian bronze medalist in long jump",
  },
  {
    name: "Ziyad Zolkefli",
    field: "Sports",
    note: "Paralympic gold medalist in shot put",
  },
];
