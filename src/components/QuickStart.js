import { Flex, Box, Stack } from "@chakra-ui/react";
import { StandardHead } from "./Heads";
import Logo from "./Logo";
import Menu from "./Menu";
import Footer from "./Footer";
import Padding from "./Padding";
import { Title, SubTitle, Description } from "./Text";
import PageTitle from "./PageTitle";

const QuickStart = ({ children, title, date, desc }) => (
  <>
    <StandardHead />
    <Logo animateOff />
    <Menu />
    <Footer>
      {title && (
        <PageTitle>
          <Title>{title}</Title>
          {desc && <Description pl={1}>{desc}</Description>}
          {date && (
            <SubTitle pl={1} fontSize={15} color="gray">
              Published: {date}
            </SubTitle>
          )}
        </PageTitle>
      )}
      <Padding>
        <Box mb={10}>{children}</Box>
      </Padding>
    </Footer>
  </>
);

export default QuickStart;
