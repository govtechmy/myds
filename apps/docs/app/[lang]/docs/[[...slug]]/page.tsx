import { source } from "@/app/[lang]/source";
import type { Metadata } from "next";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Heading } from "fumadocs-ui/components/heading";
import Image from "next/image";

interface PageParams {
  params: { slug?: string[]; lang: string };
}

export default async function Page({ params }: PageParams) {
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle className="font-body font-semibold">
        {page.data.title}
      </DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            h1: (props) => (
              <Heading as="h1" {...props} className="font-body font-semibold" />
            ),
            h2: (props) => (
              <Heading as="h2" {...props} className="font-body font-semibold" />
            ),
            h3: (props) => (
              <Heading as="h3" {...props} className="font-body font-semibold" />
            ),
            h4: (props) => (
              <Heading as="h4" {...props} className="font-body font-semibold" />
            ),
            h5: (props) => (
              <Heading as="h5" {...props} className="font-body font-semibold" />
            ),
            h6: (props) => (
              <Heading as="h6" {...props} className="font-body font-semibold" />
            ),
            img: (props: any) => {
              const [light, dark] = [
                props.src,
                props.src.replace(/(\.[\w\d_-]+)$/i, "-dark$1"),
              ];

              return (
                <>
                  <Image {...props} src={light} className="img-light" />
                  <Image {...props} src={dark || light} className="img-dark" />
                </>
              );
            },
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({ params }: PageParams) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
