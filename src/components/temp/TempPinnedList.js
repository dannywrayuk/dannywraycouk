import { Column, SubSubHeading, Text } from "@components/core";
import { TimelineItem } from "@components/presentation/TimelineItem";
import styled from "@emotion/styled";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
});

export const TempPinnedList = () => (
  <Wrapper>
    <TimelineItem variant="pinned">
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
    <TimelineItem variant="pinned">
      <SubSubHeading>A project title goes here.</SubSubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </TimelineItem>
  </Wrapper>
);
