import React from "react";

export const useReveal = (initial) => {
  const [state, setState] = React.useState(initial);
  const setStateTrue = () => setState(true);
  const setStateFalse = () => setState(false);
  const toggleState = () => setState(!state);
  return [state, setStateTrue, setStateFalse, toggleState];
};
