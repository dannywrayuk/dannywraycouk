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
    margin: auto 0;
    width: clamp(
      450px,
      450px + (740 - 450) * (100vw - 730px) / (1100 - 730),
      740px
    );
    font-size: clamp(
      35px,
      35px + (60 - 35) * (100vw - 730px) / (1100 - 730),
      60px
    );
  }

  @media ${OnLargeUp} {
    min-width: 740px;
    font-size: 64px;
  }
`;
