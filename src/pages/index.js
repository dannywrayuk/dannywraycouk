import StandardHead from "../components/Heads/standard";
import { MainContainer } from "./index.style";
import textStore from "../textStore";
import ShrinkingLogo from "../components/ShrinkingLogo";
import Greeting from "../components/Greeting";

const Text = textStore.Landing;

const Home = () => {
  return (
    <StandardHead>
      <ShrinkingLogo />
      <MainContainer>
        <Greeting />
      </MainContainer>
    </StandardHead>
  );
};

export default Home;
