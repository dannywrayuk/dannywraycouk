import { BasicItem } from "./types/BasicItem";
import { BasicWithImage } from "./types/BasicWithImage";
import { TimelineLayoutWrapper } from "./TimelineLayoutWrapper";

const timelineEntryTypes = {
  default: BasicItem,
  withImage: BasicWithImage,
};

export const TimelineEntry = ({ data }) => {
  data.formattedDate = new Date(data.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const Entry = timelineEntryTypes[data.timeline?.type || "default"];

  return (
    <TimelineLayoutWrapper
      label={data.formattedDate}
      variant={data.timeline?.variant}
      icon={data.timeline?.icon}
    >
      <Entry data={data} />
    </TimelineLayoutWrapper>
  );
};
