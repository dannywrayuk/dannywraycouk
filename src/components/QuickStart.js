import { StandardHead } from "./Heads";
import Logo from "./Logo";
import Menu from "./Menu";
import Footer from "./Footer";
import Padding from "./Padding";
import VBar from "./VBar";
import Title from "./Text/Title";

const QuickStart = ({ children, title }) => (
  <>
    <StandardHead />
    <Logo />
    <Menu />
    <Footer>
      <Padding>
        {title && (
          <VBar>
            <Title>{title}</Title>
          </VBar>
        )}
        {children}
      </Padding>
    </Footer>
  </>
);

export default QuickStart;
