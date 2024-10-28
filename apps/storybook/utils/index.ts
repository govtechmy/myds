export const createStory = (args: any, theme: "light" | "dark" = "light") => {
  return {
    parameters: {
      backgrounds: {
        default: theme,
        values: [{ name: "dark", value: "#18181B" }],
      },
    },
    args: args,
  };
};

export const createRender = (
  render: any,
  theme: "light" | "dark" = "light",
) => {
  return {
    parameters: {
      backgrounds: {
        default: theme,
        values: [{ name: "dark", value: "#18181B" }],
      },
    },
    render,
  };
};
