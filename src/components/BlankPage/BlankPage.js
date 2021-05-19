import ShrinkingLogo from "../ShrinkingLogo";
import Footer from "../Footer";
import { StandardHead } from "../Heads";
import { ChildrenContainer, MainContainer } from "./BlankPage.style";

const BlankPage = ({
  showLogo,
  showFooter,
  applyMargin,
  children,
  Head = StandardHead,
}) => {
  return (
    <Head>
      <MainContainer>
        {showLogo && <ShrinkingLogo />}
        <ChildrenContainer applyMargin={applyMargin}>
          {children}
        </ChildrenContainer>
        {showFooter && <Footer />}
      </MainContainer>
    </Head>
  );
};

export default BlankPage;
