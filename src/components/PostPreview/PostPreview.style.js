import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0 40px;
  padding: 10px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY1};
  font-size: 32px;
`;

export const Description = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ReadMoreButton = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY1};
  font-size: 12px;
  display: inline;
  padding: 10px;
  float: right;
  border: 1px solid ${({ theme }) => theme.colours.PRIMARY1};
`;
