import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ForwardRefExoticComponent,
  JSXElementConstructor,
  ReactElement,
} from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";

import { clx } from "../utils";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

/**----------------------------------------------
 * *                   INFO
 *   Commented components remain pending
 *   until design for the use case are finalised
 *
 *---------------------------------------------**/

const Dropdown = DropdownPrimitive.Root;

const DropdownTrigger: ForwardRefExoticComponent<
  ComponentProps<typeof DropdownPrimitive.Trigger>
> = forwardRef(({ className, asChild = true, ...props }, ref) => {
  return <DropdownPrimitive.Trigger ref={ref} asChild={asChild} {...props} />;
});

// const DropdownGroup = DropdownPrimitive.Group;

// const DropdownPortal = DropdownPrimitive.Portal;

// const DropdownSub = DropdownPrimitive.Sub;

// const DropdownRadioGroup = DropdownPrimitive.RadioGroup;

// const DropdownSubTrigger = forwardRef<
//   ElementRef<typeof DropdownPrimitive.SubTrigger>,
//   ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger> & {
//     inset?: boolean;
//   }
// >(({ className, inset, children, ...props }, ref) => (
//   <DropdownPrimitive.SubTrigger
//     ref={ref}
//     className={clx(
//       "focus:bg-accent data-[state=open]:bg-accent flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//       inset && "pl-8",
//       className,
//     )}
//     {...props}
//   >
//     {children}
//     <ChevronRightIcon className="ml-auto" />
//   </DropdownPrimitive.SubTrigger>
// ));
// DropdownSubTrigger.displayName = DropdownPrimitive.SubTrigger.displayName;

// const DropdownSubContent = forwardRef<
//   ElementRef<typeof DropdownPrimitive.SubContent>,
//   ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>
// >(({ className, ...props }, ref) => (
//   <DropdownPrimitive.SubContent
//     ref={ref}
//     className={clx(
//       "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
//       className,
//     )}
//     {...props}
//   />
// ));
// DropdownSubContent.displayName = DropdownPrimitive.SubContent.displayName;

const dropdown_content_cva = cva([
  "bg-bg-dialog border-otl-gray-200 shadow-context-menu z-50 min-w-[10rem] overflow-hidden rounded-md border p-[5px]",
  "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
]);

const DropdownContent = forwardRef<
  ElementRef<typeof DropdownPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>
>(
  (
    { className, side = "bottom", align = "end", sideOffset = 4, ...props },
    ref,
  ) => (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        side={side}
        align={align}
        className={dropdown_content_cva({ className })}
        {...props}
      />
    </DropdownPrimitive.Portal>
  ),
);
DropdownContent.displayName = DropdownPrimitive.Content.displayName;

const dropdown_item_cva = cva(
  [
    "rounded-xs relative flex cursor-default select-none items-center gap-2 px-2.5 py-1.5 outline-none transition-colors [&>svg]:size-4 [&>svg]:shrink-0",
    "text-sm font-medium cursor-pointer",
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
  ],
  {
    variants: {
      variant: {
        default:
          "text-txt-black-700 focus:text-txt-black-900 focus:bg-bg-washed-active ",
        danger: "text-txt-danger focus:bg-bg-danger-50 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const DropdownItem = forwardRef<
  ElementRef<typeof DropdownPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> &
    VariantProps<typeof dropdown_item_cva>
>(({ className, variant, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className={dropdown_item_cva({ variant, className })}
    {...props}
  />
));
DropdownItem.displayName = DropdownPrimitive.Item.displayName;

const dropdown_item_icon_cva = cva(
  "block stroke-inherit text-inherit stroke-[1.5px] size-4 shrink-0",
);

interface DropdownItemIconProps extends ComponentProps<"div"> {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}

const DropdownItemIcon: ForwardRefExoticComponent<DropdownItemIconProps> =
  forwardRef(({ children, className, ...props }, ref) => {
    return (
      <Slot
        ref={ref}
        className={dropdown_item_icon_cva({ className })}
        {...props}
      >
        {children}
      </Slot>
    );
  });

DropdownItemIcon.displayName = "DropdownItemIcon";

// const DropdownCheckboxItem = forwardRef<
//   ElementRef<typeof DropdownPrimitive.CheckboxItem>,
//   ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem>
// >(({ className, children, checked, ...props }, ref) => (
//   <DropdownPrimitive.CheckboxItem
//     ref={ref}
//     className={clx(
//       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//       className,
//     )}
//     checked={checked}
//     {...props}
//   >
//     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
//       <DropdownPrimitive.ItemIndicator>
//         <Check className="h-4 w-4" />
//       </DropdownPrimitive.ItemIndicator>
//     </span>
//     {children}
//   </DropdownPrimitive.CheckboxItem>
// ));
// DropdownCheckboxItem.displayName = DropdownPrimitive.CheckboxItem.displayName;

// const DropdownRadioItem = forwardRef<
//   ElementRef<typeof DropdownPrimitive.RadioItem>,
//   ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioItem>
// >(({ className, children, ...props }, ref) => (
//   <DropdownPrimitive.RadioItem
//     ref={ref}
//     className={clx(
//       "focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//       className,
//     )}
//     {...props}
//   >
//     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
//       <DropdownPrimitive.ItemIndicator>
//         <Circle className="h-2 w-2 fill-current" />
//       </DropdownPrimitive.ItemIndicator>
//     </span>
//     {children}
//   </DropdownPrimitive.RadioItem>
// ));
// DropdownRadioItem.displayName = DropdownPrimitive.RadioItem.displayName;

// const DropdownLabel = forwardRef<
//   ElementRef<typeof DropdownPrimitive.Label>,
//   ComponentPropsWithoutRef<typeof DropdownPrimitive.Label>
// >(({ className, ...props }, ref) => (
//   <DropdownPrimitive.Label
//     ref={ref}
//     className={clx("px-2 py-1.5 text-xs font-semibold", className)}
//     {...props}
//   />
// ));
// DropdownLabel.displayName = DropdownPrimitive.Label.displayName;

// const DropdownSeparator = forwardRef<
//   ElementRef<typeof DropdownPrimitive.Separator>,
//   ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
// >(({ className, ...props }, ref) => (
//   <DropdownPrimitive.Separator
//     ref={ref}
//     className={clx("bg-otl-divider -mx-1 my-1 h-px", className)}
//     {...props}
//   />
// ));
// DropdownSeparator.displayName = DropdownPrimitive.Separator.displayName;

// const DropdownShortcut = ({
//   className,
//   ...props
// }: HTMLAttributes<HTMLSpanElement>) => {
//   return (
//     <span
//       className={clx("ml-auto text-xs tracking-widest opacity-60", className)}
//       {...props}
//     />
//   );
// };
// DropdownShortcut.displayName = "DropdownShortcut";

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownItemIcon,
  // DropdownCheckboxItem,
  // DropdownRadioItem,
  // DropdownLabel,
  // DropdownSeparator,
  // DropdownShortcut,
  // DropdownGroup,
  // DropdownPortal,
  // DropdownSub,
  // DropdownSubContent,
  // DropdownSubTrigger,
  // DropdownRadioGroup,
};
