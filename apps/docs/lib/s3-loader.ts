"use client";

interface S3LoaderProps {
  src: string;
}

export default ({ src }: S3LoaderProps) => {
  return `https://d2391uizq0pg2.cloudfront.net${src}`;
};
