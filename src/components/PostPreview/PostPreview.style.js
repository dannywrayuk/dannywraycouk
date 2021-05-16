import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;
  padding: 10px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY1};
  font-weight: bold;
  font-size: 32px;
  font-family: "Montserrat", sans-serif;
`;

export const Description = styled.div`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ReadMoreButton = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY1};
  display: inline;
  padding: 10px;
  float: right;
  border: 1px solid ${({ theme }) => theme.colours.PRIMARY1};
  font-family: "Montserrat", sans-serif;
`;
