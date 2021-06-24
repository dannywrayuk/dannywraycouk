import styled from "styled-components";

export const SeeMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.Colours.PRIMARY1};
  border: 1px solid ${({ theme }) => theme.Colours.PRIMARY1};
  width: 100%;
  height: 50px;
  margin-top: 100px;
`;
