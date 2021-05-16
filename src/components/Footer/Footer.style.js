import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colours.PRIMARY1};
  height: 100px;
  margin-top: 100px;
  padding: 20px;
`;

export const CopyrightText = styled.div`
  font-family: "Montserrat", sans-serif;
  color: black;
  text-align: center;
  margin: 10px;
`;
