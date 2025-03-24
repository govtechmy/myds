import { Paragraph } from "@/components/Paragraph";
import { Tag } from "@/components/Tag";
import Checkmark from "@/icons/checkmark";
import Production from "@/icons/production";
import Star from "@/icons/star";
import { clx } from "@govtechmy/myds-react/utils";

type DataItem = {
  type: string;
  year: string;
  date: string;
  title: string;
  description: string;
};

type Props = {
  id?: string;
  className?: string;
  cover: {
    tag: string;
    title: string;
    description: string;
  };
  data: DataItem[];
};

// Sort the data into sections. The items in even-numbered sections are reversed horizontally.
function sortData(data: DataItem[], sectionIndex: number) {
  if (sectionIndex % 2 === 0) {
    return data;
  }

  const oddData = data.filter((_, i) => i % 2 !== 0);
  const evenData = data.filter((_, i) => i % 2 === 0);
  const result: DataItem[] = [];

  for (let i = 0; i < data.length; i++) {
    const item = i % 2 === 0 ? oddData.shift() : evenData.shift();

    if (item) {
      result.push(item);
    }
  }

  return result;
}

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
  const itemPositions = dataByYears.map((data) => {
    return data.length % 2 === 0 ? 1 : -1;
  });

  return (
    <div className="w-full">
      <div className="border-otl-divider mx-auto grid max-w-screen-xl grid-cols-2 border-x lg:grid-cols-12 lg:gap-y-[3.25rem]">
        <div
          className={clx(
            "col-span-full gap-y-[1.125rem] space-y-[18px] px-[1.125rem] pt-[3rem]",
            "bg-bg-white z-[10] h-fit pb-[2rem]",
            "md:px-0 md:pt-[5.25rem]",
            "md:mx-auto md:max-lg:w-[600px]",
            "lg:border-washed-100 border-b lg:sticky lg:top-[5.25rem] lg:col-span-3 lg:col-start-2 lg:border-b-0 lg:pb-[5.25rem]",
          )}
        >
          <Tag>{props.cover.tag}</Tag>

          <h2 className="text-pretty">{props.cover.title}</h2>
          <Paragraph className="text-pretty">
            {props.cover.description}
          </Paragraph>
        </div>
        <div
          className={clx(
            "relative col-span-full flex h-full justify-start sm:justify-center lg:col-span-7 lg:col-start-6",
            "md:max-lg:mx-auto md:max-lg:w-[700px]",
            "lg-mr-[1.5rem] mx-[1.125rem] lg:ml-0",
          )}
        >
          <div className="bg-outline-200 absolute -z-10 h-full w-px max-sm:left-[3.5px]" />
          <div
            className={clx(
              "flex flex-col pb-[3rem] pt-[1.875rem] lg:pb-[3.563rem] lg:pt-[6.438rem]",
            )}
          >
            {dataByYears.map((data, i) => (
              <>
                <div
                  className={clx(
                    "bg-bg-primary-50 text-txt-primary mb-[0.75rem] ml-[1.875rem] self-start rounded-full px-[0.5rem] py-[0.125rem] text-[0.75rem] font-medium leading-[1.125rem] tracking-[0.075rem] sm:ml-0 sm:self-center",
                    // Add margin to all but the first item
                    i > 0 && "mt-[1.875rem]",
                  )}
                >
                  {data[0]?.year}
                </div>
                <div
                  key={i}
                  className={clx(
                    "grid grid-cols-1 gap-x-14 gap-y-3 max-sm:ml-8 sm:grid-cols-2",
                    /* Add margin bottom to the last item to accommodate overflowing content caused by y-translation */
                    "sm:last:mb-[3rem]",
                  )}
                >
                  {/* List for tablet screen size and beyond */}
                  <ItemList
                    data={sortData(data, i)}
                    trailing={itemPositions[i] === 1}
                    className={clx("itemlist-lg max-sm:hidden")}
                  />
                  {/* List for mobile screen size */}
                  <ItemList
                    data={data}
                    trailing={itemPositions[i] === 1}
                    className={"itemlist-sm sm:hidden"}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ItemList(props: {
  data: DataItem[];
  trailing: boolean;
  className?: string;
}) {
  return (
    <>
      {props.data.map((item, j) => (
        <div
          key={j}
          className={clx(
            "relative flex flex-col justify-center",
            props.trailing
              ? "sm:odd:translate-y-[calc(50%+6px)]"
              : "sm:even:translate-y-[calc(50%+6px)]",
            props.className,
          )}
        >
          <div
            className={clx(
              "border-otl-gray-200 relative flex h-fit flex-col gap-1 rounded-xl border px-4 py-3",
              "hover:border-otl-primary-300 hover:ring-fr-primary group hover:ring-1",
            )}
          >
            <div
              className={clx(
                item.type === "highlight" ||
                  item.type == "launched" ||
                  item.type == "development"
                  ? "absolute right-3 top-2 flex size-6 items-center justify-center rounded-full"
                  : "hidden",
                item.type === "highlight"
                  ? "bg-bg-white-hover"
                  : item.type === "launched"
                    ? "bg-bg-success-50"
                    : item.type === "development"
                      ? "bg-bg-primary-50"
                      : "",
              )}
            >
              {item.type === "highlight" ? (
                <Star className="size-4 stroke-2 text-[#EA740F]" />
              ) : item.type === "launched" ? (
                <Checkmark className="text-success-600 size-[0.625rem] stroke-2" />
              ) : item.type === "development" ? (
                <Production className="text-txt-primary size-[0.875rem] stroke-2" />
              ) : (
                <></>
              )}
            </div>
            <p className="text-dim-500 line-clamp-1 text-xs font-medium uppercase tracking-widest">
              {item.date}
            </p>
            <p className="text-black-900 font-medium">{item.title}</p>
            <p className="text-black-700 text-sm">{item.description}</p>
            <div
              className={clx(
                j % 2 === 0 ? "max-sm:-left-7 sm:-right-7" : "-left-7",
                `border-outline-400 absolute top-1/2 h-px w-[26px] -translate-y-1/2 transform border border-dashed`,
                "group-hover:border-otl-primary-300 group-hover:border-y-2",
              )}
            >
              <div
                className={clx(
                  j % 2 === 0
                    ? "group-hover:-right-[6.5px] max-sm:-left-1.5 group-hover:max-sm:-left-[6.5px] sm:-right-1.5"
                    : "-left-1.5 group-hover:-left-[6.5px]",
                  "bg-bg-primary-600 absolute top-1/2 size-2 -translate-y-1/2 transform rounded-full",
                  "ring-fr-primary ring-offset-bg-white ring-offset-[3px] group-hover:ring",
                )}
              >
                <div className="from-bg-primary-600 absolute -top-[3.75rem] left-[3px] h-[3.75rem] w-px bg-gradient-to-t from-0% to-transparent to-100%" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
