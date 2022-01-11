import styled from "@emotion/styled";
import { useCSSProp } from "@utils/useCSSProp";
import { FiFolder } from "react-icons/fi";
import { MdOutlineArticle } from "react-icons/md";
import { Label } from "@components/core";

const Align = styled.div(
  {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "fit-content",
  },
  useCSSProp
);

export const ProjectBadge = ({ _css }) => (
  <Align _css={_css}>
    <FiFolder size={35} />
    <Label _css={{ marginLeft: "15px" }}>Project</Label>
  </Align>
);

export const ArticleBadge = ({ _css }) => (
  <Align _css={_css}>
    <MdOutlineArticle size={35} />
    <Label _css={{ marginLeft: "15px" }}>Article</Label>
  </Align>
);

export const WithBadge = ({ _css, badge, children }) => {
  const badges = { project: FiFolder, article: MdOutlineArticle };
  const Icon = badges[badge];
  return (
    <Align _css={_css}>
      <Icon size={35} />
      <Label _css={{ marginLeft: "15px" }}>{children}</Label>
    </Align>
  );
};
