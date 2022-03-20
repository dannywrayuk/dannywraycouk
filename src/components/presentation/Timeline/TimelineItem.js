import { TimelineLayoutWrapper } from "./TimelineLayoutWrapper";
import { BasicItem, BasicWithImage } from "./types";

const timelineEntryTypes = {
  default: BasicItem,
  withImage: BasicWithImage,
};

export const TimelineEntry = ({ data, type }) => {
  data.formattedDate = new Date(data.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const Entry = timelineEntryTypes[data.timeline?.type || "default"];

  return (
    <TimelineLayoutWrapper
      label={data.formattedDate}
      variant={type || data.timeline?.variant}
      icon={data.timeline?.icon}
    >
      <Entry data={data} />
    </TimelineLayoutWrapper>
  );
};
