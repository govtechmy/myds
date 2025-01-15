import { clx } from "@govtechmy/myds-react/utils";
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
          "border-otl-divider px-4.5 mx-auto w-full max-w-screen-xl py-12 md:px-6 md:py-[5.25rem] xl:border-x",
          className,
        )}
      >
        {children}
      </section>
    </div>
  );
};

export default Section;
