import minimatch from "minimatch";
import allMeta from "@gen/siteMeta.json";

export const getMetadataById = (ids) =>
  ids.map((x) => allMeta.find((y) => y.id === x)).filter(Boolean);

export const getMetadataByRoute = (route) => {
  return allMeta.filter((x) => minimatch(x.route, route));
};
