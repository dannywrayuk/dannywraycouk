import minimatch from "minimatch";
import allMeta from "@gen/siteMeta.json";

export const getMetadataById = (ids) =>
  allMeta.filter((x) => ids.includes(x.id));

export const getMetadataByRoute = (route) => {
  return allMeta.filter((x) => minimatch(x.route, route));
};
