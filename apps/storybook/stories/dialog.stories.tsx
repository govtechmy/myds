import React, { useEffect } from "react";
import { Button } from "@govtechmy/myds-react/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogIcon,
  DialogBody,
  DialogTitle,
  DialogTrigger,
  DialogProps,
  DialogBodyProps,
  DialogFooterProps,
  DialogHeaderProps,
} from "@govtechmy/myds-react/dialog";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";

/**
 * ### Overview
 * A window placed on top of the primary window or another dialog.
 *
 * ### Usage
 * ```tsx
 * import { Button } from "@govtechmy/myds-react/button";
 * import {
 *   Dialog,
 *   DialogContent,
 *   DialogDescription,
 *   DialogHeader,
 *   DialogTitle,
 *   DialogTrigger,
 * } from "@govtechmy/myds-react/dialog";
 *
 *    <Dialog>
 *       <DialogTrigger>
 *         <Button variant="danger-fill" size="medium">
 *           Padam data
 *         </Button>
 *       </DialogTrigger>
 *       <DialogBody>
 *         <DialogHeader>
 *           <DialogTitle>Adakah anda pasti?</DialogTitle>
 *         </DialogHeader>
 *
 *         <DialogContent>
 *           <DialogDescription>
 *             Tindakan ini tidak boleh dibatalkan. Ini akan menghapuskan data
 *             anda dari pelayar anda.
 *           </DialogDescription>
 *         </DialogContent>
 *
 *         <DialogFooter
 *           action={
 *             <DialogClose asChild>
 *               <Button variant="danger-ghost" size="small">
 *                 Lapor kejadian
 *               </Button>
 *             </DialogClose>
 *           }
 *         >
 *           <DialogClose asChild>
 *             <Button variant="default-outline" size="medium">
 *               Batal
 *             </Button>
 *           </DialogClose>
 *           <DialogClose asChild>
 *             <Button variant="danger-fill" size="medium">
 *               Ya, teruskan
 *             </Button>
 *           </DialogClose>
 *         </DialogFooter>
 *       </DialogBody>
 *     </Dialog>
 * ```
 */
// @ts-expect-error
const meta: Meta = {
  title: "@govtechmy/myds-react/Components/Dialog",
  component: Dialog,
  render: ({ dismissible, border, align, border_header }) => {
    return (
      <Dialog>
        <DialogTrigger>
          <Button variant="danger-fill" size="medium">
            Padam data
          </Button>
        </DialogTrigger>
        <DialogBody dismissible={dismissible}>
          <DialogHeader border={border_header}>
            <DialogTitle>Adakah anda pasti?</DialogTitle>
          </DialogHeader>

          <DialogContent>
            <DialogDescription>
              Tindakan ini tidak boleh dibatalkan. Ini akan menghapuskan data
              anda dari pelayar anda.
            </DialogDescription>
          </DialogContent>

          <DialogFooter
            border={border}
            align={align}
            action={
              <DialogClose asChild>
                <Button variant="danger-ghost" size="small">
                  Lapor kejadian
                </Button>
              </DialogClose>
            }
          >
            <DialogClose asChild>
              <Button variant="default-outline" size="medium">
                Batal
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="danger-fill" size="medium">
                Ya, teruskan
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogBody>
      </Dialog>
    );
  },
  parameters: {
    layout: "centered",
  },
  args: {
    open: false,
    dismissible: true,
    border: false,
    border_header: true,
    align: "end",
    defaultOpen: false,
    onDismiss: () => {},
    action: "",
  },
  argTypes: {
    open: {
      description: "Controls the visibility of the dialog (controlled)",
      control: {
        type: "boolean",
      },
      table: {
        category: "Dialog",
      },
    },
    onOpenChange: {
      description:
        "Event listener for when the dialog is opened or closed (controlled)",
      action: "onOpenChange",
      control: undefined,
      table: {
        category: "Dialog",
      },
    },
    defaultOpen: {
      description: "Initial state of the dialog (uncontrolled)",
      control: {
        type: "boolean",
      },
      table: {
        category: "Dialog",
      },
    },
    dismissible: {
      description: "The dialog should have a close button",
      defaultValue: true,
      control: {
        type: "boolean",
      },
      table: {
        category: "DialogBody",
      },
    },
    onDismiss: {
      description: "Event listener for when the dialog is dismissed",
      action: "onDismiss",
      control: undefined,
      table: {
        category: "DialogBody",
      },
    },
    border_header: {
      name: "border",
      description: "The header should have a bottom border",
      defaultValue: false,
      control: {
        type: "boolean",
      },
      table: {
        category: "DialogHeader",
      },
    },
    border: {
      description: "The footer should have a top border",
      defaultValue: false,
      control: {
        type: "boolean",
      },
      table: {
        category: "DialogFooter",
      },
    },

    action: {
      description:
        "The footer action space. Opposite to action buttons (children)",
      action: "action",
      // @ts-expect-error
      type: "ReactNode",
      table: {
        category: "DialogFooter",
      },
    },
    align: {
      description: "The footer children should fill up the available width",
      control: "inline-radio",
      options: ["start", "full", "end"],
      table: {
        category: "DialogFooter",
      },
    },
  },
} satisfies Meta<
  DialogProps &
    DialogBodyProps &
    DialogFooterProps & { border_header: DialogHeaderProps["border"] }
>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents the dialog component with default variant.
 */
export const DefaultLight: Story = createStory({
  dismissible: true,
});

export const DefaultDark: Story = createStory(
  {
    dismissible: true,
    theme: "dark",
  },
  "dark",
);
