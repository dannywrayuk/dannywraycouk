import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
`;
export const StyledLink = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colours.PRIMARY1};
  fill: ${({ theme }) => theme.colours.SECONDARY1};
`;

export const Icon = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
