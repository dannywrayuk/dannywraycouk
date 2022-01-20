import { useState, useEffect } from "react";

const addListenerPolyfill = (queryList, updateMatch) => {
  try {
    // Unsupported on safari <14 (~Nov 2020)
    queryList.addEventListener("change", updateMatch);
  } catch (error) {
    queryList.addListener(updateMatch);
  }
};
const removeListenerPolyfill = (queryList, updateMatch) => {
  try {
    // Unsupported on safari <14 (~Nov 2020)
    queryList.removeEventListener("change", updateMatch);
  } catch (error) {
    queryList.removeListener(updateMatch);
  }
};

export const useMediaQuery = (query) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const queryList = window.matchMedia(query.replace("@media ", ""));
    const updateMatch = () => {
      setMatch(queryList.matches);
    };
    updateMatch();
    addListenerPolyfill(queryList, updateMatch);
    return () => removeListenerPolyfill(queryList, updateMatch);
  }, []);

  return match;
};
