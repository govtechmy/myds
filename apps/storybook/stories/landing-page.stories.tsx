import { fn } from "@storybook/test";
import LandingPage from "./components/landingPage";

export default {
  title: "@govtechmy/myds-react/Examples/LandingPage",
  component: LandingPage,
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
