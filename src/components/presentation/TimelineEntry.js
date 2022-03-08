import { TimelineItem } from "./TimelineItem";
import { Link, SubSubHeading, Text } from "@components/core";

export const TimelineEntry = ({ data, type }) => {
  const dateString = new Date(data.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <TimelineItem
      key={data.id}
      label={dateString}
      variant={type || data.timelineVariant}
      icon={data.timelineIcon}
    >
      <Link href={data.id}>
        <SubSubHeading>{data.title}</SubSubHeading>
      </Link>
      <Text>{data.blurb}</Text>
    </TimelineItem>
  );
};
