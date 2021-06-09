import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0 40px;
  padding: 10px;
  max-width: 300px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.Colours.PRIMARY1};
  font-size: 32px;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.Colours.PRIMARY3};
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ReadMoreButton = styled.div`
  color: ${({ theme }) => theme.Colours.PRIMARY1};
  font-size: 12px;
  display: inline;
  padding: 10px;
  float: right;
  border: 1px solid ${({ theme }) => theme.Colours.PRIMARY1};
  cursor: default;
`;
