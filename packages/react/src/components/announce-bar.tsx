import { ComponentProps, forwardRef, ForwardRefExoticComponent } from "react";
import { clx } from "../utils";
import { Tag } from "./tag";

/**
 * AnnounceBar component description.
 * @component
 * @example
 * <AnnounceBar>
 *   <AnnounceBarTag variant="warning">
 *     Maintenance
 *   </AnnounceBarTag>
 *   <AnnounceBarDescription>
 *     <p>This service is undergoing maintenance. Thank you for your patience. <Link *underline="always" primary href="#">Send us your feedback here.</Link></p>
 *   </AnnounceBarDescription>
 * </AnnounceBar>
 */

interface AnnounceBarProps extends ComponentProps<"div"> {
  border?: boolean;
}
const AnnounceBar: ForwardRefExoticComponent<AnnounceBarProps> = forwardRef(
  ({ className, children, border = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx(
          "mx-[18px] flex flex-row gap-2 py-2 md:mx-6",
          border && "border-otl-gray-200 border-b",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

const AnnounceBarTag: typeof Tag = Tag;

const AnnounceBarDescription: ForwardRefExoticComponent<ComponentProps<"div">> =
  forwardRef(({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clx(
          "min-height-[28px] text-txt-black-700 font-body flex items-center text-sm",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  });

export { AnnounceBar, AnnounceBarTag, AnnounceBarDescription };
