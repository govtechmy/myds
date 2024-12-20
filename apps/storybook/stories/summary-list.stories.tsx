import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  SummaryList,
  SummaryListAction,
  SummaryListBody,
  SummaryListHeader,
  SummaryListTerm,
  SummaryListDetail,
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
        <SummaryListTerm>Application ID</SummaryListTerm>
        <SummaryListDetail>SUB12345</SummaryListDetail>
        <SummaryListAction></SummaryListAction>

        <SummaryListTerm>Applicant Name</SummaryListTerm>
        <SummaryListDetail>Lee Ming Wei</SummaryListDetail>
        <SummaryListAction></SummaryListAction>

        <SummaryListTerm>Submission Date</SummaryListTerm>
        <SummaryListDetail>15/10/2024 17:35:00</SummaryListDetail>
        <SummaryListAction></SummaryListAction>

        <SummaryListTerm>Subsidy Type</SummaryListTerm>
        <SummaryListDetail>Petrol Subsidy</SummaryListDetail>
        <SummaryListAction></SummaryListAction>

        <SummaryListTerm>Status</SummaryListTerm>
        <SummaryListDetail className="py-2">
          <Tag
            variant="warning"
            size={"medium"}
            className="h-fit"
            mode={"default"}
          >
            Pending
          </Tag>
        </SummaryListDetail>
        <SummaryListAction>
          <Button variant="primary-ghost" className="h-8">
            <SwapIcon /> Refresh
          </Button>
        </SummaryListAction>

        <SummaryListTerm>Document Submitted</SummaryListTerm>
        <SummaryListDetail>
          <div>Proof Of Income</div>
          <div>ID Copy</div>
        </SummaryListDetail>
        <SummaryListAction>
          <Button variant="primary-ghost" className="h-8">
            Add More
          </Button>
        </SummaryListAction>

        <SummaryListTerm>Expected Response Date</SummaryListTerm>
        <SummaryListDetail>23/03/2023 17:35:00</SummaryListDetail>
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
          <SummaryListTerm>Application ID</SummaryListTerm>
          <SummaryListDetail>SUB12345</SummaryListDetail>
          <SummaryListAction></SummaryListAction>

          <SummaryListTerm>Applicant Name</SummaryListTerm>
          <SummaryListDetail>Lee Ming Wei</SummaryListDetail>
          <SummaryListAction></SummaryListAction>

          <SummaryListTerm>Submission Date</SummaryListTerm>
          <SummaryListDetail>15/10/2024 17:35:00</SummaryListDetail>
          <SummaryListAction></SummaryListAction>

          <SummaryListTerm>Subsidy Type</SummaryListTerm>
          <SummaryListDetail>Petrol Subsidy</SummaryListDetail>
          <SummaryListAction></SummaryListAction>

          <SummaryListTerm>Status</SummaryListTerm>
          <SummaryListDetail className="py-2">
            <Tag
              variant="warning"
              size={"medium"}
              className="h-fit"
              mode={"default"}
            >
              Pending
            </Tag>
          </SummaryListDetail>
          <SummaryListAction>
            <Button variant="primary-ghost" className="h-8">
              <SwapIcon /> Refresh
            </Button>
          </SummaryListAction>

          <SummaryListTerm>Document Submitted</SummaryListTerm>
          <SummaryListDetail>
            <div>Proof Of Income</div>
            <div>ID Copy</div>
          </SummaryListDetail>
          <SummaryListAction>
            <Button variant="primary-ghost" className="h-8">
              Add More
            </Button>
          </SummaryListAction>

          <SummaryListTerm>Expected Response Date</SummaryListTerm>
          <SummaryListDetail>23/03/2023 17:35:00</SummaryListDetail>
          <SummaryListAction></SummaryListAction>
        </SummaryListBody>
      </SummaryList>
    </div>
  ),
};
