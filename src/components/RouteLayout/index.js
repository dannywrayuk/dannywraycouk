import { Fragment } from "react";
import { PlainLayout } from "./layouts/PlainLayout";
import { PostLayout } from "./layouts/PostLayout";
import { ProjectPdf } from "./layouts/ProjectPdf";

export const getRouteLayout = (layout) => {
  switch (layout) {
    case "none":
      return Fragment;
    case "projectPdf":
      return ProjectPdf;
    case "post":
      return PostLayout;
    case "plain":
      return PlainLayout;
    default:
      return PlainLayout;
  }
};
