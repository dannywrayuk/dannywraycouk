import textStore from "../../textStore";
import { Title } from "./Logo.style";

const {
  Landing: { Logo: Text },
} = textStore;

const Logo = () => (
  <>
    <Title>{Text.Title1}</Title>
    <Title>{Text.Title2}</Title>
    <Title>{Text.Title3}</Title>
  </>
);

export default Logo;
