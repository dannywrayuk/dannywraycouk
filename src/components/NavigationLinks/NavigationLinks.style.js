import styled from "styled-components";
import Config from "../../config";

const {
  Theme: {
    Breakpoints: { OnMediumUp },
  },
} = Config;

export const Container = styled.div`
  display: flex;
  margin: 50px auto 0 auto;
  flex-wrap: wrap;
  justify-content: center;

  @media ${OnMediumUp} {
    margin: 5vh auto 0 auto;
  }
`;

export const TextBubble = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.Colours.PRIMARY3};
  background-color: ${({ theme }) => theme.Colours.SECONDARY1};
  border-radius: 15px;
  margin: 10px;
  padding: 10px 15px;
`;
