import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectHeader,
  SelectTrigger,
  SelectValue,
  SelectGroupTitle,
  SelectFooter,
} from "@govtechmy/myds-react/select";
import { Input, InputIcon } from "@govtechmy/myds-react/input";
import { SearchIcon } from "../../../packages/react/src/icons/search";
import { Button } from "@govtechmy/myds-react/button";
import { Pill } from "@govtechmy/myds-react/pill";

const CONTENT = (
  <SelectGroup>
    <SelectGroupTitle>Fruits</SelectGroupTitle>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
    <SelectItem value="grapes">Grapes</SelectItem>
    <SelectItem value="pineapple1">Pineapple1</SelectItem>
    <SelectItem value="pineapple2">Pineapple2</SelectItem>
    <SelectItem value="pineapple3">Pineapple3</SelectItem>
    <SelectItem value="pineapple4">Pineapple4</SelectItem>
    <SelectItem value="pineapple5">Pineapple5</SelectItem>
    <SelectItem value="pineapple6">Pineapple6</SelectItem>
    <SelectItem value="pineapple7">Pineapple7</SelectItem>
    <SelectItem value="pineapple8">Pineapple8</SelectItem>
    <SelectItem value="pineapple9">Pineapple9</SelectItem>
  </SelectGroup>
);

