import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownItemIcon,
  DropdownTrigger,
} from "@govtechmy/myds-react/dropdown";
import {
  CopyIcon,
  EditIcon,
  LogoutIcon,
  EllipsisIcon,
  SettingIcon,
} from "@govtechmy/myds-react/icon";
import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { Link } from "@govtechmy/myds-react/link";

/**
 * ### Overview
 * The Dropdown component is a versatile and customizable component that allows users to select an option from a list of choices. It can be used in various scenarios, such as navigation menus, settings, and forms. The component supports different variants and can include icons for better visual representation.
 *
 * ### Pantun
 * 
 * Jalan-jalan ke kota Mekah,
 * Singgah sebentar di tepi jalan.
 * Dropdown cantik penuh anugerah,
 * Pilihan mudah, hati pun senang.
 * 
 * -- Copilot
 *
 * ### Usage
 * ```tsx
 * import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownItemIcon,
  DropdownTrigger,
} from "@govtechmy/myds-react/dropdown";
import { ButtonIcon } from "@govtechmy/myds-react/button";
 *
* //* Basic
 * <Dropdown>
 *   <DropdownTrigger>
*      <ButtonIcon>
*        <EllipsisIcon />
*      </ButtonIcon>
*    </DropdownTrigger>,
*    <DropdownContent>
*      <DropdownItem>Profile</DropdownItem>
*      <DropdownItem disabled>Billing</DropdownItem>
*      <DropdownItem>Team</DropdownItem>
*      <DropdownItem>Subscription</DropdownItem>
*   </DropdownContent>
* </Dropdown>
* 
* //* With icon
* <Dropdown>
*   <DropdownTrigger>
*      <ButtonIcon>
*        <EllipsisIcon />
*      </ButtonIcon>
*    </DropdownTrigger>,
*   <DropdownContent side="bottom" align="end">
*       <DropdownItem>
*        <DropdownItemIcon>
*          <EditIcon />
*        </DropdownItemIcon>
*        Edit
*      </DropdownItem>
*      <DropdownItem>
*        <DropdownItemIcon>
*          <CopyIcon />
*        </DropdownItemIcon>
*        Copy link
*      </DropdownItem>
*      <DropdownItem>
*        <DropdownItemIcon>
*          <SettingIcon />
*        </DropdownItemIcon>
*        Settings
*      </DropdownItem>
*      <DropdownItem variant="danger">
*        <DropdownItemIcon>
*          <LogoutIcon />
*        </DropdownItemIcon>
*        Logout
*      </DropdownItem>
*    </DropdownContent>
*   </DropdownContent>
 * </Dropdown>
 * ```
 */
const meta = {
  title: "@govtechmy/myds-react/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { children: "basic" },

  argTypes: {
    children: {
      type: "string",
      control: "select",
      options: ["basic", "custom_trigger", "with_icon"],
      description: "Select different dropdown scenarios",
      mapping: {
        basic: [
          <DropdownTrigger>User</DropdownTrigger>,
          <DropdownContent>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem disabled>Billing</DropdownItem>
            <DropdownItem>Team</DropdownItem>
            <DropdownItem>Subscription</DropdownItem>
          </DropdownContent>,
        ],
        custom_trigger: [
          <DropdownTrigger asChild>
            {/* asChild is used here because interactive controls must not be nested as per https://dequeuniversity.com/rules/axe/4.10/nested-interactive?application=axeAPI */}
            <Link href="#" primary underline="always">
              hello
            </Link>
          </DropdownTrigger>,
          <DropdownContent>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem disabled>Billing</DropdownItem>
            <DropdownItem>Team</DropdownItem>
            <DropdownItem>Subscription</DropdownItem>
          </DropdownContent>,
        ],
        with_icon: [
          <DropdownTrigger>
            <ButtonIcon aria-label="options button">
              <EllipsisIcon />
            </ButtonIcon>
          </DropdownTrigger>,
          <DropdownContent side="bottom" align="end">
            <DropdownItem>
              <DropdownItemIcon>
                <EditIcon />
              </DropdownItemIcon>
              Edit
            </DropdownItem>
            <DropdownItem>
              <DropdownItemIcon>
                <CopyIcon />
              </DropdownItemIcon>
              Copy link
            </DropdownItem>
            <DropdownItem>
              <DropdownItemIcon>
                <SettingIcon />
              </DropdownItemIcon>
              Settings
            </DropdownItem>
            <DropdownItem variant="danger">
              <DropdownItemIcon>
                <LogoutIcon />
              </DropdownItemIcon>
              Logout
            </DropdownItem>
          </DropdownContent>,
        ],
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = createStory({
  children: "basic",
});

export const CustomTrigger: Story = createStory({
  children: "custom_trigger",
});

export const WithIcon: Story = createStory({
  children: "with_icon",
});
