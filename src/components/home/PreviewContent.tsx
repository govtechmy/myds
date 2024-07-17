import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

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
  const t = useTranslations();
  const { data, reversed } = props;

  return (
    <section
      className={cn(
        "container flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-16",
        reversed ? "lg:flex-row-reverse" : "",
        props.className,
      )}
    >
      <div className="flex flex-col items-start gap-4 lg:w-1/2">
        <div className="text-brand-700 text-sm font-medium uppercase tracking-widest">
          {data.tag}
        </div>
        <h3 className="text-balance text-3xl font-semibold">{data.title}</h3>
        <p className="text-black-700 text-pretty">{data.description}</p>
      </div>
      <img
        src={data.img.src}
        className="lg-[600px] h-[300px] w-full lg:w-1/2"
      />
    </section>
  );
}
