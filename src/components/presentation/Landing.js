import { Text, Link, Flex, TextBubble, Box, Heading } from "@components/core";
import { Mapper } from "@components/Mapper";
import { TitleAndImage } from "@components/presentation/TitleAndImage";
import styled from "@emotion/styled";
import { homepageLinks } from "@utils/constants";

const Wrapper = styled.div({
  border: "1px solid var(--color-border-default)",
  borderRadius: "0.5em",
  overflow: "hidden",
});

const Header = styled.div({
  background: "var(--color-bg-muted)",
  borderBottom: "1px solid var(--color-border-default)",
  padding: "0 15px",
});

export const Landing = () => {
  return (
    <>
      <TitleAndImage />
      <Flex cg={15} rg={10} flexWrap center>
        <Text weight={600} center>
          👨🏻‍💻 Software Engineer at Capital One.
        </Text>
        <Text weight={600} center>
          📍 Nottingham, UK.
        </Text>
        <Text weight={600} center>
          🧋 Boba Tea Enthusiast.
        </Text>
      </Flex>
      <Wrapper>
        <Header>
          <Text center>Hey good lookin'! 👋</Text>
        </Header>
        <Box p="15px">
          <Text>
            I'm Danny, a software engineer working on the acquisitions platform
            at Capital One. I enjoy building websites, making tools and writing
            about maths and physics. On this site you'll find some of the stuff
            I've done, said and made.
          </Text>
        </Box>
      </Wrapper>
      <Wrapper>
        <Box p="15px">
          <Text>
            I'm open to in freelance and speaking at events. Please don't
            hesitate to <Link href="">get in touch</Link>.
          </Text>
        </Box>
      </Wrapper>
      <Box>
        <Heading as="h2" size="sm" mb={20} center>
          Quick Links
        </Heading>
        <Flex flexWrap cg={15} rg={15} center>
          <Mapper
            data={homepageLinks}
            Component={({ data }) => (
              <Text>
                <TextBubble>{data.name}</TextBubble>
              </Text>
            )}
          />
        </Flex>
      </Box>
    </>
  );
};
