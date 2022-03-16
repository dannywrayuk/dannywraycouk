import { TimelineItem } from "./TimelineItem";
import { Link, SubSubHeading, Text } from "@components/core";
import styled from "@emotion/styled";

const CoverImage = styled.img({
  width: "100%",
  borderBottom: "1px solid var(--boldGrey)",
});

const Wrapper = styled.div({ outline: "solid" });
const WithBorder = styled.div({
  display: "flex",
  flexDirection: "column",
  borderRadius: "20px",
  overflow: "hidden",
  border: "1px solid var(--boldGrey)",
});
const TextBox = styled.div({
  padding: "10px",
});

export const TimelineEntry = ({ data, type }) => {
  const dateString = new Date(data.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  if (data.coverImage)
    return (
      <TimelineItem
        label={dateString}
        variant={type || data.timelineVariant}
        icon={data.timelineIcon}
      >
        <Link href={data.id}>
          <WithBorder>
            <CoverImage src={`/img/${data.coverImage}`} />
            <TextBox>
              <Link href={data.id}>
                <SubSubHeading>{data.title}</SubSubHeading>
              </Link>
              <Text>{data.blurb}</Text>
            </TextBox>
          </WithBorder>
        </Link>
      </TimelineItem>
    );
  return (
    <TimelineItem
      label={dateString}
      variant={type || data.timelineVariant}
      icon={data.timelineIcon}
    >
      <Wrapper>
        <Link href={data.id}>
          <SubSubHeading>{data.title}</SubSubHeading>
        </Link>
        <Text>{data.blurb}</Text>
        {/* {data.coverImage && <CoverImage src={`/img/${data.coverImage}`} />} */}
      </Wrapper>
    </TimelineItem>
  );
};
