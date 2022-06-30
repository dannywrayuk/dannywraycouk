import { useState } from "react";

export const useCycle = (cycle) => {
  const [value, setValue] = useState(0);
  const maxValue = cycle.length ? cycle.length : cycle;
  const returnValue = cycle[value] ? cycle[value] : value;
  const cycleValue = () => {
    setValue((value + 1) % maxValue);
  };
  return [returnValue, cycleValue];
};
