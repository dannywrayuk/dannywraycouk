import { Fragment } from "react";
import { PostLayout } from "./layouts/PostLayout";

export const getRouteLayout = (layout) => {
  switch (layout) {
    case "none":
      return Fragment;
    case "post":
      return PostLayout;
    default:
      return PostLayout;
  }
};
