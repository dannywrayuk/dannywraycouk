import { Box } from "@chakra-ui/react";
import { Title, SubTitle, Description } from "../Text";
import PageTitle from "../PageTitle";
import { StandardHead } from "../Heads";
import Logo from "../Logo";
import Footer from "../Footer";
import Padding from "../Padding";
import Navigation from "../Navigation";

export const PostLayout = ({
  children,
  title,
  subTitle,
  date,
  description,
  animated = false,
  pageTitleHeight = "75vh",
}) => (
  <>
    <StandardHead />
    <Box position="fixed" w="100%" h="100%" p={{ base: 3, md: 10 }}>
      <Logo animated={animated} />
      <Navigation />
    </Box>
    {title && (
      <PageTitle height={pageTitleHeight}>
        <Title>{title}</Title>
        {subTitle && <SubTitle pl={1}>{subTitle}</SubTitle>}
        {description && <Description pl={1}>{description}</Description>}
        {date && (
          <SubTitle pl={1} fontSize={15} color="gray">
            Published: {date}
          </SubTitle>
        )}
      </PageTitle>
    )}
    <Footer>
      <Padding>
        <Box mb={10}>{children}</Box>
      </Padding>
    </Footer>
  </>
);
