import { Column, SubHeading, SubSubHeading, Text } from "@components/core";
import { TimelineItem } from "@components/presentation/TimelineItem";
import styled from "@emotion/styled";
import { md } from "@utils/breakpoints";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
});

export const Featured = () => (
  <Wrapper>
    <SubHeading _css={{ margin: "10px 0 40px" }}>Highlights</SubHeading>
    <TimelineItem label="Dec 9, 1997">
      <SubSubHeading>A project title goes here.</SubSubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </TimelineItem>
    <TimelineItem variant="pinned">
      <SubSubHeading>A project title goes here.</SubSubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </TimelineItem>
    <TimelineItem variant="like">
      <SubSubHeading>A project title goes here.</SubSubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </TimelineItem>
    <TimelineItem label="Dec 9, 1997">
      <SubSubHeading>A project title goes here.</SubSubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </TimelineItem>
  </Wrapper>
);
