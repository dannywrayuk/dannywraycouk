import { Column, Label, Row, SubSubHeading, Text } from "@components/core";
import styled from "@emotion/styled";

const Wrapper = styled.div({ marginTop: "30px" });

const EmployerImage = styled.img({
  borderRadius: "30%",
  width: "25%",
});

export const JobHistory = ({ children }) => {
  return (
    <Wrapper>
      <Label _css={{ fontSize: "0.75rem", marginBottom: "10px" }}>
        Current Position
      </Label>
      <Row cg="1rem" jc="start">
        <EmployerImage src="/img/capone.jpeg" />
        <Column ai="start">
          <SubSubHeading _css={{ fontSize: "0.8rem" }}>
            Software Development Engineer
          </SubSubHeading>
          <Label _css={{ fontSize: "0.75rem" }}>Capital One</Label>
        </Column>
      </Row>
    </Wrapper>
  );
};
