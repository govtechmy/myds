import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogIcon,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./dialog";
import {
  CheckCircleIcon,
  InfoIcon,
  WarningCircleIcon,
  WarningDiamondIcon,
} from "../icons";
import {
  ComponentProps,
  createContext,
  forwardRef,
  ForwardRefExoticComponent,
  useContext,
} from "react";
import { clx } from "../utils";

const AlertDialogTrigger = DialogTrigger;
const AlertDialogTitle = DialogTitle;
const AlertDialogDescription = DialogDescription;
const AlertDialogClose = DialogClose;

interface AlertDialogContextProps {
  variant: "default" | "success" | "info" | "warning" | "danger";
}

const AlertDialogContext = createContext<AlertDialogContextProps>({
  variant: "default",
});

export interface AlertDialogProps
  extends ComponentProps<typeof Dialog>,
    AlertDialogContextProps {}

const AlertDialog: ForwardRefExoticComponent<AlertDialogProps> = forwardRef(
  ({ variant, ...props }) => {
    return (
      <AlertDialogContext.Provider value={{ variant }}>
        <Dialog {...props} />
      </AlertDialogContext.Provider>
    );
  },
);

export interface AlertDialogActionProps
  extends Omit<ComponentProps<typeof DialogFooter>, "border"> {}

const AlertDialogAction: ForwardRefExoticComponent<AlertDialogActionProps> =
  forwardRef(({ children, className, ...props }) => {
    return (
      <DialogFooter className={clx("px-0 pb-0", className)} {...props}>
        {children}
      </DialogFooter>
    );
  });

const AlertDialogContent: ForwardRefExoticComponent<
  ComponentProps<typeof DialogBody>
> = forwardRef(({ children, ...props }, ref) => {
  const { variant } = useContext(AlertDialogContext);

  const map = {
    default: {
      variant: "default",
      icon: <></>,
    },
    success: {
      variant: "success",
      icon: <CheckCircleIcon />,
    },
    info: {
      variant: "primary",
      icon: <InfoIcon />,
    },
    warning: {
      variant: "warning",
      icon: <WarningCircleIcon />,
    },
    danger: {
      variant: "danger",
      icon: <WarningDiamondIcon />,
    },
  } as const;

  return (
    <DialogBody ref={ref} {...props}>
      <DialogContent>
        <DialogIcon variant={map[variant].variant} className="mb-4">
          {map[variant].icon}
        </DialogIcon>
        <div className="space-y-2">{children}</div>
      </DialogContent>
    </DialogBody>
  );
});

AlertDialog.displayName = "AlertDialog";
AlertDialogContent.displayName = "AlertDialogContent";
AlertDialogDescription.displayName = "AlertDialogDescription";
AlertDialogAction.displayName = "AlertDialogAction";
AlertDialogClose.displayName = "AlertDialogClose";
AlertDialogTitle.displayName = "AlertDialogTitle";
AlertDialogTrigger.displayName = "AlertDialogTrigger";

export {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogClose,
  AlertDialogTitle,
  AlertDialogTrigger,
};
