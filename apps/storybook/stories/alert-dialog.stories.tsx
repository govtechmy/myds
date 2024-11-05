import { AlertDialog, AlertDialogTrigger } from "@myds/react/alert-dialog";
import { Button } from "@myds/react/button";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";

/**
 * ### Overview
 * A dialog that displays a message with an optional action.
 *
 * ### Usage
 * ```tsx
 * import { AlertDialog, AlertDialogTrigger } from "@myds/react/alert-dialog";
 *
 * <AlertDialog
 *   title="Berjaya"
 *   description="Dialog sedang ditunjukkan tanpa sebarang masalah."
 *   actions={{
 *     cancel: "Kembali",
 *     continue: "Teruskan",
 *   }}
 *   variant="success"
 * >
 *   <AlertDialogTrigger>
 *     <Button variant="primary-fill" size="medium">
 *       Tunjuk Dialog
 *     </Button>
 *   </AlertDialogTrigger>
 * </AlertDialog>
 * ```
 */
const meta: Meta = {
  title: "@myds/react/AlertDialog",
  component: ({
    title,
    description,
    actionLabelCancel,
    actionLabelContinue,
    triggerButtonVariant,
    triggerButtonLabel,
    variant,
    theme,
  }) => (
    <AlertDialog
      title={title}
      description={description}
      actions={{
        cancel: actionLabelCancel,
        continue: actionLabelContinue,
      }}
      variant={variant}
      className={theme}
    >
      <AlertDialogTrigger className={theme}>
        <Button variant={triggerButtonVariant} size="medium">
          {triggerButtonLabel}
        </Button>
      </AlertDialogTrigger>
    </AlertDialog>
  ),
  parameters: {
    layout: "centered",
    controls: {
      exclude: [
        "title",
        "description",
        "actionLabelCancel",
        "actionLabelContinue",
        "triggerButtonLabel",
      ],
    },
  },
  args: {
    variant: "success",
    triggerButtonVariant: "primary-fill",
  },
  argTypes: {
    variant: {
      name: "Variant",
      description: "The variant of the alert dialog",
      control: "inline-radio",
      options: ["success", "warning", "danger"],
    },
    triggerButtonVariant: {
      name: "Trigger Button Variant",
      description: "The variant of the alert dialog trigger",
      control: "inline-radio",
      options: ["primary-fill", "danger-fill"],
    },
  },
} satisfies Meta<{
  title: string;
  description: string;
  actionLabelCancel: string;
  actionLabelContinue: string;
  triggerButtonVariant?: "primary-fill" | "danger-fill";
  triggerButtonLabel: string;
  variant: "success" | "warning" | "danger";
  theme?: "light" | "dark";
}>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents the dialog component with default variant.
 */
export const SuccessLight: Story = createStory({
  title: "Berjaya",
  description: "Dialog sedang ditunjukkan tanpa sebarang masalah.",
  actionLabelCancel: "Batal",
  actionLabelContinue: "Teruskan",
  triggerButtonLabel: "Tunjuk Dialog",
});

export const SuccessDark: Story = createStory(
  {
    title: "Berjaya",
    description: "Dialog sedang ditunjukkan tanpa sebarang masalah.",
    actionLabelCancel: "Batal",
    actionLabelContinue: "Teruskan",
    triggerButtonLabel: "Tunjuk Dialog",
    theme: "dark",
  },
  "dark",
);

/**
 * This story represents the dialog component with warning variant.
 */
export const WarningLight: Story = createStory({
  title: "Perhatian",
  description:
    "Mengubah tetapan ini akan mempengaruhi cara perisian anda berfungsi. Adakah anda mahu meneruskan?",
  actionLabelCancel: "Kembali",
  actionLabelContinue: "Ya, teruskan",
  triggerButtonLabel: "Tunjuk Dialog",
  variant: "warning",
});

export const WarningDark: Story = createStory(
  {
    title: "Perhatian",
    description:
      "Mengubah tetapan ini akan mempengaruhi cara perisian anda berfungsi. Adakah anda mahu meneruskan?",
    actionLabelCancel: "Kembali",
    actionLabelContinue: "Ya, teruskan",
    triggerButtonLabel: "Tunjuk Dialog",
    variant: "warning",
    theme: "dark",
  },
  "dark",
);

/**
 * This story represents the dialog component with danger variant.
 */
export const DangerLight: Story = createStory({
  title: "Bahaya",
  description:
    "Tindakan ini akan memadamkan data secara kekal dan tidak dapat dikembalikan. Adakah anda mahu meneruskan?",
  actionLabelCancel: "Batal",
  actionLabelContinue: "Ya, teruskan",
  triggerButtonVariant: "danger-fill",
  triggerButtonLabel: "Padam data",
  variant: "danger",
});

export const DangerDark: Story = createStory(
  {
    title: "Bahaya",
    description:
      "Tindakan ini akan memadamkan data secara kekal dan tidak dapat dikembalikan. Adakah anda mahu meneruskan?",
    actionLabelCancel: "Batal",
    actionLabelContinue: "Ya, teruskan",
    triggerButtonVariant: "danger-fill",
    triggerButtonLabel: "Padam data",
    variant: "danger",
    theme: "dark",
  },
  "dark",
);
