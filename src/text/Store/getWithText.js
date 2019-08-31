import React, { forwardRef } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import getText from './getText';

export default ({ Consumer, hocs }) => (basePath = '') => (OriginalComponent) => {
  const NewComponent = forwardRef((props, ref) => (
    <Consumer>
      {({
        params: storeParams,
        value: storeValue,
        transformers: transformerMap,
        resolvers: resolverMap,
      }) => {
        const Text = getText({
          storeParams,
          storeValue,
          basePath,
          resolverMap,
          transformerMap,
        });
        const extraProps = Object
          .entries(hocs)
          .reduce((textComps,
            [name, hoc]) => ({
            ...textComps,
            [name]: hoc(Text),
          }),
          {});

        return (
          <OriginalComponent
            {...props}
            {...extraProps}
            Text={Text}
            ref={ref}
          />
        );
      }}
    </Consumer>
  ));

  NewComponent.displayName = `withText(${basePath})(${
    OriginalComponent.displayName || OriginalComponent.name || 'component'})`;

  NewComponent.OriginalComponent = OriginalComponent;

  return hoistNonReactStatics(NewComponent, OriginalComponent);
};
