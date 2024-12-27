import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogIcon,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@govtechmy/myds-react/alert-dialog";
import { Button } from "@govtechmy/myds-react/button";
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
 * <AlertDialog>
 *   <AlertDialogTrigger>
 *     <Button variant="primary-fill" size="medium">
 *       Tunjuk Dialog
 *     </Button>
 *   </AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogHeader>
 *       <AlertDialogIcon variant="success" />
 *       <AlertDialogTitle>Berjaya</AlertDialogTitle>
 *       <AlertDialogDescription>Dialog sedang ditunjukkan tanpa sebarang masalah.</AlertDialogDescription>
 *     </AlertDialogHeader>
 *     <AlertDialogFooter>
 *       <AlertDialogClose>
 *         <Button variant="default-outline" size="medium">
 *           Batal
 *         </Button>
 *       </AlertDialogClose>
 *       <AlertDialogClose>
 *         <Button
 *           variant="primary-fill"
 *           size="medium"
 *         >
 *           Teruskan
 *         </Button>
 *       </AlertDialogClose>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialog>
 * ```
 */
const meta: Meta = {
  title: "@govtechmy/myds-react/AlertDialog",
  component: ({ triggerButtonVariant, variant, theme }) => (
    <AlertDialog>
      <AlertDialogTrigger className={theme}>
        <Button variant={triggerButtonVariant} size="medium">
          Tunjuk Dialog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={theme}>
        <AlertDialogHeader>
          <AlertDialogIcon variant={variant} />
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
        </AlertDialogHeader>
        <AlertDialogFooter className={theme}>
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
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    layout: "centered",
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
  triggerButtonVariant?: "primary-fill" | "danger-fill";
  variant: "success" | "warning" | "danger";
  theme?: "light" | "dark";
}>;

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
