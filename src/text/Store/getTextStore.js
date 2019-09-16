import PropTypes from 'prop-types';
import React from 'react';

export default ({ Provider }) => {
  const TextStore = ({
    value, params, children, resolvers, transformers,
  }) => (
    <Provider
      value={{
        value,
        params,
        resolvers,
        transformers,
      }}
    >
      {children}
    </Provider>
  );

  TextStore.propTypes = {
    value: PropTypes.shape({}).isRequired,
    params: PropTypes.shape({}),
    children: PropTypes.node,
    resolvers: PropTypes.objectOf(PropTypes.func),
    transformers: PropTypes.objectOf(PropTypes.func),
  };
  TextStore.defaultProps = {
    params: {},
    children: null,
    resolvers: {},
    transformers: {},
  };

  return TextStore;
};
