import { Heading, Link } from "@components/core";
import styled from "@emotion/styled";
import { BasicItemWrapper, BasicBottom, Image, ImageWrapper } from "./common";

const Cover = styled(ImageWrapper)({
  position: "relative",
});

const CoverImage = styled(Image)({
  position: "absolute",
});

const CoverText = styled(Heading)({
  textAlign: "center",
  color: "black",
  margin: "0 10%",
  zIndex: "1",
});

export const BasicItemCover = ({ data }) => (
  <BasicItemWrapper>
    <Link href={data.route} underline="none">
      <Cover center>
        <CoverImage src="/img/cover-images/default.jpeg" />
        <CoverText size="xl">{data.title}</CoverText>
      </Cover>
    </Link>
    <BasicBottom data={data} />
  </BasicItemWrapper>
);
