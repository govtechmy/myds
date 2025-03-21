import React, {
  ComponentProps,
  createContext,
  forwardRef,
  ForwardRefExoticComponent,
  FunctionComponent,
  useContext,
  useState,
} from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogTitle,
  DialogPortal,
} from "@radix-ui/react-dialog";
import { clx } from "../utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { CrossIcon } from "../icons/cross";

interface CookieBannerContextValue {
  showPreferences: boolean;
  setShowPreferences: (show: boolean) => void;
}

const CookieBannerContext = createContext<CookieBannerContextValue>({
  showPreferences: false,
  setShowPreferences: () => {},
});

type CookieBannerProps = ComponentProps<typeof Dialog> & {
  className?: string;
};

const cookie_content_cva = cva([
  "bg-bg-white p-4.5 shadow-card border-otl-gray-200 fixed bottom-0 right-0 z-30 max-w-[500px]",
  "space-y-1 rounded-lg border transition-all outline-none",
  "data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-full data-[state=open]:fade-in data-[state=open]:duration-400",
  "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full data-[state=closed]:fade-out data-[state=closed]:duration-200",
  "sm:mb-4 sm:mr-4 sm:p-6",
]);

const CookieBanner: FunctionComponent<CookieBannerProps> = ({
  className,
  children,
  ...props
}) => {
  const [showPreferences, setShowPreferences] = useState(false);
  const resetPreferences = () => setShowPreferences(false);

  return (
    <CookieBannerContext.Provider
      value={{ showPreferences, setShowPreferences }}
    >
      <Dialog {...props}>
        <DialogPortal>
          <DialogContent
            className={clx(cookie_content_cva(), className)}
            onInteractOutside={resetPreferences}
            {...props}
          >
            <DialogClose className="ring-fr-primary absolute right-0 top-0 mr-4 mt-4 rounded-md p-1.5 outline-none transition-all focus:ring">
              <CrossIcon className="size-4 shrink-0" />
            </DialogClose>
            {children}
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </CookieBannerContext.Provider>
  );
};

const cookie_action_cva = cva(
  ["w-full flex-col justify-start gap-[0.5rem] p-0 pt-3 sm:flex-row"],
  {
    variants: {
      showPreferences: {
        true: "flex",
        false: "hidden",
      },
    },
    defaultVariants: {
      showPreferences: false,
    },
  },
);

const CookieBannerTitle: ForwardRefExoticComponent<
  ComponentProps<typeof DialogTitle>
> = forwardRef(({ className, ...props }, ref) => {
  return (
    <DialogTitle
      ref={ref}
      className={clx(
        "text-body-md font-body text-txt-black-900 font-semibold",
        className,
      )}
      {...props}
    />
  );
});
const CookieBannerDescription: ForwardRefExoticComponent<
  ComponentProps<typeof DialogDescription>
> = forwardRef(({ className, ...props }, ref) => {
  return (
    <DialogDescription
      ref={ref}
      className={clx(
        "text-body-sm font-body text-txt-black-900 font-normal",
        className,
      )}
      {...props}
    />
  );
});

const CookieBannerAction: ForwardRefExoticComponent<
  ComponentProps<"div"> & { preferences?: boolean }
> = forwardRef(({ className, preferences = false, ...props }, ref) => {
  const context = useContext(CookieBannerContext);

  if (!context)
    throw new Error("CookieBannerAction must be used within CookieBanner");

  return (
    <div
      ref={ref}
      className={clx(
        cookie_action_cva({
          showPreferences: context.showPreferences === preferences,
        }),
        className,
      )}
      {...props}
    />
  );
});

const CookieBannerPreferences: ForwardRefExoticComponent<
  ComponentProps<typeof DialogDescription>
> = forwardRef(({ children, className, ...props }, ref) => {
  const context = useContext(CookieBannerContext);

  if (!context)
    throw new Error("CookieBannerPreferences must be used within CookieBanner");
  if (!context.showPreferences) return null;

  return (
    <DialogDescription
      ref={ref}
      className={clx("flex flex-col gap-2 px-0 py-3", className)}
      {...props}
    >
      {children}
    </DialogDescription>
  );
});

const CookieBannerPreferencesTrigger: ForwardRefExoticComponent<
  ComponentProps<typeof Button>
> = forwardRef(({ children, className, asChild = false, ...props }, ref) => {
  const context = useContext(CookieBannerContext);
  if (!context)
    throw new Error(
      "CookieBannerPreferencesTrigger must be used within CookieBanner",
    );

  const togglePreferences = () => {
    context.setShowPreferences(!context.showPreferences);
  };

  const Comp = asChild ? Slot : Button;
  return (
    <Comp
      variant="primary-outline"
      size="medium"
      className={clx("w-full justify-center sm:w-auto", className)}
      onClick={togglePreferences}
      {...props}
      ref={ref}
    >
      {children}
    </Comp>
  );
});

const CookieBannerClose = DialogClose;
CookieBanner.displayName = "CookieBanner";
CookieBannerAction.displayName = "CookieBannerAction";
CookieBannerDescription.displayName = "CookieBannerDescription";
CookieBannerClose.displayName = "CookieBannerClose";
CookieBannerPreferences.displayName = "CookieBannerPreferences";
CookieBannerTitle.displayName = "CookieBannerTitle";
CookieBannerPreferencesTrigger.displayName = "CookieBannerPreferencesTrigger";

export {
  CookieBanner,
  CookieBannerTitle,
  CookieBannerDescription,
  CookieBannerClose,
  CookieBannerPreferences,
  CookieBannerAction,
  CookieBannerPreferencesTrigger,
};
