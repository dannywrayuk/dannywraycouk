import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colours.PRIMARY1};
  height: 100px;
  margin-top: 100px;
  padding: 20px;
  width: 100%;
`;

export const CopyrightText = styled.div`
  color: black;
  text-align: center;
  margin: 10px;
`;
