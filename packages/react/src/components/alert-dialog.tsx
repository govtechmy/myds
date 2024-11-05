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
} from "@myds/react/dialog";
import { Button } from "@myds/react/button";
import {
  WarningCircleIcon,
  CheckCircleIcon,
  WarningDiamondIcon,
} from "@myds/react/icon";

const AlertDialogTrigger = DialogTrigger;

export type AlertDialogVariant = "success" | "warning" | "danger";

export interface AlertDialogProps {
  title: string;
  description: string;
  actions: {
    cancel: string;
    continue: string;
  };
  children: React.ReactNode;
  variant: AlertDialogVariant;
  className?: string;
}

function AlertDialog({
  title,
  description,
  actions,
  children,
  variant,
  className,
}: AlertDialogProps) {
  return (
    <Dialog>
      {children}
      <DialogContent withCloseButton={true} className={className}>
        <DialogHeader>
          <DialogIcon variant={variant}>
            {variant === "success" ? (
              <CheckCircleIcon />
            ) : variant === "warning" ? (
              <WarningCircleIcon />
            ) : (
              <WarningDiamondIcon />
            )}
          </DialogIcon>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter fillWidth={true}>
          {variant !== "success" && (
            <DialogClose asChild>
              <Button variant="default-outline" size="medium">
                {actions.cancel}
              </Button>
            </DialogClose>
          )}
          <DialogClose asChild>
            <Button
              variant={variant === "danger" ? "danger-fill" : "primary-fill"}
              size="medium"
            >
              {actions.continue}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { AlertDialog, AlertDialogTrigger };
