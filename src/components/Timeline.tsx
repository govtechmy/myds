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
    <section
      id={props.id}
      className={cn(
        "lg:border-washed-100 container lg:border-x",
        props.className,
      )}
    >
      <div className="flex flex-col gap-6 max-lg:pt-12 lg:flex-row">
        <div className="space-y-4.5 lg:w-1/3 lg:py-[84px]">
          <div className="text-foreground flex gap-x-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">
              {props.cover.tag}
            </p>
          </div>
          <h2 className="text-hsm text-balance font-semibold">
            {props.cover.title}
          </h2>
          <p className="text-black-700 text-pretty">
            {props.cover.description}
          </p>
        </div>
        <div className="relative flex h-full justify-start sm:justify-center lg:w-2/3">
          <div className="bg-outline-200 absolute -z-10 h-full w-px max-sm:left-[3.5px]" />
          <div className="grid grid-cols-1 gap-x-14 gap-y-3 py-8 max-sm:ml-8 sm:grid-cols-2 lg:py-[84px]">
            {props.data.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col justify-center even:sm:translate-y-[calc(50%+6px)]"
              >
                <div
                  className={cn(
                    "border-outline-200 relative flex h-fit flex-col gap-1 rounded-xl border px-4 py-3",
                    "hover:border-brand-300 hover:ring-brand-300 group hover:ring-1",
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
                  <p className="text-dim-500 line-clamp-1 text-xs font-medium uppercase tracking-widest">
                    {item.date}
                  </p>
                  <p className="text-black-900 font-medium">{item.title}</p>
                  <p className="text-black-700 text-sm">{item.description}</p>
                  <div
                    className={cn(
                      i % 2 === 0 ? "max-sm:-left-7 sm:-right-7" : "-left-7",
                      "border-outline-400 absolute top-1/2 h-px w-[26px] -translate-y-1/2 transform border border-dashed",
                      "group-hover:border-brand-300 group-hover:border-y-2",
                    )}
                  >
                    <div
                      className={cn(
                        i % 2 === 0
                          ? "group-hover:-right-[6.5px] max-sm:-left-1.5 group-hover:max-sm:-left-[6.5px] sm:-right-1.5"
                          : "-left-1.5 group-hover:-left-[6.5px]",
                        "bg-brand-600 absolute top-1/2 size-2 -translate-y-1/2 transform rounded-full",
                        "ring-brand-300 ring-offset-[3px] group-hover:ring",
                      )}
                    >
                      <div className="from-brand-600 absolute left-[3px] top-2 h-[60px] w-0.5 bg-gradient-to-b from-0% to-transparent to-100%" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
