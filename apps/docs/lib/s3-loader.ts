"use client";

interface S3LoaderProps {
  src: string;
  //* TODO: Cloudfront optims (later)
  width: number;
  quality?: number;
}

export default ({ src }: S3LoaderProps) => {
  return `https://gnu-myds.s3.ap-southeast-1.amazonaws.com${src}`;
};
