import { bp } from "@utils/breakpoints";
import NextImage from "next/image";
import path from "path";

const loader = (a) => {
  if (process.env.NODE_ENV === "development") {
    return a.src + "?w=" + a.width;
  }
  return (
    a.src.replace(path.extname(a.src), "") + "@" + a.width + path.extname(a.src)
  );
};

const parseSizes = (sizes = {}) =>
  typeof sizes === "string"
    ? sizes
    : Object.entries(sizes)
        .map(([key, val]) => {
          if (key === "max") return val;
          return `(max-width: ${bp[key]}em) ${val}`;
        })
        .join(", ");

export const Image = (props) => (
  <NextImage {...props} sizes={parseSizes(props.sizes)} loader={loader} />
);
