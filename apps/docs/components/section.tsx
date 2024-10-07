import { clx } from "@myds/react/utils";
import { FunctionComponent, ReactNode } from "react";

interface SectionProps {
  className?: string;
  children: ReactNode;
}

const Section: FunctionComponent<SectionProps> = ({ className, children }) => {
  return (
    <div className="w-full">
      <section
        className={clx(
          "mx-auto w-full max-w-screen-xl border-x px-[18px] py-12 md:px-6 md:py-[5.25rem]",
          className,
        )}
      >
        {children}
      </section>
    </div>
  );
};

export default Section;
