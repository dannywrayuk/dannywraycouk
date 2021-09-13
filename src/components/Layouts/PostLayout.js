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
  date,
  description,
  animated = false,
}) => (
  <>
    <StandardHead />
    <Box position="fixed" w="100%" top={0} p={{ base: 3, md: 10 }}>
      <Logo animated={animated} />
      <Navigation />
    </Box>
    {title && (
      <PageTitle h="50vh" centerY centerX>
        <Title>{title}</Title>
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
