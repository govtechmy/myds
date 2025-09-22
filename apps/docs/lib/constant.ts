export const links = {
  figma:
    "https://www.figma.com/design/BwyAzgDaGno8QhaoTtLBMx/MYDS--Beta-?node-id=7-20696&t=xrPkDdDl0w2DqlwX-1",
  standard: "https://standard.digital.gov.my/",
  github: "https://github.com/govtechmy/myds",
  github_issue: "https://github.com/govtechmy/myds/issues",
};

export const s3 = (path: string) => {
  return `https://d2391uizq0pg2.cloudfront.net${path}`;
};

export const darkify = (src: string) => {
  return src.replace(/(\.[\w\d_-]+)$/i, "-dark$1");
};
