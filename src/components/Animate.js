import React from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { play } from "./Timelines/timeline";

export const Animate = ({ children }) => {
  let subject = children;
  if (children.length > 1) subject = <div>{children}</div>;
  return (
    <TransitionGroup component={null}>
      <Transition appear={true} onEnter={play}>
        {subject}
      </Transition>
    </TransitionGroup>
  );
};
