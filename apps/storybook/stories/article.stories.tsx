import { fn } from "@storybook/test";

import { Header } from "./Header";

export default {
  title: "@govtechmy/myds-react/Layout/Article",
  component: Header,
  parameters: {
    previewTabs: {
      "storybook/docs/panel": { hidden: true },
    },
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {};
