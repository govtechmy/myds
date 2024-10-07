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
