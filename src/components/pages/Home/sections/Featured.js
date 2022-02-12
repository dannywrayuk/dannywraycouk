import { Column, SubHeading, SubSubHeading, Text } from "@components/core";
import { TimelineItem } from "@components/presentation/TimelineItem";
import styled from "@emotion/styled";
import { md } from "@utils/breakpoints";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
  [md]: {
    padding: "0 40px",
  },
});

export const Featured = () => (
  <Wrapper>
    <SubSubHeading _css={{ margin: "10px 0 30px" }}>Highlights</SubSubHeading>
    <TimelineItem label="Dec 9, 1997">
      <SubHeading>A project title goes here.</SubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </TimelineItem>
    <TimelineItem variant="pinned">
      <SubHeading>A project title goes here.</SubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </TimelineItem>
    <TimelineItem variant="like">
      <SubHeading>A project title goes here.</SubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </TimelineItem>
    <TimelineItem label="Dec 9, 1997">
      <SubHeading>A project title goes here.</SubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </TimelineItem>
  </Wrapper>
);
