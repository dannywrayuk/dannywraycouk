import { TimelineItem } from "./TimelineItem";
import { Link, SubSubHeading, Text } from "@components/core";
import styled from "@emotion/styled";

const CoverImage = styled.img({
  width: "100%",
});

const Wrapper = styled.div({
  // outline: "solid"
});
const WithBorder = styled.div({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  border: "1px solid var(--feintGrey)",
  marginTop: "10px",
});
const TextBox = styled.div({
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
  alignItems: "flex-start",
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
        <WithBorder>
          <Link href={data.id}>
            <CoverImage src={`/img/${data.coverImage}`} />
          </Link>
          <TextBox>
            <Link href={data.id}>
              <SubSubHeading _css={{ fontSize: "1rem" }}>
                {data.title}
              </SubSubHeading>
            </Link>
            <Text>{data.blurb}</Text>
          </TextBox>
        </WithBorder>
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
