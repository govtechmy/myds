import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  SummaryList,
  SummaryListAction,
  SummaryListBody,
  SummaryListHeader,
  SummaryListKey,
  SummaryListValue,
} from "@myds/react/summary-list";
import { Tag } from "@myds/react/tag";
import { Button } from "@myds/react/button";
import { SwapIcon } from "@myds/react/icon";

/**
 * ### Overview
 * The summary list component displays information in a structured key-value format, making it ideal for presenting form summaries, application details, or any data that needs to be reviewed. It supports headers, action buttons, and custom styling to enhance the presentation of information in both light and dark modes.
 *
 */

const meta = {
  title: "@myds/react/SummaryList",
  component: SummaryList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof SummaryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SummaryListCustom: Story = {
  ...createStory({}),
  render: () => (
    <SummaryList>
      <SummaryListHeader>Government Subsidy Application</SummaryListHeader>

      <SummaryListBody>
        <SummaryListKey>Application ID</SummaryListKey>
        <SummaryListValue>SUB12345</SummaryListValue>
        <SummaryListAction></SummaryListAction>

        <SummaryListKey>Applicant Name</SummaryListKey>
        <SummaryListValue>Lee Ming Wei</SummaryListValue>
        <SummaryListAction></SummaryListAction>

        <SummaryListKey>Submission Date</SummaryListKey>
        <SummaryListValue>15/10/2024 17:35:00</SummaryListValue>
        <SummaryListAction></SummaryListAction>

        <SummaryListKey>Subsidy Type</SummaryListKey>
        <SummaryListValue>Petrol Subsidy</SummaryListValue>
        <SummaryListAction></SummaryListAction>

        <SummaryListKey>Status</SummaryListKey>
        <SummaryListValue className="py-2">
          <Tag
            variant="warning"
            size={"medium"}
            className="h-fit"
            mode={"default"}
          >
            Pending
          </Tag>
        </SummaryListValue>
        <SummaryListAction>
          <Button variant="primary-ghost" className="h-8">
            <SwapIcon /> Refresh
          </Button>
        </SummaryListAction>

        <SummaryListKey>Document Submitted</SummaryListKey>
        <SummaryListValue>
          <div>Proof Of Income</div>
          <div>ID Copy</div>
        </SummaryListValue>
        <SummaryListAction>
          <Button variant="primary-ghost" className="h-8">
            Add More
          </Button>
        </SummaryListAction>

        <SummaryListKey>Expected Response Date</SummaryListKey>
        <SummaryListValue>23/03/2023 17:35:00</SummaryListValue>
        <SummaryListAction></SummaryListAction>
      </SummaryListBody>
    </SummaryList>
  ),
};

export const SummaryListCustomDark: Story = {
  ...createStory({}, "dark"),
  render: () => (
    <div className="dark">
      <SummaryList>
        <SummaryListHeader>Government Subsidy Application</SummaryListHeader>

        <SummaryListBody>
          <SummaryListKey>Application ID</SummaryListKey>
          <SummaryListValue>SUB12345</SummaryListValue>
          <SummaryListAction></SummaryListAction>

          <SummaryListKey>Applicant Name</SummaryListKey>
          <SummaryListValue>Lee Ming Wei</SummaryListValue>
          <SummaryListAction></SummaryListAction>

          <SummaryListKey>Submission Date</SummaryListKey>
          <SummaryListValue>15/10/2024 17:35:00</SummaryListValue>
          <SummaryListAction></SummaryListAction>

          <SummaryListKey>Subsidy Type</SummaryListKey>
          <SummaryListValue>Petrol Subsidy</SummaryListValue>
          <SummaryListAction></SummaryListAction>

          <SummaryListKey>Status</SummaryListKey>
          <SummaryListValue className="py-2">
            <Tag
              variant="warning"
              size={"medium"}
              className="h-fit"
              mode={"default"}
            >
              Pending
            </Tag>
          </SummaryListValue>
          <SummaryListAction>
            <Button variant="primary-ghost" className="h-8">
              <SwapIcon /> Refresh
            </Button>
          </SummaryListAction>

          <SummaryListKey>Document Submitted</SummaryListKey>
          <SummaryListValue>
            <div>Proof Of Income</div>
            <div>ID Copy</div>
          </SummaryListValue>
          <SummaryListAction>
            <Button variant="primary-ghost" className="h-8">
              Add More
            </Button>
          </SummaryListAction>

          <SummaryListKey>Expected Response Date</SummaryListKey>
          <SummaryListValue>23/03/2023 17:35:00</SummaryListValue>
          <SummaryListAction></SummaryListAction>
        </SummaryListBody>
      </SummaryList>
    </div>
  ),
};
