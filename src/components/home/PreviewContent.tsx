import { Tag } from "@/components/Tag";
import { Paragraph } from "@/components/Paragraph";
import { cn } from "@/lib/utils";

type Props = {
  data: {
    tag: string;
    title: string;
    description: string;
    img: {
      src: string;
    };
  };
  className?: string;
  reversed?: boolean;
};

export default async function PreviewContent(props: Props) {
  const { data, reversed } = props;

  return (
    <section
      className={cn(
        "container grid grid-cols-2 lg:grid-cols-12",
        props.className,
      )}
    >
      <div
        className={cn(
          "col-span-full flex h-full w-full flex-col justify-start gap-y-[1.125rem] lg:col-span-4 lg:row-span-1 lg:row-start-1 lg:justify-center",
          reversed ? "lg:col-start-8" : "lg:col-start-2",
        )}
      >
        <Tag>{data.tag}</Tag>
        <h3 className="text-balance text-[1.5rem] font-semibold leading-[2rem] lg:text-[1.875rem] lg:leading-[2.375rem]">
          {data.title}
        </h3>
        <Paragraph>{data.description}</Paragraph>
      </div>
      <img
        src={data.img.src}
        className={cn(
          "col-span-full mt-[2rem] h-full w-full lg:col-span-6 lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:mt-0",
          reversed ? "lg:col-start-1" : "lg:col-start-7",
        )}
      />
    </section>
  );
}
