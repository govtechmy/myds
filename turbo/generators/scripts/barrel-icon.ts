import * as fs from "fs";
import * as path from "path";
import { icon_directory } from "./util";

interface MainScriptProps {
  framework: "react" | "vue" | "angular";
}

export default (props: MainScriptProps) => {
  try {
    const icon_dir = path.resolve(__dirname, icon_directory[props.framework]);
    // Get all files in the icons directory
    const files = fs.readdirSync(icon_dir);
    // Filter out non-TypeScript files
    const tsx_files = files.filter((file) => file.endsWith(".tsx"));

    // Generate export statements
    const exportStatements = tsx_files
      .map((file) => {
        const fileNameWithoutExtension = path.basename(file, ".tsx");
        return `export * from './${fileNameWithoutExtension}';`;
      })
      .join("\n");

    // Write export statements to index.ts
    fs.writeFileSync(path.join(icon_dir, "index.ts"), exportStatements);
    console.log("Barrel file created successfully.");
  } catch (error) {
    console.error("Error creating barrel file: ", error);
  }
};
