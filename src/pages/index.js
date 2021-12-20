import { Heading } from "@components/Heading";
import { Text } from "@components/Text";
import { useCycle } from "@utils/useCycle";

const Test = () => {
  const [theme, toggle] = useCycle(["light", "dark"]);
  const toggleTheme = () => {
    toggle();
    document.documentElement.setAttribute("colorMode", theme);
  };
  return <button onClick={toggleTheme}>click me</button>;
};

const Home = () => {
  return (
    <>
      {["Heading", "SubHeading", "SubSubHeading", "Label"].map((variant) => (
        <Heading key={variant} as="h2" variant={variant}>
          {variant}
        </Heading>
      ))}
      <Test />
      <Text color="redTest">i am text</Text>
    </>
  );
};

export default Home;
