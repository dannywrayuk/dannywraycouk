import styled from "styled-components";

export const TextContainer = styled.div`
  width: 50%;
  min-width: 320px;
  margin: 50px auto 0 auto;
  color: white;
  font-size: 28px;

  @media only screen and (max-width: 330px) {
    min-width: 270px;
    font-size: 24px;
  }
`;
