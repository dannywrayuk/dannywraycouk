import { Column, Label, Row, SubSubHeading, Box } from "@components/core";
import styled from "@emotion/styled";

const EmployerImage = styled.img({
  borderRadius: "30%",
  width: "65px",
});
export const JobHistory = ({ children }) => {
  return (
    <Box>
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
          <Label _css={{ fontSize: "0.75rem" }}>Since 2020</Label>
        </Column>
      </Row>
    </Box>
  );
};
