import { Text, Link, Flex, TextBubble } from "@components/core";
import { Mapper } from "@components/Mapper";
import { TitleAndImage } from "@components/presentation/TitleAndImage";
import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";
import { homepageLinks } from "@utils/constants";

const AlignAdjust = styled(Flex)({
  textAlign: "center",
  [mq.md]: {
    justifyContent: "start",
    textAlign: "left",
  },
});

export const Landing = () => {
  return (
    <>
      <TitleAndImage />
      <Flex column rg={20}>
        <AlignAdjust center cg={15} flexWrap>
          <Mapper
            data={homepageLinks}
            Component={({ data }) => (
              <Text>
                <Link href={data.link}>{data.name}</Link>
              </Text>
            )}
          />
        </AlignAdjust>
        <AlignAdjust cg={15} flexWrap center>
          <Text>Software Engineer at Capital One.</Text>
          <Text>Nottingham, UK.</Text>
          <Text>Boba Tea Enthusiast.</Text>
        </AlignAdjust>
        <AlignAdjust column rg={15}>
          <Text>
            Hi, I'm Danny. A Theoretical Physics Graduate from the University of
            Nottingham. Sometimes the hardest part about learning physics is
            knowing where to look for information. I'm working through my
            university notes and uploading a typeset version of everything I
          </Text>
          <Text>
            I'm open to{" "}
            <Link href="/">
              <TextBubble>speaking</TextBubble>
            </Link>
            {" and "}
            <Link href="/">
              <TextBubble>freelance</TextBubble>
            </Link>
          </Text>
        </AlignAdjust>
      </Flex>
    </>
  );
};
