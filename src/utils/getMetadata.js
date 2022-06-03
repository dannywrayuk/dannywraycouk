import minimatch from "minimatch";
import allMeta from "@gen/siteMeta.json";

const sortFn = (a, b) => {
  const dateA = Date.parse(a.date) || 0;
  const dateB = Date.parse(b.date) || 0;
  return dateB - dateA;
};

export const getMetadataById = (ids) =>
  ids
    .map((x) => allMeta.find((y) => y.id === x))
    .filter(Boolean)
    .sort(sortFn);

export const getMetadataByRoute = (route) => {
  return allMeta.filter((x) => minimatch(x.route, route)).sort(sortFn);
};
