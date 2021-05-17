import styled from "styled-components";

export const Container = styled.div`
  background-color: #222;
  margin: 20px 0;
  padding: 10px;
  border-radius: 10px;
`;

export const Title = styled.div`
  display: inline;
  color: ${({ theme }) => theme.colours.PRIMARY1};
  font-size: 24px;
`;

export const Date = styled.div`
  display: inline;
  color: white;
  float: right;
`;

export const Description = styled.div`
  color: white;
  margin-top: 10px;
`;
