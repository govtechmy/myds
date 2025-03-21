import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
  FunctionComponent,
  useContext,
} from "react";
import { clx } from "../utils";

const AlertDialogTrigger = DialogTrigger;
const AlertDialogTitle: typeof DialogTitle = DialogTitle;
const AlertDialogDescription: ForwardRefExoticComponent<
  ComponentProps<typeof DialogDescription>
> = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <DialogDescription ref={ref} className={clx("pt-2", className)} {...props}>
      {children}
    </DialogDescription>
  );
});
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

const AlertDialog: FunctionComponent<AlertDialogProps> = ({
  variant,
  ...props
}) => {
  return (
    <AlertDialogContext.Provider value={{ variant }}>
      <Dialog {...props} />
    </AlertDialogContext.Provider>
  );
};
interface AlertDialogActionProps
  extends Omit<ComponentProps<typeof DialogFooter>, "border"> {}

const AlertDialogAction: ForwardRefExoticComponent<AlertDialogActionProps> =
  forwardRef(({ children, className, ...props }, ref) => {
    return (
      <DialogFooter
        ref={ref}
        className={clx("px-0 pb-0", className)}
        {...props}
      >
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
      <DialogContent className="py-6">
        <DialogIcon variant={map[variant].variant} className="mb-4">
          {map[variant].icon}
        </DialogIcon>
        <div>{children}</div>
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
