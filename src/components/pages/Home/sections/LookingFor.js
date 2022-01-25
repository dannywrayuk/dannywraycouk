import { AiFillGithub } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

import { Row, Text, Label } from "@components/core";
import styled from "@emotion/styled";

const Wrapper = styled(Row)({
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

const Arrow = styled(FaChevronRight)({ color: "var(--primary)" });

export const LookingFor = () => (
  <Wrapper cg={20} ai="center" jc="space-between">
    <Icon />
    <Text _css={{ fontSize: "0.75rem" }}>I'm open to Freelance</Text>
    <Arrow />
  </Wrapper>
);
