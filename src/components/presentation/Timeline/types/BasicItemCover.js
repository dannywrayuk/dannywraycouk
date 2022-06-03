import { Heading } from "@components/core";
import styled from "@emotion/styled";
import { BasicItem, BasicBottom, Image, ImageWrapper } from "./common";

const Cover = styled(ImageWrapper)({
  position: "relative",
});

const CoverImage = styled(Image)({
  position: "absolute",
  zIndex: "-1",
});

const CoverText = styled(Heading)({
  textAlign: "center",
  color: "black",
  margin: "0 10%",
});

export const BasicItemCover = ({ data }) => (
  <BasicItem>
    <Cover center>
      <CoverText size="xl">{data.title}</CoverText>
      <CoverImage src="/img/cover_images/default.jpeg" />
    </Cover>
    <BasicBottom data={data} />
  </BasicItem>
);
