import {
  Dialog,
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

interface AlertDialogProps
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

interface AlertDialogActionProps extends ComponentProps<typeof DialogFooter> {}

const AlertDialogAction: ForwardRefExoticComponent<AlertDialogActionProps> =
  forwardRef(({ children, className, ...props }) => {
    return (
      <DialogFooter className={clx("p-0 pt-6", className)} {...props}>
        {children}
      </DialogFooter>
    );
  });

const AlertDialogContent: ForwardRefExoticComponent<
  ComponentProps<typeof DialogContent>
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
    <DialogContent ref={ref} {...props}>
      <DialogHeader>
        <DialogIcon variant={map[variant].variant}>
          {map[variant].icon}
        </DialogIcon>
        {children}
      </DialogHeader>
    </DialogContent>
  );
});

export {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogClose,
  AlertDialogTitle,
  AlertDialogTrigger,
};
