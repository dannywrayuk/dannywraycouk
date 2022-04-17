import fs from "fs";
import matter from "gray-matter";
import minimatch from "minimatch";
import { asRoute, getFilePaths } from "./getFilePaths";

const metadata = [];

export const getMetadata = () => {
  if (metadata.length === 0) {
    metadata.push(...calculateMetadata());
  }
  return metadata;
};

export const getMetadataById = (ids) => {
  const output = [];
  ids.forEach((id) => {
    output.push(...getMetadata().filter((x) => x.id === id));
  });
  return output;
};

export const getMetadataByRoute = (route) => {
  return getMetadata().filter((x) => minimatch(x.route, route));
};

const calculateMetadata = () =>
  getFilePaths()
    .map((filePath) => {
      const fileData = fs.readFileSync(filePath);
      const frontMatter = matter(fileData).data;
      return {
        ...getGeneratedMeta(filePath, frontMatter),
        ...frontMatter,
      };
    })
    .sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));

const getGeneratedMeta = (filePath, frontMatter) => {
  const output = {};
  output.route = asRoute(filePath);

  if (!isNaN(Date.parse(frontMatter.date))) {
    output.dateString = new Date(frontMatter.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return output;
};
