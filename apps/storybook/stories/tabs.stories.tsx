import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Tabs,
  TabsContent,
  TabsCounter,
  TabsIcon,
  TabsList,
  TabsTrigger,
} from "@govtechmy/myds-react/tabs";
import ArrowBack from "../react/arrow-back";
import ArrowForward from "../react/arrow-forward";

/**
 * ### Overview
 *
 * This file contains the Storybook stories for the `Tabs` component from the `@govtechmy/myds-react/tabs` library.
 * The `Tabs` component is used to create a tabbed interface, allowing users to switch between different views or content sections.
 *
 * ### Pantun
 *
 * > Pagi hari buka tab,
 * > Pilih kandungan dengan senang,
 * > Komponen tab memang hebat,
 * > Pengalaman pengguna jadi tenang. -- ChatGPT
 *
 * ### Usage
 * ```tsx
 * import Tabs from "@govtechmy/myds-react/tabs";
 *
 * <Tabs
 *  defaultValue="1"
 *  onClick={() => {}}
 *  size="small"
 *  variant="line"
 *  >
 *  <TabsList width="fit">
 *    <TabsTrigger value="1">
 *      Proton
 *    </TabsTrigger>
 *    <TabsTrigger value="2">
 *    <TabsTrigger value="4">
 *      Lamborghini
 *    </TabsTrigger>
 *  </TabsList>
 *
 *    <TabsContent
 *      className="py-6"
 *      value="1"
 *    >
 *      <p>
 *        Proton is a Malaysian automotive company and automobile corporation active in automobile design, manufacturing, distribution, and sales. Established in 1983, Proton was initially a joint venture between the Malaysian government and Mitsubishi Motors. The company is known for producing a range of vehicles, including sedans, hatchbacks, and SUVs, and has played a significant role in the development of Malaysia's automotive industry. Proton's cars are popular for their affordability, reliability, and innovative features, making them a preferred choice for many Malaysians.
 *      </p>
 *    </TabsContent>
 *    <TabsContent
 *      className="py-6"
 *      value="2"
 *    >
 *      <p>
 *        Perodua is a Malaysian automobile manufacturer that specializes in compact cars and vehicles. Established in 1992, Perodua has become one of the leading automotive brands in Malaysia, known for its high-quality vehicles, innovative designs, and affordable prices. The company offers a range of cars, including hatchbacks, sedans, and SUVs, catering to various customer needs and preferences. Perodua's vehicles are popular for their fuel efficiency, safety features, and reliability, making them a top choice for many Malaysian drivers.
 *      </p>
 *    </TabsContent>
 *    <TabsContent
 *      className="py-6"
 *      value="3"
 *    >
 *      <p>
 *        Toyota is a Japanese multinational automotive manufacturer that produces a wide range of vehicles, including cars, trucks, and hybrids. Founded in 1937, Toyota has grown to become one of the largest automakers in the world, known for its high-quality vehicles, innovative technologies, and commitment to sustainability. The company offers a diverse lineup of cars, from compact sedans to luxury SUVs, catering to a global customer base. Toyota's vehicles are renowned for their reliability, durability, and advanced safety features, making them a popular choice among drivers worldwide.
 *      </p>
 *    </TabsContent>
 *    <TabsContent
 *      className="py-6"
 *      value="4"
 *    >
 *      <p>
 *        Lamborghini is an Italian luxury sports car manufacturer that produces some of the most iconic and high-performance vehicles in the world. Founded in 1963, Lamborghini has become synonymous with cutting-edge design, superior engineering, and unparalleled performance. The company's lineup includes a range of supercars and hypercars, known for their distinctive styling, powerful engines, and lightning-fast speeds. Lamborghini's cars are coveted by automotive enthusiasts and collectors for their exclusivity, craftsmanship, and sheer driving pleasure.
 *      </p>
 *    </TabsContent>
 *  </Tabs>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn(), defaultValue: "1", variant: "line", size: "small" },
  argTypes: {
    variant: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "insert-description-here",
      control: "inline-radio",
      options: ["line", "pill", "enclosed"],
    },
    size: {
      table: {
        type: {
          summary: "enum",
        },
      },
      description: "insert-description-here",
      control: "inline-radio",
      options: ["small", "medium"],
    },
    children: {
      type: "string",
      control: "select",
      options: [
        "Text Only",
        "Text + Right Icon",
        "Text + Left Icon",
        "Text + Counter",
        // "Text + Icon + Counter",
      ],
      mapping: {
        "Text Only": (
          <TabsList>
            <TabsTrigger value="1">Proton</TabsTrigger>
            <TabsTrigger value="2">Perodua</TabsTrigger>
            <TabsTrigger value="3">Toyota</TabsTrigger>
            <TabsTrigger value="4">Lamborghini</TabsTrigger>
            <TabsTrigger value="5">Lamborghini</TabsTrigger>
            <TabsTrigger value="6">Lamborghini</TabsTrigger>
            <TabsTrigger value="7">Lamborghini</TabsTrigger>
            <TabsTrigger value="8">Lamborghini</TabsTrigger>
          </TabsList>
        ),
        "Text + Right Icon": (
          <TabsList>
            <TabsTrigger value="1">
              Proton
              <TabsIcon>
                <ArrowForward />
              </TabsIcon>
            </TabsTrigger>
            <TabsTrigger value="2">
              Perodua
              <TabsIcon>
                <ArrowForward />
              </TabsIcon>
            </TabsTrigger>
            <TabsTrigger value="3">
              Toyota{" "}
              <TabsIcon>
                <ArrowForward />
              </TabsIcon>
            </TabsTrigger>
            <TabsTrigger value="4">Lamborghini</TabsTrigger>
          </TabsList>
        ),
        "Text + Left Icon": (
          <TabsList>
            <TabsTrigger value="1">
              <TabsIcon>
                <ArrowBack />
              </TabsIcon>
              Proton
            </TabsTrigger>
            <TabsTrigger value="2">
              <TabsIcon>
                <ArrowBack />
              </TabsIcon>
              Perodua
            </TabsTrigger>
            <TabsTrigger value="3">
              <TabsIcon>
                <ArrowBack />
              </TabsIcon>
              Toyota
            </TabsTrigger>
            <TabsTrigger value="4">Lamborghini</TabsTrigger>
          </TabsList>
        ),
        "Text + Counter": (
          <TabsList>
            <TabsTrigger value="1">
              Proton
              <TabsCounter>3</TabsCounter>
            </TabsTrigger>
            <TabsTrigger value="2">
              Perodua
              <TabsCounter>10</TabsCounter>
            </TabsTrigger>
            <TabsTrigger value="3">
              Toyota
              <TabsCounter>5</TabsCounter>
            </TabsTrigger>
            <TabsTrigger value="4">Lamborghini</TabsTrigger>
          </TabsList>
        ),
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Storybook stories for different variants of a component.
 *
 * @example
 * export const Default: Story = createStory({ ... });
 * export const DarkDefault: Story = createStory({ ... }, "dark");
 */

