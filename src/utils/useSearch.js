import Fuse from "fuse.js";
import allMeta from "@gen/siteMeta.json";

const fuse = new Fuse(allMeta, {
  includeScore: true,
  includeMatches: true,
  ignoreLocation: true,
  ignoreFieldNorm: true,
  threshold: 0.3,
  keys: [
    "title",
    "abstract",
    { name: "generatedKeywords", weight: 0.2 },
    { name: "tags", weight: 0.2 },
  ],
});

export const useSearch = () => (term) => fuse.search(term);
