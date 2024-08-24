import BorderedSection from "@/components/BorderedSection";
import { Paragraph } from "@/components/Paragraph";
import { Tag } from "@/components/Tag";
import Checkmark from "@/icons/checkmark";
import Production from "@/icons/production";
import Star from "@/icons/star";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  className?: string;
  cover: {
    tag: string;
    title: string;
    description: string;
  };
  data: {
    type: string;
    year: string;
    date: string;
    title: string;
    description: string;
  }[];
};

export default function Timeline(props: Props) {
  // Parse the year in each entry into a unique list of integers and sort them in ascending order
  const years = Array.from(
    new Set(props.data.map((item) => parseInt(item.year))),
  ).sort((a, b) => a - b);

  // Produce an array of arrays, each containing the data for a given year
  const dataByYears = years.map((year) => {
    return props.data.filter((item) => parseInt(item.year) === year);
  });

  // Determine the starting position of the first item of each year in the timeline (1 = right, -1 = left)
  const itemPositions = dataByYears.map((data, i) => {
    return data.length % 2 === 0 ? 1 : -1;
  });

  return (
    <BorderedSection id={props.id} className={cn("px-0", props.className)}>
      <div className="grid grid-cols-2 lg:grid-cols-12 lg:gap-y-[3.25rem]">
        <div
          className={cn(
            "col-span-full gap-y-[1.125rem] space-y-4.5 px-[1.125rem] pt-[3rem]",
            "z-[10] h-fit bg-background pb-[2rem]",
            "md:px-0 md:pt-[5.25rem]",
            "md:mx-auto md:max-lg:w-[600px]",
            "lg:sticky lg:top-[5.25rem] lg:col-span-3 lg:col-start-2 lg:border-b lg:border-b-0 lg:border-washed-100 lg:pb-[5.25rem]",
          )}
        >
          <div className="flex gap-x-3 text-foreground">
            <Tag>{props.cover.tag}</Tag>
          </div>
          <h3 className="text-pretty text-[1.5rem] font-semibold leading-[2rem] lg:text-[1.875rem] lg:leading-[2.375rem]">
            {props.cover.title}
          </h3>
          <Paragraph className="text-pretty text-black-700">
            {props.cover.description}
          </Paragraph>
        </div>
        <div
          className={cn(
            "relative col-span-full flex h-full justify-start sm:justify-center lg:col-span-7 lg:col-start-6",
            "md:max-lg:mx-auto md:max-lg:w-[700px]",
            "lg-mr-[1.5rem] mx-[1.125rem] lg:ml-0",
          )}
        >
          <div className="absolute -z-10 h-full w-px bg-outline-200 max-sm:left-[3.5px]" />
          <div
            className={cn(
              "flex flex-col pb-[3rem] pt-[1.875rem] lg:pb-[3.563rem] lg:pt-[6.438rem]",
            )}
          >
            {dataByYears.map((data, i) => (
              <>
                <div
                  className={cn(
                    "mb-[0.75rem] ml-[1.875rem] self-start rounded-full bg-brand-50 px-[0.5rem] py-[0.125rem] text-[0.75rem] font-medium leading-[1.125rem] tracking-[0.075rem] text-brand-600 sm:ml-0 sm:self-center",
                    // Add margin to all but the first item
                    i > 0 && "mt-[1.875rem]",
                  )}
                >
                  {data[0].year}
                </div>
                <div
                  key={i}
                  className={cn(
                    "grid grid-cols-1 gap-x-14 gap-y-3 max-sm:ml-8 sm:grid-cols-2",
                    /* Add margin bottom to the last item to accommodate overflowing content caused by y-translation */
                    "sm:last:mb-[3rem]",
                  )}
                >
                  {data.map((item, j) => (
                    <div
                      key={j}
                      className={cn(
                        "relative flex flex-col justify-center",
                        /* Add margin top to the first element and margin bottom to the last element to make gaps for the year */
                        itemPositions[i] === 1
                          ? "sm:odd:translate-y-[calc(50%+6px)]"
                          : "sm:even:translate-y-[calc(50%+6px)]",
                      )}
                    >
                      <div
                        className={cn(
                          "relative flex h-fit flex-col gap-1 rounded-xl border border-outline-200 px-4 py-3",
                          "group hover:border-brand-300 hover:ring-1 hover:ring-brand-300",
                        )}
                      >
                        <div
                          className={cn(
                            item.type === "highlight" ||
                              item.type == "launched" ||
                              item.type == "development"
                              ? "absolute right-3 top-2 flex size-6 items-center justify-center rounded-full"
                              : "hidden",
                            item.type === "highlight"
                              ? "bg-[#FFF1E5]"
                              : item.type === "launched"
                                ? "bg-success-50"
                                : item.type === "development"
                                  ? "bg-brand-50"
                                  : "",
                          )}
                        >
                          {item.type === "highlight" ? (
                            <Star className="size-4 stroke-2 text-[#EA740F]" />
                          ) : item.type === "launched" ? (
                            <Checkmark className="size-[0.625rem] stroke-2 text-success-600" />
                          ) : item.type === "development" ? (
                            <Production className="size-[0.875rem] stroke-2 text-brand-600" />
                          ) : (
                            <></>
                          )}
                        </div>
                        <p className="line-clamp-1 text-xs font-medium uppercase tracking-widest text-dim-500">
                          {item.date}
                        </p>
                        <p className="font-medium text-black-900">
                          {item.title}
                        </p>
                        <p className="text-sm text-black-700">
                          {item.description}
                        </p>
                        <div
                          className={cn(
                            j % 2 === 0
                              ? "max-sm:-left-7 sm:-right-7"
                              : "-left-7",
                            `absolute top-1/2 h-px w-[26px] -translate-y-1/2 transform border border-dashed border-outline-400`,
                            "group-hover:border-y-2 group-hover:border-brand-300",
                          )}
                        >
                          <div
                            className={cn(
                              j % 2 === 0
                                ? "group-hover:-right-[6.5px] max-sm:-left-1.5 group-hover:max-sm:-left-[6.5px] sm:-right-1.5"
                                : "-left-1.5 group-hover:-left-[6.5px]",
                              "absolute top-1/2 size-2 -translate-y-1/2 transform rounded-full bg-brand-600",
                              "ring-brand-300 ring-offset-[3px] group-hover:ring",
                            )}
                          >
                            <div className="absolute -top-[3.75rem] left-[3px] h-[3.75rem] w-px bg-gradient-to-t from-brand-600 from-0% to-transparent to-100%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </BorderedSection>
  );
}
