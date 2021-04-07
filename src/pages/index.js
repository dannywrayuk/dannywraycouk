import StandardHead from "../components/Heads/standard";
import { MainContainer, TitleText } from "./index.style";
import textStore from "../textStore";
import Logo from "../components/Logo";

const Text = textStore.Landing;

const Home = () => (
  <StandardHead>
    <MainContainer>
      <Logo />
      <TitleText>{Text.BigTitle}</TitleText>
    </MainContainer>
  </StandardHead>
);

export default Home;
