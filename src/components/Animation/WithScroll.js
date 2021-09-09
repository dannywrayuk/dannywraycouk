import { motion, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";

export const WithScroll = ({
  children,
  initialStyle,
  activeStyle = { opacity: 1, pointerEvents: "initial" },
  inactiveStyle = { opacity: 0, pointerEvents: "none" },
  start = 0.3,
  stop,
  animated,
}) => {
  if (!animated) return children;
  const { scrollY } = useViewportScroll();
  const [active, setActive] = useState(false);
  const variants = {
    active: activeStyle,
    inactive: inactiveStyle,
  };
  if (!initialStyle) initialStyle = inactiveStyle;
  useEffect(() => {
    let isMounted = true;
    scrollY.onChange(
      (v) =>
        isMounted &&
        setActive(
          (start ? v > start * window.innerHeight : true) &&
            (stop ? v < stop * window.innerHeight : true)
        )
    );
    return () => {
      isMounted = false;
    };
  });
  return (
    <motion.div
      animate={active ? "active" : " inactive"}
      variants={variants}
      initial={initialStyle}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
