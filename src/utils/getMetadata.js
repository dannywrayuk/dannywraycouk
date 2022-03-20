import fs from "fs";
import path from "path";

// comment out to turn off the annoying logs until they're needed
const log = (str) => {
  //console.log(str);
};

export const getMetadata = (filePath) => {
  if (fs.lstatSync(filePath).isFile()) {
    const fileData = fs.readFileSync(filePath).toString();
    const metaMatch = fileData.match(/export const meta = ({(?:.|\s)*});/);
    if (metaMatch) {
      const getObject = Function("return " + metaMatch[1]);
      return getObject();
    }
  }
};

export const getMetadataArray = (inputPathArray) => {
  return inputPathArray
    .map((file) => getMetadata(file))
    .filter((x) => !!x && x.id !== undefined);
};

export const sortMetadataArray = (inputArray) => {
  return inputArray.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
};

export const getMetadataFromDirectory = (inputPath) => {
  log(`Getting metadata for ${inputPath}`);
  const dir = fs.readdirSync(inputPath);

  log(dir);
  const metadata = sortMetadataArray(
    getMetadataArray(dir.map((file) => path.join(inputPath, file)))
  );

  log("Found:");
  log(metadata);
  return metadata;
};
