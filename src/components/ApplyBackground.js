import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rotate = keyframes({
  to: {
    transform: "translate(-50%,-50%) rotate(360deg)",
  },
});

const ImageWrapper = styled.div(
  {
    position: "absolute",
    width: 100,
    transform: "translate(-50%,-50%)",
  },
  ({ pos = [] }) => ({
    animation: rotate + " 120s linear infinite" + (pos[2] ? " reverse" : ""),
    left: pos[0] + "%",
    top: pos[1] + "%",
  })
);

const Wrapper = styled.div({
  position: "fixed",
  top: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: -2,
});

const Image = styled.img(
  {
    width: "100%",
  },
  ({ angle = 0 }) => ({
    transform: `rotate(${angle}deg)`,
  })
);

const subtleItems = [
  "/img/background/shape1.png",
  "/img/background/shape2.png",
  "/img/background/shape3.png",
  "/img/background/shape4.png",
  "/img/background/shape5.png",
];

const backgroundItems = [
  "/img/background/boba.png",
  "/img/background/lemon1.png",
  "/img/background/lemon2.png",
  "/img/background/moon.png",
  "/img/background/saturn.png",
  "/img/background/shuttle.png",
  "/img/background/star.png",
];

const getRandomPosition = () => {
  return [Math.random() * 100, Math.random() * 100, Math.random() >= 0.5];
};

export const ApplyBackground = ({ children }) => (
  <>
    <Wrapper>
      {subtleItems.map((i) => (
        <ImageWrapper pos={getRandomPosition()}>
          <Image src={i} angle={Math.random() * 360} />
        </ImageWrapper>
      ))}
      {backgroundItems.map((i) => (
        <ImageWrapper pos={getRandomPosition()}>
          <Image src={i} angle={Math.random() * 360} />
        </ImageWrapper>
      ))}
    </Wrapper>
    {children}
  </>
);
