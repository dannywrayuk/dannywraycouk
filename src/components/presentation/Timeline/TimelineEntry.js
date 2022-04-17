import { TimelineLayoutWrapper } from "./TimelineLayoutWrapper";
import { BasicItem, BasicWithImage } from "./types";

const timelineEntryTypes = {
  default: BasicItem,
  withImage: BasicWithImage,
};

export const TimelineEntry = ({ data, type }) => {
  const Entry = timelineEntryTypes[data.timeline?.type || "default"];
  return (
    <TimelineLayoutWrapper
      label={data.dateString}
      variant={type || data.timeline?.variant}
      icon={data.timeline?.icon}
    >
      <Entry data={data} />
    </TimelineLayoutWrapper>
  );
};
