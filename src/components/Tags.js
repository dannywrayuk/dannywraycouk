import styled from "@emotion/styled";
import { Text, BubbleHighlight } from "@components/core";

const Wrapper = styled.div({
  display: "flex",
  columnGap: "10px",
});

export const Tags = ({ tags }) => (
  <Wrapper>
    {tags.map((tag, id) => (
      <BubbleHighlight key={tag + id}>
        <Text>{tag}</Text>
      </BubbleHighlight>
    ))}
  </Wrapper>
);
