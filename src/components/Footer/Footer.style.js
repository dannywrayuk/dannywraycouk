import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.Colours.PRIMARY1};
  height: 100px;
  margin-top: 100px;
  padding: 20px;
`;

export const CopyrightText = styled.div`
  color: ${({ theme }) => theme.Colours.PRIMARY2};
  text-align: center;
  margin: 10px;
`;
