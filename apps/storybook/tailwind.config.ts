import { Config } from "tailwindcss";
import { preset } from "@myds/tailwindcss";

const config: Config = {
  content: [
    "./stories/**/*.{ts,tsx,js,jsx}",
    "./react/**/*.{ts,tsx,js,jsx}",
    /**------------------------------------------------------------------------
     * *                                INFO
     *   Issue: Styles are not applied if the path to no-build component is not explicitly defined.
     *   Solution:
     *    1. Add the path to the no-build component in the content array. Need to be explicitly defined in app.
     *    2. Turn to build. Build the component library & generate the CSS to import.
     *------------------------------------------------------------------------**/
    "../../packages/react/src/**/*.{ts,tsx}",
  ],
  presets: [preset],
};

export default config;
