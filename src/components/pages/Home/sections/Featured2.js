import { Column, DateLabel, SubHeading, Text } from "@components/core";
import { TimelineItem } from "@components/presentation/TimelineItem";

export const Featured2 = () => (
  <Column>
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
  </Column>
);
