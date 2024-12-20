import { Preview } from "@storybook/react";
import "./global.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    deepControls: { enabled: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
