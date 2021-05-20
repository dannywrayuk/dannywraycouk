import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY1};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 48px;
`;

export const RightJustify = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY3};
  text-align: right;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colours.PRIMARY3};
  text-align: justify;
  margin-top: 30px;

  p {
    margin-bottom: 20px;
    width: 100%;
    text-align: justify;
    display: inline-block;
  }

  h2 {
    display: block;
    text-align: center;
  }

  label {
    display: block;
    text-align: center;
  }

  hr {
    opacity: 0.5;
    margin-bottom: 20px;
  }

  img {
    display: block;
    margin: 50px auto 10px;
    width: 100%;
    max-width: 500px;
  }

  @media only screen and (max-width: 1000px) {
    .largeEquation :global(.katex-display > .katex > .katex-html) {
      white-space: nowrap;
    }

    .largeEquation {
      white-space: nowrap;
      overflow: auto;
      background: linear-gradient(90deg, white 0%, rgba(255, 255, 255, 0)),
        linear-gradient(-90deg, white 0%, rgba(255, 255, 255, 0)) 100% 0,
        radial-gradient(
          farthest-side at 0% 50%,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0)
        ),
        radial-gradient(
            farthest-side at 100% 50%,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0)
          )
          100% 0%;
      background-repeat: no-repeat;
      background-color: #fff;
      background-size: 100px 137px, 100px 137px, 14px 137px, 14px 137px;
      background-attachment: local, local, scroll, scroll;
    }
  }
`;
