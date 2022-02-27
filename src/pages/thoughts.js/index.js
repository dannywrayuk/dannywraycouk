import { Layout } from "@components/Layout";
import { Column, SubHeading, SubSubHeading, Text } from "@components/core";
import { TimelineItem } from "@components/presentation/TimelineItem";
import styled from "@emotion/styled";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
});

const Thoughts = () => (
  <Layout>
    <Wrapper>
      <SubHeading _css={{ margin: "50px 0 60px" }}>Thoughts</SubHeading>
      <TimelineItem label="Dec 9, 1997">
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
      <TimelineItem variant="like">
        <SubSubHeading>A project title goes here.</SubSubHeading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel metus eget odio euismod viverra vitae nec turpis
        </Text>
      </TimelineItem>
      <TimelineItem label="Dec 9, 1997">
        <SubSubHeading>A project title goes here.</SubSubHeading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel metus eget odio euismod viverra vitae nec turpis
        </Text>
      </TimelineItem>
    </Wrapper>
  </Layout>
);

export default Thoughts;
