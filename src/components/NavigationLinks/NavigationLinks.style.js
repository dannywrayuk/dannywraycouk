import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 50px auto 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TextBubble = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.Colours.PRIMARY3};
  background-color: ${({ theme }) => theme.Colours.SECONDARY1};
  border-radius: 15px;
  margin: 10px;
  padding: 10px 15px;
`;
