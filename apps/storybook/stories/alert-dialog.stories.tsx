import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogClose,
  AlertDialogProps,
  AlertDialogActionProps,
} from "@govtechmy/myds-react/alert-dialog";
import { Button } from "@govtechmy/myds-react/button";
import { DialogBodyProps } from "@govtechmy/myds-react/dialog";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";

/**
 * ### Overview
 * A dialog that displays a message with an optional action.
 *
 * ### Usage
 * ```tsx
 * import { AlertDialog, AlertDialogTrigger } from "@govtechmy/myds-react/alert-dialog";
 *
 *  <AlertDialog variant={variant}>
 *       <AlertDialogTrigger>
 *         <Button variant="primary-fill" size="medium">
 *           Lihat Dialog
 *         </Button>
 *       </AlertDialogTrigger>
 *       <AlertDialogContent>
 *         <AlertDialogTitle>
 *          Berjaya
 *         </AlertDialogTitle>
 *
 *         <AlertDialogDescription>
 *           Tindakan anda berjaya dilaksanakan.
 *         </AlertDialogDescription>
 *
 *         <AlertDialogAction>
 *           <AlertDialogClose>
 *             <Button variant="default-outline" size="medium">
 *               Batal
 *             </Button>
 *           </AlertDialogClose>
 *           <AlertDialogClose>
 *             <Button
 *               variant="primary-fill"
 *               size="medium"
 *             >
 *               Teruskan
 *             </Button>
 *           </AlertDialogClose>
 *         </AlertDialogAction>
 *       </AlertDialogContent>
 *     </AlertDialog>
 * ```
 */
// @ts-expect-error
const meta: Meta = {
  title: "@govtechmy/myds-react/AlertDialog",
  component: AlertDialog,
  render: ({ dismissible, align, variant }) => {
    return (
      <AlertDialog variant={variant}>
        <AlertDialogTrigger>
          <Button variant="primary-fill" size="medium">
            Lihat Dialog
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent dismissible={dismissible}>
          <AlertDialogTitle>
            {variant === "success"
              ? "Berjaya"
              : variant === "warning"
                ? "Perhatian"
                : variant === "danger"
                  ? "Bahaya"
                  : null}
          </AlertDialogTitle>

          <AlertDialogDescription>
            {variant === "success"
              ? "Dialog sedang ditunjukkan tanpa sebarang masalah."
              : variant === "warning"
                ? "Mengubah tetapan ini akan mempengaruhi cara perisian anda berfungsi. Adakah anda mahu meneruskan?"
                : variant === "danger"
                  ? "Tindakan ini akan memadamkan data secara kekal dan tidak dapat dikembalikan. Adakah anda mahu meneruskan?"
                  : null}
          </AlertDialogDescription>

          <AlertDialogAction align={align}>
            <AlertDialogClose>
              <Button variant="default-outline" size="medium">
                {variant === "warning" ? "Kembali" : "Batal"}
              </Button>
            </AlertDialogClose>
            <AlertDialogClose>
              <Button
                variant={variant === "danger" ? "danger-fill" : "primary-fill"}
                size="medium"
              >
                {variant === "success" ? "Teruskan" : "Ya, teruskan"}
              </Button>
            </AlertDialogClose>
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "success",
    open: false,
    dismissible: true,
    align: "end",
    defaultOpen: false,
    onDismiss: () => {},
    action: "",
  },

  argTypes: {
    variant: {
      description: "The variant of the alert dialog",
      control: "inline-radio",
      options: ["default", "success", "info", "warning", "danger"],
    },
    open: {
      description: "Controls the visibility of the dialog (controlled)",
      control: {
        type: "boolean",
      },
      table: {
        category: "AlertDialog",
      },
    },
    onOpenChange: {
      description:
        "Event listener for when the dialog is opened or closed (controlled)",
      action: "onOpenChange",
      control: undefined,
      table: {
        category: "AlertDialog",
      },
    },
    defaultOpen: {
      description: "Initial state of the dialog (uncontrolled)",
      control: {
        type: "boolean",
      },
      table: {
        category: "AlertDialog",
      },
    },
    dismissible: {
      description: "The dialog should have a close button",
      defaultValue: true,
      control: {
        type: "boolean",
      },
      table: {
        category: "AlertDialogContent",
      },
    },
    onDismiss: {
      description: "Event listener for when the dialog is dismissed",
      action: "onDismiss",
      control: undefined,
      table: {
        category: "AlertDialogContent",
      },
    },
    action: {
      description:
        "The footer action space. Opposite to action buttons (children)",
      action: "action",
      // @ts-expect-error
      type: "ReactNode",
      table: {
        category: "AlertDialogAction",
      },
    },
    align: {
      description: "The footer children should fill up the available width",
      control: "inline-radio",
      options: ["start", "full", "end"],
      table: {
        category: "AlertDialogAction",
      },
    },
  },
} satisfies Meta<AlertDialogProps & AlertDialogActionProps & DialogBodyProps>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents the dialog component with default variant.
 */
export const SuccessLight: Story = createStory({});

export const SuccessDark: Story = createStory({ theme: "dark" }, "dark");

/**
 * This story represents the dialog component with warning variant.
 */
export const WarningLight: Story = createStory({ variant: "warning" });

export const WarningDark: Story = createStory(
  { variant: "warning", theme: "dark" },
  "dark",
);

/**
 * This story represents the dialog component with danger variant.
 */
export const DangerLight: Story = createStory({ variant: "danger" });

export const DangerDark: Story = createStory(
  { variant: "danger", theme: "dark" },
  "dark",
);
