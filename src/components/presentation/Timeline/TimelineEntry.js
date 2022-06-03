import { TimelineLayoutWrapper } from "./TimelineLayoutWrapper";
import { BasicItemImage, BasicItemCover } from "./types";

const timelineEntryTypes = {
  default: BasicItemImage,
  image: BasicItemImage,
  cover: BasicItemCover,
};

const inferType = (data) => {
  if (data.image) return "image";
  return "cover";
};

export const TimelineEntry = ({ data, type }) => {
  let Entry;
  if (data.timeline?.displayType) {
    Entry = timelineEntryTypes[data.timeline.displayType || "default"];
  } else {
    Entry = timelineEntryTypes[inferType(data) || "default"];
  }
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
