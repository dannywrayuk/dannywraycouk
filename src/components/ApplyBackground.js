import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { bp } from "@utils/breakpoints";
import { useEffect, useState } from "react";

const rotate = keyframes({
  from: {
    transform: "translate(-50%,-50%) rotate(0deg)",
  },
  to: {
    transform: "translate(-50%,-50%) rotate(360deg)",
  },
});

const ImageWrapper = styled.div(
  {
    position: "absolute",
    width: 100,
  },
  ({ pos = [] }) => ({
    animation: rotate + " 120s linear infinite" + (pos[2] ? " reverse" : ""),
    left: pos[0] + "%",
    top: pos[1] + "%",
  })
);

const Image = styled.img(
  {
    width: "100%",
  },
  ({ angle = 0 }) => ({
    transform: `rotate(${angle}deg)`,
  })
);

const getRandomPosition = () => {
  return [Math.random() * 100, Math.random() * 100, Math.random() >= 0.5];
};

const backgroundItems = [
  "/img/background/shape1.png",
  "/img/background/shape2.png",
  "/img/background/shape3.png",
  "/img/background/shape4.png",
  "/img/background/shape5.png",
  "/img/background/boba.png",
  "/img/background/lemon.png",
  "/img/background/moon.png",
  "/img/background/saturn.png",
  "/img/background/shuttle.png",
  "/img/background/star.png",
];

const StaticBackground = styled.div(({ src }) => ({
  position: "fixed",
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: -2,
  pointerEvents: "none",
  backgroundImage: `url(${src})`,
  backgroundRepeat: "repeat",
}));
const MovingBackground = () => (
  <StaticBackground src="/img/background/random-shapes.svg">
    {backgroundItems.map((i) => (
      <ImageWrapper pos={getRandomPosition()}>
        <Image src={i} angle={Math.random() * 360} />
      </ImageWrapper>
    ))}
  </StaticBackground>
);

export const ApplyBackground = ({ children }) => {
  const [isLargeDisplay, setIsLargeDisplay] = useState(false);

  useEffect(() => {
    const resized = () => setIsLargeDisplay(window.innerWidth > bp.lg * 16); // 16, em to px conversion
    window.addEventListener("resize", resized);
    resized();
    return () => window.removeEventListener("resize", resized);
  }, []);

  if (isLargeDisplay)
    return (
      <>
        <MovingBackground />
        {children}
      </>
    );

  return (
    <>
      <StaticBackground src="/img/background/random-shapes-mobile.svg" />
      {children}
    </>
  );
};
