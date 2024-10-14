import React from "react";
import { Button } from "@myds/react/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@myds/react/dialog";
import type { Meta, StoryObj } from "@storybook/react";
import { createStory } from "../utils";

/**
 * ### Overview
 * A window placed on top of the primary window or another dialog.
 *
 * Compose your dialog like so:
 * ```
 * <Dialog />
 *   <DialogTrigger />
 *   <DialogContent />
 *     <DialogHeader />
 *       <DialogTitle />
 *       <DialogDescription />
 *     <DialogFooter />
 * ```
 *
 * ### Usage
 * ```tsx
 * import { Button } from "@myds/react/button";
 * import {
 *   Dialog,
 *   DialogContent,
 *   DialogDescription,
 *   DialogHeader,
 *   DialogTitle,
 *   DialogTrigger,
 * } from "@myds/react/dialog";
 *
 * <Dialog>
 *  <DialogTrigger>
 *    <Button variant="danger-fill" size="medium">
 *      Padam data
 *    </Button>
 *  </DialogTrigger>
 *  <DialogContent withCloseButton={true}>
 *    <DialogHeader>
 *      <DialogTitle>Adakah anda pasti?</DialogTitle>
 *      <DialogDescription>
 *        Tindakan ini tidak boleh dibatalkan. Ini akan menghapuskan
 *        data anda dari pelayar anda.
 *      </DialogDescription>
 *    </DialogHeader>
 *    <DialogFooter>
 *      <>
 *        <DialogClose asChild>
 *          <Button variant="default-outline" size="medium">
 *            Batal
 *          </Button>
 *        </DialogClose>
 *        <DialogClose asChild>
 *          <Button variant="danger-fill" size="medium">
 *            Ya, teruskan
 *          </Button>
 *        </DialogClose>
 *      </>
 *    </DialogFooter>
 *  </DialogContent>
 * </Dialog>
 * ```
 */
const meta: Meta = {
  title: "@myds/react/Dialog",
  component: ({ withCloseButton }) => (
    <Dialog>
      <DialogTrigger>
        <Button variant="danger-fill" size="medium">
          Padam data
        </Button>
      </DialogTrigger>
      <DialogContent withCloseButton={withCloseButton}>
        <DialogHeader>
          <DialogTitle>Adakah anda pasti?</DialogTitle>
          <DialogDescription>
            Tindakan ini tidak boleh dibatalkan. Ini akan menghapuskan data anda
            dari pelayar anda.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <>
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
          </>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    layout: "centered",
  },
  args: {
    withCloseButton: true,
  },
  argTypes: {
    withCloseButton: {
      defaultValue: true,
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Dialog & typeof DialogContent>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story represents the dialog component with default variant.
 */
export const Default: Story = createStory({
  withCloseButton: true,
});

export const WithoutCloseButton: Story = createStory({
  withCloseButton: false,
});
