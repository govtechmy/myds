"use client";

interface S3LoaderProps {
  src: string;
}

const s3Loader = ({ src }: S3LoaderProps) => {
  return `https://d2391uizq0pg2.cloudfront.net${src}`;
};

export default s3Loader;
