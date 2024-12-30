import Section from "../section";
import { Paragraph } from "@/components/Paragraph";
import { Tag } from "@/components/Tag";
import { darkify } from "@/lib/constant";
import { clx } from "@govtechmy/myds-react/utils";
import Image from "next/image";

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
    <Section
      className={clx(
        "grid grid-cols-2 lg:grid-cols-12 lg:px-0",
        "md:max-lg:mx-auto md:max-lg:max-w-[600px] md:max-lg:px-0",
        props.className,
      )}
    >
      <div
        className={clx(
          "col-span-full flex h-full w-full flex-col justify-start gap-y-[1.125rem] lg:col-span-4 lg:row-span-1 lg:row-start-1 lg:justify-center",
          reversed ? "lg:col-start-8" : "lg:col-start-2",
        )}
      >
        <Tag>{data.tag}</Tag>
        <h2 className="text-pretty">{data.title}</h2>
        <Paragraph>{data.description}</Paragraph>
      </div>
      <picture
        className={clx(
          "col-span-full mt-[2rem] h-full w-full lg:col-span-6 lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:mt-0",
          reversed ? "lg:col-start-1" : "lg:col-start-7",
          reversed ? "lg:pl-[1.5rem]" : "lg:pr-[1.5rem]",
        )}
      >
        <div className="w-full overflow-hidden rounded-[32px]">
          <Image
            src={data.img.svg}
            alt={data.img.alt}
            width={1200}
            height={500}
            className="img-light transition-transform duration-300 hover:scale-105"
          />
          <Image
            src={darkify(data.img.svg)}
            alt={data.img.alt}
            width={1200}
            height={500}
            className="img-dark transition-transform duration-300 hover:scale-105"
          />
        </div>
      </picture>
    </Section>
  );
}
