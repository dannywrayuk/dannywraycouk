import { Heading, Link } from "@components/core";
import styled from "@emotion/styled";
import Image from "next/image";
import { BasicItemWrapper, BasicBottom, ImageWrapper } from "./common";

const CoverText = styled(Heading)({
  textAlign: "center",
  color: "black",
  margin: "0 10%",
  zIndex: "0",
});

export const BasicItemCover = ({ data }) => (
  <BasicItemWrapper>
    <Link href={data.route} variant="noStyle">
      <ImageWrapper center>
        <Image src="/img/cover-images/default.jpeg" layout="fill" />
        <CoverText size="xl">{data.title}</CoverText>
      </ImageWrapper>
    </Link>
    <BasicBottom data={data} />
  </BasicItemWrapper>
);
