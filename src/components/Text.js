import styledConfig from "@utils/styledConfig";
import styled from "styled-components";
import { color, layout, compose } from "styled-system";
export const Text = styled.h1.withConfig(styledConfig)(compose(color, layout));
