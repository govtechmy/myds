import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogIcon,
  DialogTitle,
  DialogTrigger,
} from "@govtechmy/myds-react/dialog";
import {
  CheckCircleIcon,
  WarningCircleIcon,
  WarningDiamondIcon,
} from "@govtechmy/myds-react/icon";
import React from "react";

const AlertDialog = Dialog;
const AlertDialogTrigger = DialogTrigger;
const AlertDialogContent = DialogContent;
const AlertDialogHeader = DialogHeader;
const AlertDialogTitle = DialogTitle;
const AlertDialogDescription = DialogDescription;
const AlertDialogFooter = DialogFooter;

type AlertDialogVariant = "success" | "warning" | "danger";

function AlertDialogIcon({ variant }: { variant: AlertDialogVariant }) {
  return (
    <DialogIcon variant={variant}>
      {variant === "success" ? (
        <CheckCircleIcon />
      ) : variant === "warning" ? (
        <WarningCircleIcon />
      ) : (
        <WarningDiamondIcon />
      )}
    </DialogIcon>
  );
}

function AlertDialogClose({ children }: { children: React.ReactNode }) {
  return <DialogClose asChild>{children}</DialogClose>;
}

export {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogIcon,
  AlertDialogTitle,
  AlertDialogTrigger,
  type AlertDialogVariant,
};
