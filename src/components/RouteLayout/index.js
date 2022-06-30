import { Fragment } from "react";
import { PlainLayout } from "./layouts/PlainLayout";
import { PostLayout } from "./layouts/PostLayout";

export const getRouteLayout = (layout) => {
  switch (layout) {
    case "none":
      return Fragment;
    case "post":
      return PostLayout;
    case "plain":
      return PlainLayout;
    default:
      return PlainLayout;
  }
};
