import StandardHead from "../components/Heads/standard";
import { MainContainer, TitleText } from "./index.style";
import textStore from "../textStore";

const Text = textStore.Landing;

const Home = () => (
  <StandardHead>
    <MainContainer>
      <TitleText>{Text.BigTitle}</TitleText>
    </MainContainer>
  </StandardHead>
);

export default Home;
