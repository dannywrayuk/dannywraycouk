import StandardHead from "../components/Heads/standard";
import { MainContainer } from "./index.style";
import textStore from "../textStore";
import ShrinkingLogo from "../components/ShrinkingLogo";

const Text = textStore.Landing;

const Home = () => {
  return (
    <StandardHead>
      <ShrinkingLogo />
      <MainContainer>
        {/* test div */}
        <div style={{ color: "white", height: "900px" }}>hello</div>
      </MainContainer>
    </StandardHead>
  );
};

export default Home;
