import { ClockIcon } from "@govtechmy/myds-react/icon";
import { clx } from "@govtechmy/myds-react/utils";
// import exampleImage from "../assets/addon-library.png";

export default function Article() {
  return (
    <div
      className={clx(
        "w-full pb-16 pt-16",
        "gap-4.5 px-4.5 grid grid-cols-4",
        "md:gap-6 md:px-6 md:max-lg:grid-cols-8",
        "lg:grid-cols-12",
        "font-body",
      )}
    >
      <div
        className={clx(
          "col-span-full flex flex-col justify-start",
          "md:mx-auto md:w-[640px]",
        )}
      >
        <div className="flex flex-col justify-start gap-3">
          <h5 className="text-txt-primary text-body-sm">Updates</h5>
          <h1 className="text-txt-black-900 text-heading-sm text-balance font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
            esse.
          </h1>
          <div className="text-txt-black-500 text-body-sm mb-6 flex flex-row items-center gap-2">
            <ClockIcon />
            <p>10 mins read</p>
            <p>10 June 2024, 2:30 pm</p>
          </div>
        </div>
        <p className="text-body-md font-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          adipisci ut, animi amet vel commodi voluptatem quis quos,
          reprehenderit neque totam itaque quod voluptates enim debitis maxime
          recusandae natus est optio velit voluptate! Quam accusantium
          laudantium facere. Accusamus at eum quis nulla corrupti mollitia
          itaque dolores sit blanditiis, molestias nostrum, non repellat ratione
          minus, tempora commodi animi cupiditate facilis aut sed. Labore, odit.
          Libero, facere, est aspernatur quibusdam cupiditate omnis incidunt
          fugiat ea animi culpa deserunt laborum adipisci atque! Voluptatum,
          suscipit illo vel quidem laborum recusandae provident tenetur quos
          placeat expedita eos dolor, blanditiis nesciunt? Facilis eos
          blanditiis dolor vitae?
        </p>
      </div>
      <picture className="col-span-full mx-auto mt-6 md:max-w-[740px]">
        <img
          src="../stories/assets/addon-library.png"
          className="w-full object-cover"
        />
      </picture>
    </div>
  );
}
