import { AiFillGithub } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

import { Row, Text, Label, LinkButton, Flex } from "@components/core";
import styled from "@emotion/styled";

const Wrapper = styled(Flex)({
  backgroundColor: "var(--primary30)",
  padding: "10px 20px",
  borderRadius: "10px",
});

const Icon = styled(AiFillGithub)({
  backgroundColor: "var(--primary)",
  width: "30px",
  height: "30px",
  padding: "5px",
  borderRadius: "100%",
});

const InterestButton = styled(LinkButton)({
  backgroundColor: "var(--primary)",
  color: "black",
  borderRadius: "10px",
  padding: "8px",
});

const Arrow = styled(FaChevronRight)({ color: "var(--primary)" });

export const LookingFor = () => (
  <Wrapper dir="column" rg={10}>
    <Row cg={20} ai="center" jc="start">
      <Icon />
      <Text _css={{ fontSize: "0.9rem" }}>
        I'm currently open to freelance.
      </Text>
    </Row>
    <InterestButton href="/lol">
      <Text _css={{ fontSize: "0.9rem" }}>Express Interest</Text>
    </InterestButton>
  </Wrapper>
);
