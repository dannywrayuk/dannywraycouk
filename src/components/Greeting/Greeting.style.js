import styled from "styled-components";
import Config from "../../config";

const {
  Theme: {
    Breakpoints: { OnLargeUp, OnMediumUp, OnSmallDown },
  },
} = Config;

export const TextContainer = styled.div`
  width: 320px;
  margin: 50px auto 0 auto;
  color: ${({ theme }) => theme.Colours.PRIMARY3};
  font-size: 28px;
  @media ${OnSmallDown} {
    width: 270px;
    font-size: 24px;
  }

  @media ${OnMediumUp} {
    font-weight: bold;
    font-size: 6vw;
    min-width: 70vw;
    margin: auto 0;
  }

  @media ${OnLargeUp} {
    font-size: 120px;
    min-width: 1500px;
  }
`;
