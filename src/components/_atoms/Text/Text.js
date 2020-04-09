import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Content from '../../../text/WebText';

const getText = (path, root = '', src = Content) => {
  let value = src;
  if (root !== '') {
    value = getText(root);
  }
  path.split('.').forEach(element => {
    try {
      value = value[element];
    } catch (e) {
      throw ReferenceError(`No data exists at path: ${root}.${path}`);
    }
  });
  return value;
};

const Text = (root, src) => ({ path }) => (
  <>
    {getText(path, root, src)}
  </>
);


Text.propTypes = {
  path: PropTypes.string.isRequired,
};

const withText = (root, src) => (Component) => {
  const T = Text(root, src);
  T.get = (path) => getText(path, root, src);
  const withTextComponent = forwardRef((props, ref) => (
    <Component
      {...props}
      Text={T}
      ref={ref}
    />
  ));
  return withTextComponent;
};


export default withText;
