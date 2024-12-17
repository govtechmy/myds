import React from "react";
import { Preview } from "@storybook/react";
import "./global.css";
import { TooltipProvider } from "@myds/react/tooltip";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default preview;
