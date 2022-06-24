import { TimelineLayoutWrapper } from "./TimelineLayoutWrapper";
import { BasicItemImage, BasicItemCover, BasicItem } from "./types";

const timelineEntryTypes = {
  default: BasicItem,
  image: BasicItemImage,
  cover: BasicItemCover,
};

const inferType = (data) => {
  if (data.image) return "image";
  return "default";
};

const getEntry = (data) => {
  let Entry;
  if (data.timeline?.displayType) {
    Entry =
      timelineEntryTypes[data.timeline.displayType] ||
      timelineEntryTypes.default;
  } else {
    Entry = timelineEntryTypes[inferType(data)];
  }
  return <Entry data={data} />;
};

export const TimelineEntry = ({ data, type }) => {
  const Entry = getEntry(data);
  return (
    <TimelineLayoutWrapper
      label={data.dateString}
      variant={type || data.timeline?.variant}
      icon={data.timeline?.icon}
    >
      {Entry}
    </TimelineLayoutWrapper>
  );
};
