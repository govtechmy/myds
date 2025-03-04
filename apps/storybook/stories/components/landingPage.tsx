import { Masthead } from "@govtechmy/myds-react/masthead";
import { clx } from "@govtechmy/myds-react/utils";

export default function LandingPage() {
  return (
    <div>
      <Masthead />
      <p>This is it</p>
      <div
        className={clx(
          "w-full pb-16 pt-16",
          "gap-4.5 px-4.5 grid grid-cols-4",
          "md:gap-6 md:px-6 md:max-lg:grid-cols-8",
          "lg:grid-cols-12",
          "font-body",
        )}
      ></div>
    </div>
  );
}
