import BorderedSection from "@/components/BorderedSection";
import { Paragraph } from "@/components/Paragraph";
import { Tag } from "@/components/Tag";
import { cn } from "@/lib/utils";

type Props = {
  data: {
    tag: string;
    title: string;
    description: string;
    img: {
      svg: string;
      webp?: string;
      alt: string;
    };
  };
  className?: string;
  reversed?: boolean;
};

export default async function PreviewContent(props: Props) {
  const { data, reversed } = props;

  return (
    <BorderedSection
      className={cn("grid grid-cols-2 lg:grid-cols-12", props.className)}
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
      <picture
        className={cn(
          "col-span-full mt-[2rem] h-full w-full lg:col-span-6 lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:mt-0",
          reversed ? "lg:col-start-1" : "lg:col-start-7",
        )}
      >
        {/* TODO: Handle missing (webp) images better */}
        <source srcSet={data.img.webp} type="image/webp" />
        <source srcSet={data.img.svg} type="image/svg+xml" />
        <img src={data.img.svg} alt={data.img.alt} />
      </picture>
    </BorderedSection>
  );
}
