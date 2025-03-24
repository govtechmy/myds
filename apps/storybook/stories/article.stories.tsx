import Article from "./components/article";

export default {
  title: "@govtechmy/examples/Article",
  component: Article,
  // remove the automatic documentation for Layout
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Tablet = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const Desktop = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
