import styled from "styled-components";

export const SeeMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colours.PRIMARY1};
  border: 1px solid ${({ theme }) => theme.colours.PRIMARY1};
  width: 100%;
  height: 50px;
  margin-top: 100px;
`;