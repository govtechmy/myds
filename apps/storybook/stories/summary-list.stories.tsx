import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  SummaryList,
  SummaryListAction,
  SummaryListBody,
  SummaryListHeader,
  SummaryListTerm,
  SummaryListDetail,
  SummaryListRow,
  SummaryListAddition,
} from "@govtechmy/myds-react/summary-list";
import { Tag } from "@govtechmy/myds-react/tag";
import { Button } from "@govtechmy/myds-react/button";
import { SwapIcon } from "@govtechmy/myds-react/icon";

/**
 * ### Overview
 * The summary list component displays information in a structured key-value format, making it ideal for presenting form summaries, application details, or any data that needs to be reviewed. It supports headers, action buttons, and custom styling to enhance the presentation of information in both light and dark modes.
 *
 */

const meta = {
  title: "@govtechmy/myds-react/SummaryList",
  component: SummaryList,
  tags: ["autodocs"],
  parameters: {
    // layout: "centered",
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof SummaryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SummaryListCustom: Story = {
  ...createStory({}),
  render: () => (
    <div className="w-[660px]">
      <SummaryList>
        <SummaryListHeader>Government Subsidy Application</SummaryListHeader>

        <SummaryListBody>
          <SummaryListRow>
            <SummaryListTerm>Application ID</SummaryListTerm>
            <SummaryListDetail>SUB12345</SummaryListDetail>
            <SummaryListAction></SummaryListAction>
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Applicant Name</SummaryListTerm>
            <SummaryListDetail>Lee Ming Wei</SummaryListDetail>
            <SummaryListAction>
              <Button variant="primary-ghost" className="h-8">
                Edit Name
              </Button>
            </SummaryListAction>
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Submission Date</SummaryListTerm>
            <SummaryListDetail>15/10/2024 17:35:00</SummaryListDetail>
            <SummaryListAction></SummaryListAction>
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Subsidy Type</SummaryListTerm>
            <SummaryListDetail>Petrol Subsidy</SummaryListDetail>
            <SummaryListAction>
              <Button variant="primary-ghost" className="h-8">
                Change
              </Button>
            </SummaryListAction>
          </SummaryListRow>

          <SummaryListRow>
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
          </SummaryListRow>

          <SummaryListRow>
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
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Expected Response Date</SummaryListTerm>
            <SummaryListDetail>23/03/2023 17:35:00</SummaryListDetail>
            <SummaryListAction></SummaryListAction>
          </SummaryListRow>
        </SummaryListBody>
      </SummaryList>
    </div>
  ),
};

export const SummaryListCustomDark: Story = {
  ...createStory({}, "dark"),
  render: () => (
    <div className="dark w-[660px]">
      <SummaryList>
        <SummaryListHeader>Government Subsidy Application</SummaryListHeader>

        <SummaryListBody>
          <SummaryListRow>
            <SummaryListTerm>Application ID</SummaryListTerm>
            <SummaryListDetail>SUB12345</SummaryListDetail>
            <SummaryListAction></SummaryListAction>
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Applicant Name</SummaryListTerm>
            <SummaryListDetail>Lee Ming Wei</SummaryListDetail>
            <SummaryListAction></SummaryListAction>
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Submission Date</SummaryListTerm>
            <SummaryListDetail>15/10/2024 17:35:00</SummaryListDetail>
            <SummaryListAction></SummaryListAction>
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Subsidy Type</SummaryListTerm>
            <SummaryListDetail>Petrol Subsidy</SummaryListDetail>
            <SummaryListAction></SummaryListAction>
          </SummaryListRow>

          <SummaryListRow>
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
          </SummaryListRow>

          <SummaryListRow>
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
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Expected Response Date</SummaryListTerm>
            <SummaryListDetail>23/03/2023 17:35:00</SummaryListDetail>
            <SummaryListAction></SummaryListAction>
          </SummaryListRow>
        </SummaryListBody>
      </SummaryList>
    </div>
  ),
};

export const SummaryListCustomWithAdditionalTab: Story = {
  ...createStory({}),
  render: () => (
    <div className="w-[660px]">
      <SummaryList>
        <SummaryListHeader>Government Subsidy Application</SummaryListHeader>

        <SummaryListBody>
          <SummaryListRow>
            <SummaryListTerm>Application ID</SummaryListTerm>
            <SummaryListDetail>SUB12345</SummaryListDetail>
            <SummaryListAction></SummaryListAction>
            <SummaryListAddition>Additional information</SummaryListAddition>
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Applicant Name</SummaryListTerm>
            <SummaryListDetail>Lee Ming Wei</SummaryListDetail>
            <SummaryListAction>
              <Button variant="primary-ghost" className="h-8">
                Edit Name
              </Button>
            </SummaryListAction>
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Submission Date</SummaryListTerm>
            <SummaryListDetail>15/10/2024 17:35:00</SummaryListDetail>
            <SummaryListAction></SummaryListAction>
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Subsidy Type</SummaryListTerm>
            <SummaryListDetail>Petrol Subsidy</SummaryListDetail>
            <SummaryListAction>
              <Button variant="primary-ghost" className="h-8">
                Change
              </Button>
            </SummaryListAction>
          </SummaryListRow>

          <SummaryListRow>
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
            <SummaryListAddition>Additional information</SummaryListAddition>
          </SummaryListRow>

          <SummaryListRow>
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
          </SummaryListRow>

          <SummaryListRow>
            <SummaryListTerm>Expected Response Date</SummaryListTerm>
            <SummaryListDetail>23/03/2023 17:35:00</SummaryListDetail>
            <SummaryListAction></SummaryListAction>
            <SummaryListAddition>Additional information</SummaryListAddition>
          </SummaryListRow>
        </SummaryListBody>
      </SummaryList>
    </div>
  ),
};
