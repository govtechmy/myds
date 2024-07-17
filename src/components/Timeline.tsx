import BorderedSection from "@/components/BorderedSection";
import { Paragraph } from "@/components/Paragraph";
import { Tag } from "@/components/Tag";
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
    date: string;
    title: string;
    description: string;
  }[];
};

export default function Timeline(props: Props) {
  return (
    <BorderedSection id={props.id} className={props.className}>
      <div className="grid grid-cols-2 gap-y-[3.25rem] lg:grid-cols-12">
        <div className="col-span-full gap-y-[1.125rem] space-y-4.5 pt-[3rem] lg:col-span-3 lg:col-start-2 lg:pt-[5.25rem]">
          <div className="flex gap-x-3 text-foreground">
            <Tag>{props.cover.tag}</Tag>
          </div>
          <h2 className="text-balance text-[1.875rem] font-semibold leading-[2.375rem]">
            {props.cover.title}
          </h2>
          <Paragraph className="text-pretty text-black-700">
            {props.cover.description}
          </Paragraph>
        </div>
        <div className="relative col-span-full flex h-full justify-start sm:justify-center lg:col-span-7 lg:col-start-6">
          <div className="absolute -z-10 h-full w-px bg-outline-200 max-sm:left-[3.5px]" />
          <div className="grid grid-cols-1 gap-x-14 gap-y-3 pb-[3rem] pt-[5.25rem] max-sm:ml-8 sm:grid-cols-2 lg:pb-[3.563rem] lg:pt-[6.438rem]">
            {props.data.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col justify-center even:sm:translate-y-[calc(50%+6px)]"
              >
                <div
                  className={cn(
                    "relative flex h-fit flex-col gap-1 rounded-xl border border-outline-200 px-4 py-3",
                    "group hover:border-brand-300 hover:ring-1 hover:ring-brand-300",
                  )}
                >
                  <div
                    className={cn(
                      item.type === "highlight"
                        ? "absolute right-3 top-2 flex size-6 items-center justify-center rounded-full bg-[#FFF1E5]"
                        : "hidden",
                    )}
                  >
                    <Star className="size-4 stroke-2 text-[#EA740F]" />
                  </div>
                  <p className="line-clamp-1 text-xs font-medium uppercase tracking-widest text-dim-500">
                    {item.date}
                  </p>
                  <p className="font-medium text-black-900">{item.title}</p>
                  <p className="text-sm text-black-700">{item.description}</p>
                  <div
                    className={cn(
                      i % 2 === 0 ? "max-sm:-left-7 sm:-right-7" : "-left-7",
                      "absolute top-1/2 h-px w-[26px] -translate-y-1/2 transform border border-dashed border-outline-400",
                      "group-hover:border-y-2 group-hover:border-brand-300",
                    )}
                  >
                    <div
                      className={cn(
                        i % 2 === 0
                          ? "group-hover:-right-[6.5px] max-sm:-left-1.5 group-hover:max-sm:-left-[6.5px] sm:-right-1.5"
                          : "-left-1.5 group-hover:-left-[6.5px]",
                        "absolute top-1/2 size-2 -translate-y-1/2 transform rounded-full bg-brand-600",
                        "ring-brand-300 ring-offset-[3px] group-hover:ring",
                      )}
                    >
                      <div className="absolute -top-[3.75rem] left-[3px] h-[3.75rem] w-0.5 bg-gradient-to-t from-brand-600 from-0% to-transparent to-100%" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BorderedSection>
  );
}
