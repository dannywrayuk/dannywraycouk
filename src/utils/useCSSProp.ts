import { CSSObject } from "@emotion/react";

type UseCSSPropTypes = { _css: CSSObject };

export const useCSSProp = ({ _css }: UseCSSPropTypes) => _css;
