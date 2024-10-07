import { i18n } from "@/i18n";
import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

export const source = loader({
  i18n,
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
});

console.log(source.pageTree);
