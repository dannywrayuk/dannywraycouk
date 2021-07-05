import { useState, useEffect } from "react";

const FadeOnScroll = ({
  start = 0,
  stop = 0,
  invert = false,
  initiallyVisible = true,
  children,
}) => {
  const [shouldFade, setShouldFade] = useState(initiallyVisible);
  useEffect(() => {
    let isFirstLoad = true;
    window.onscroll = () => {
      isFirstLoad &&
        setShouldFade(
          (start ? window.pageYOffset > start * window.innerHeight : true) &&
            (stop ? window.pageYOffset < stop * window.innerHeight : true)
        );
    };
    return () => {
      isFirstLoad = false;
    };
  });

  return (
    <div
      style={{
        transition: "opacity 1s",
        opacity: shouldFade !== invert ? 1 : 0,
        pointerEvents: shouldFade !== invert ? "initial" : "none",
      }}
    >
      {children}
    </div>
  );
};

export default FadeOnScroll;
