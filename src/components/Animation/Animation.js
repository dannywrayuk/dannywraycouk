import { Transition, TransitionGroup } from "react-transition-group";

export const Animation = ({ children, onEnter, onExit, timeout = 3 }) => {
  let subject = children;
  if (children.length > 1) subject = <div>{children}</div>;
  return (
    <TransitionGroup component={null}>
      <Transition
        appear={true}
        onEnter={onEnter}
        onExit={onExit}
        timeout={timeout}
      >
        {subject}
      </Transition>
    </TransitionGroup>
  );
};
