import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { bp } from "@utils/breakpoints";
import { useEffect, useState } from "react";

const rotate = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const ImageWrapper = styled.div(
  {
    position: "absolute",
    width: 80,
    "@media (max-height: 700px)": {
      width: 50,
    },
  },
  ({ pos = [] }) => ({
    animation: rotate + " 60s linear infinite" + (pos[2] ? " reverse" : ""),
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

const FixedWrapper = styled.div({
  position: "fixed",
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: -2,
  pointerEvents: "none",
});

const StaticBackground = styled.div(({ image }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundImage: `url(/img/background/${image})`,
  backgroundRepeat: "repeat",
}));

const smallItems = ["moon", "star"];

const largeItems = ["boba", "lemon", "saturn", "shuttle"];

const pickRandom = (x) => x[Math.round(Math.random() * (x.length - 1))];

const items = Array(10)
  .fill(undefined)
  .map(() => ({
    image: pickRandom(smallItems),
    position: [
      Math.random() * 100,
      5 + Math.random() * 90,
      Math.random() >= 0.5,
    ],
    angle: Math.random() * 360,
  }))
  .concat(
    Array(5)
      .fill(undefined)
      .map((x, id) => ({
        image: pickRandom(largeItems),
        position: [
          id % 2 ? Math.random() * 15 : 95 - Math.random() * 15,
          15 + id * 16 + (Math.random() * 20 - 10),
          Math.random() >= 0.5,
        ],
      }))
  );

export const ApplyBackground = ({ children }) => {
  const [displayType, setDisplayType] = useState(undefined);

  useEffect(() => {
    const resized = () =>
      setDisplayType(window.innerWidth > bp.lg * 16 ? "large" : "small"); // 16, em to px conversion
    window.addEventListener("resize", resized);
    resized();
    return () => window.removeEventListener("resize", resized);
  }, []);

  if (displayType === "large")
    return (
      <>
        <FixedWrapper>
          <StaticBackground image="random-shapes.svg" />
          {items.map((x, id) => (
            <ImageWrapper pos={x.position} key={id}>
              <Image
                src={`/img/background/${x.image}.png`}
                angle={Math.random() * 360}
              />
            </ImageWrapper>
          ))}
        </FixedWrapper>
        {children}
      </>
    );

  if (displayType === "small") {
    return (
      <>
        <FixedWrapper>
          <StaticBackground image="random-shapes-mobile.svg" />
          <StaticBackground image="random-shapes.svg" />
        </FixedWrapper>
        {children}
      </>
    );
  }
  return (
    <>
      <FixedWrapper>
        <StaticBackground image="random-shapes.svg" />
      </FixedWrapper>
      {children}
    </>
  );
};
