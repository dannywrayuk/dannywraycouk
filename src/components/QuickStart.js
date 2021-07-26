import { StandardHead } from "./Heads";
import Logo from "./Logo";
import Menu from "./Menu";
import Footer from "./Footer";
import Padding from "./Padding";
import VBar from "./VBar";
import Title from "./Text/Title";
import SubTitle from "./Text/SubTitle";

const QuickStart = ({ children, title, date }) => (
  <>
    <StandardHead />
    <Logo />
    <Menu />
    <Footer>
      <Padding>
        {title && (
          <VBar justifyContent={{ base: "center", sm: "start" }}>
            <Title>{title}</Title>
          </VBar>
        )}
        {children}
        {date && (
          <SubTitle mt={10} fontSize={15} color="gray">
            Published: {date}
          </SubTitle>
        )}
      </Padding>
    </Footer>
  </>
);

export default QuickStart;
