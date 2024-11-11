import { source } from "@/app/source";
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

interface PageParams {
  params: { slug?: string[]; lang: string };
}

export default async function Page({ params }: PageParams) {
  const page = source.getPage(params.slug);
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
