import fs from "fs";
import path from "path";

export const getMetadata = (inputPath) => {
  console.log(`Getting metadata for ${inputPath}`);
  const dir = fs.readdirSync(inputPath);
  console.log(dir);
  const metadata = dir
    .map((file) => {
      const filePath = path.join(inputPath, file);
      if (fs.lstatSync(filePath).isFile()) {
        const fileData = fs.readFileSync(filePath).toString();
        const metaMatch = fileData.match(/export const meta = ({(?:.|\s)*});/);
        if (metaMatch) {
          const getObject = Function("return " + metaMatch[1]);
          return getObject();
        }
      }
    })
    .filter((x) => !!x && x.id !== undefined)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  console.log("Found:");
  console.log(metadata);
  return metadata;
};