/**
 * ### Overview
 *
 * The Select component allows users to choose one or more options from a dropdown list.
 * It supports various configurations including headers, footers, and custom display options.
 *
 * > Pilih buah dalam Select,
 * > Banyak pilihan, senang hati,
 * > Header, footer, semua lengkap,
 * > Guna Select, mudah sekali. --Copilot
 *
 * ### Usage
 * ```tsx
 * import Select from "@govtechmy/myds-react/select";
 *
 * <Select
 *  size="small"
 * variant="outline"
 * >
 * <SelectTrigger>
 *    <SelectValue
 *     label="Fruit"
 *     placeholder="Select"
 *   />
 * </SelectTrigger>
 * <SelectContent>
 *   //* Header
 *   <SelectHeader>
 *     <Input size="small">
 *       <InputIcon position="right">
 *         <SearchIcon className="text-otl-gray-300" />
 *       </InputIcon>
 *     </Input>
 *   </SelectHeader>
 *   //* Content
 *   <SelectGroup>
 *     <SelectGroupTitle>
 *       Fruits
 *     </SelectGroupTitle>
 *     <SelectItem value="apple">
 *       Apple
 *     </SelectItem>
 *     <SelectItem value="banana">
 *       Banana
 *     </SelectItem>
 *     <SelectItem value="blueberry">
 *       Blueberry
 *     </SelectItem>
 *     <SelectItem value="grapes">
 *       Grapes
 *     </SelectItem>
 *     <SelectItem value="pineapple1">
 *       Pineapple1
 *     </SelectItem>
 *   </SelectGroup>
 *   //* Footer
 *   <SelectFooter>
 *     <Button
 *       size="small"
 *       variant="default-ghost"
 *     >
 *       Reset
 *     </Button>
 *   </SelectFooter>
 * </SelectContent>
 * </Select>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    multiple: false,
    disabled: false,
    size: "small",
    variant: "outline",
    children: "Options only",
  },
  argTypes: {
    size: {
      table: {
        type: {
          summary: "small | medium | large",
        },
      },
      description: "Available sizes for the select component",
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    multiple: {
      table: {
        type: {
          summary: "boolean",
        },
      },
      description: "Single or multiple selection",
      control: "boolean",
    },
    variant: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "Available variants for the select component",
      control: "inline-radio",
      options: ["outline", "ghost"],
    },
    disabled: {
      table: {
        type: {
          summary: "boolean",
        },
      },
      description: "Disabled state of the select component",
      control: "boolean",
    },
    children: {
      type: "string",
      control: "select",
      options: [
        "Options only",
        "Options + Header",
        "Options + Footer",
        "Options + Header + Footer",
      ],
      mapping: {
        "Options only": [
          <SelectTrigger aria-label="Select from options below">
            <SelectValue label="Fruit" placeholder="Select" />
          </SelectTrigger>,
          <SelectContent>{CONTENT}</SelectContent>,
        ],
        "Options + Header": [
          <SelectTrigger aria-label="Select from options below">
            <SelectValue label="Fruit" placeholder="Select" />
          </SelectTrigger>,
          <SelectContent>
            <SelectHeader>
              <Input size={"small"}>
                <InputIcon position="right">
                  <SearchIcon className="text-otl-gray-300" />
                </InputIcon>
              </Input>
            </SelectHeader>
            {CONTENT}
          </SelectContent>,
        ],
        "Options + Footer": [
          <SelectTrigger aria-label="Select from options below">
            <SelectValue label="Fruit" placeholder="Select" />
          </SelectTrigger>,
          <SelectContent>
            {CONTENT}
            <SelectFooter>
              <Button variant={"default-ghost"} size={"small"}>
                Reset
              </Button>
            </SelectFooter>
          </SelectContent>,
        ],
        "Options + Header + Footer": [
          <SelectTrigger aria-label="Select from options below">
            <SelectValue label="Fruit" placeholder="Select" />
          </SelectTrigger>,
          <SelectContent>
            <SelectHeader>
              <Input size={"small"}>
                <InputIcon position="right">
                  <SearchIcon className="text-otl-gray-300" />
                </InputIcon>
              </Input>
            </SelectHeader>
            {CONTENT}
            <SelectFooter>
              <Button variant={"default-ghost"} size={"small"}>
                Reset
              </Button>
            </SelectFooter>
          </SelectContent>,
        ],
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = createStory({
  children: [
    <SelectTrigger aria-label="Select from options below">
      <SelectValue label="Fruit" placeholder="Select" />
    </SelectTrigger>,
    <SelectContent>
      <SelectGroup>
        <SelectGroupTitle>Fruits</SelectGroupTitle>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple1">Pineapple1</SelectItem>
        <SelectItem value="pineapple2">Pineapple2</SelectItem>
        <SelectItem value="pineapple3">Pineapple3</SelectItem>
        <SelectItem value="pineapple4">Pineapple4</SelectItem>
        <SelectItem value="pineapple5">Pineapple5</SelectItem>
        <SelectItem value="pineapple6">Pineapple6</SelectItem>
        <SelectItem value="pineapple7">Pineapple7</SelectItem>
        <SelectItem value="pineapple8">Pineapple8</SelectItem>
        <SelectItem value="pineapple9">Pineapple9</SelectItem>
      </SelectGroup>
    </SelectContent>,
  ],
});

export const WithHeader: Story = createStory({
  children: [
    <SelectTrigger aria-label="Select from options below">
      <SelectValue label="Fruit" placeholder="Select" />
    </SelectTrigger>,
    <SelectContent>
      <SelectHeader>
        <Input size={"small"}>
          <InputIcon position="right">
            <SearchIcon className="text-otl-gray-300" />
          </InputIcon>
        </Input>
      </SelectHeader>
      <SelectGroup>
        <SelectGroupTitle>Fruits</SelectGroupTitle>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple1">Pineapple1</SelectItem>
        <SelectItem value="pineapple2">Pineapple2</SelectItem>
        <SelectItem value="pineapple3">Pineapple3</SelectItem>
        <SelectItem value="pineapple4">Pineapple4</SelectItem>
        <SelectItem value="pineapple5">Pineapple5</SelectItem>
        <SelectItem value="pineapple6">Pineapple6</SelectItem>
        <SelectItem value="pineapple7">Pineapple7</SelectItem>
        <SelectItem value="pineapple8">Pineapple8</SelectItem>
        <SelectItem value="pineapple9">Pineapple9</SelectItem>
      </SelectGroup>
    </SelectContent>,
  ],
});

export const WithFooter: Story = createStory({
  children: [
    <SelectTrigger aria-label="Select from options below">
      <SelectValue label="Fruit" placeholder="Select" />
    </SelectTrigger>,
    <SelectContent>
      <SelectGroup>
        <SelectGroupTitle>Fruits</SelectGroupTitle>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple1">Pineapple1</SelectItem>
        <SelectItem value="pineapple2">Pineapple2</SelectItem>
        <SelectItem value="pineapple3">Pineapple3</SelectItem>
        <SelectItem value="pineapple4">Pineapple4</SelectItem>
        <SelectItem value="pineapple5">Pineapple5</SelectItem>
        <SelectItem value="pineapple6">Pineapple6</SelectItem>
        <SelectItem value="pineapple7">Pineapple7</SelectItem>
        <SelectItem value="pineapple8">Pineapple8</SelectItem>
        <SelectItem value="pineapple9">Pineapple9</SelectItem>
      </SelectGroup>
      <SelectFooter>
        <Button variant={"default-ghost"} size={"small"}>
          Reset
        </Button>
      </SelectFooter>
    </SelectContent>,
  ],
});

const CustomOption = {
  apple: "Apple",
  banana: "Banana",
  blueberry: "Blueberry",
  grapes: "Grapes",
  pineapple: "Pineapple",
};

export const CustomDisplay_Pill: Story = createStory({
  multiple: true,
  children: [
    <SelectTrigger aria-label="Select from options below">
      <SelectValue label="Fruit">
        {(value) => (
          <div className="flex gap-1">
            {Array.isArray(value)
              ? value.map((v) => (
                  <Pill>{CustomOption[v as keyof typeof CustomOption]}</Pill>
                ))
              : value}
          </div>
        )}
      </SelectValue>
    </SelectTrigger>,
    <SelectContent>
      <SelectGroup>
        <SelectGroupTitle>Fruits</SelectGroupTitle>
        {Object.entries(CustomOption).map(([value, label]) => (
          <SelectItem value={value}>{label}</SelectItem>
        ))}
      </SelectGroup>
      <SelectFooter>
        <Button variant={"default-ghost"} size={"small"}>
          Reset
        </Button>
      </SelectFooter>
    </SelectContent>,
  ],
});

export const DarkDefault: Story = createStory(
  {
    children: [
      <div className="dark">
        <SelectTrigger aria-label="Select from options below">
          <SelectValue label="Fruit" placeholder="Select" />
        </SelectTrigger>
        ,
        <SelectContent className="dark">
          <SelectHeader>
            <Input size="small">
              <InputIcon position="right">
                <SearchIcon className="text-otl-gray-300" />
              </InputIcon>
            </Input>
          </SelectHeader>
          <SelectGroup>
            <SelectGroupTitle>Fruits</SelectGroupTitle>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="pineapple1">Pineapple1</SelectItem>
            <SelectItem value="pineapple2">Pineapple2</SelectItem>
            <SelectItem value="pineapple3">Pineapple3</SelectItem>
            <SelectItem value="pineapple4">Pineapple4</SelectItem>
            <SelectItem value="pineapple5">Pineapple5</SelectItem>
            <SelectItem value="pineapple6">Pineapple6</SelectItem>
            <SelectItem value="pineapple7">Pineapple7</SelectItem>
            <SelectItem value="pineapple8">Pineapple8</SelectItem>
            <SelectItem value="pineapple9">Pineapple9</SelectItem>
          </SelectGroup>
          <SelectFooter>
            <Button variant={"default-ghost"} size={"small"}>
              Reset
            </Button>
          </SelectFooter>
        </SelectContent>
      </div>,
    ],
  },
  "dark",
);