const content = (
  <>
    <TabsContent value="1" className="py-6">
      <p>
        Proton is a Malaysian automotive company and automobile corporation
        active in automobile design, manufacturing, distribution, and sales.
        Established in 1983, Proton was initially a joint venture between the
        Malaysian government and Mitsubishi Motors. The company is known for
        producing a range of vehicles, including sedans, hatchbacks, and SUVs,
        and has played a significant role in the development of Malaysia's
        automotive industry. Proton's cars are popular for their affordability,
        reliability, and innovative features, making them a preferred choice for
        many Malaysians.
      </p>
    </TabsContent>
    <TabsContent value="2" className="py-6">
      <p>
        Perodua is a Malaysian automobile manufacturer that specializes in
        compact cars and vehicles. Established in 1992, Perodua has become one
        of the leading automotive brands in Malaysia, known for its high-quality
        vehicles, innovative designs, and affordable prices. The company offers
        a range of cars, including hatchbacks, sedans, and SUVs, catering to
        various customer needs and preferences. Perodua's vehicles are popular
        for their fuel efficiency, safety features, and reliability, making them
        a top choice for many Malaysian drivers.
      </p>
    </TabsContent>
    <TabsContent value="3" className="py-6">
      <p>
        Toyota is a Japanese multinational automotive manufacturer that produces
        a wide range of vehicles, including cars, trucks, and hybrids. Founded
        in 1937, Toyota has grown to become one of the largest automakers in the
        world, known for its high-quality vehicles, innovative technologies, and
        commitment to sustainability. The company offers a diverse lineup of
        cars, from compact sedans to luxury SUVs, catering to a global customer
        base. Toyota's vehicles are renowned for their reliability, durability,
        and advanced safety features, making them a popular choice among drivers
        worldwide.
      </p>
    </TabsContent>
    <TabsContent value="4" className="py-6">
      <p>
        Lamborghini is an Italian luxury sports car manufacturer that produces
        some of the most iconic and high-performance vehicles in the world.
        Founded in 1963, Lamborghini has become synonymous with cutting-edge
        design, superior engineering, and unparalleled performance. The
        company's lineup includes a range of supercars and hypercars, known for
        their distinctive styling, powerful engines, and lightning-fast speeds.
        Lamborghini's cars are coveted by automotive enthusiasts and collectors
        for their exclusivity, craftsmanship, and sheer driving pleasure.
      </p>
    </TabsContent>
  </>
);

export const Default: Story = createStory({
  children: (
    <>
      <TabsList>
        <TabsTrigger value="1">Proton</TabsTrigger>
        <TabsTrigger value="2">Perodua</TabsTrigger>
        <TabsTrigger value="3">Toyota</TabsTrigger>
        <TabsTrigger value="4">Lamborghini</TabsTrigger>
      </TabsList>
      {content}
    </>
  ),
});

export const FullWidth: Story = createStory({
  children: (
    <>
      <TabsList width="full">
        <TabsTrigger value="1">Proton</TabsTrigger>
        <TabsTrigger value="2">Perodua</TabsTrigger>
        <TabsTrigger value="3">Toyota</TabsTrigger>
        <TabsTrigger value="4">Lamborghini</TabsTrigger>
      </TabsList>
      {content}
    </>
  ),
});

export const DefaultDark: Story = createStory(
  {
    children: (
      <>
        <TabsList>
          <TabsTrigger value="1">Proton</TabsTrigger>
          <TabsTrigger value="2">Perodua</TabsTrigger>
          <TabsTrigger value="3">Toyota</TabsTrigger>
          <TabsTrigger value="4">Lamborghini</TabsTrigger>
        </TabsList>
        {content}
      </>
    ),
    className: "dark",
  },
  "dark",
);
