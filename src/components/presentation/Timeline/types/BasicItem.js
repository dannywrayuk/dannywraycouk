import { Link, SubSubHeading, Text } from "@components/core";
import styled from "@emotion/styled";

const Wrapper = styled.div({
  // outline: "solid"
});

export const BasicItem = ({ data }) => (
  <Wrapper>
    <Link href={data.id}>
      <SubSubHeading>{data.title}</SubSubHeading>
    </Link>
    <Text>{data.blurb}</Text>
  </Wrapper>
);
