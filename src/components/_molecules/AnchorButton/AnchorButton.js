import React from 'react';
import PropType from 'prop-types';

import AbstractElement from '../../_atoms/AbstractElement';

const AnchorButton = ({
  children,
  to,
  ...props
}) => (
  <AbstractElement
    as="a"
    href={to}
    {...props}
  >
    {children}
  </AbstractElement>
);

AnchorButton.propTypes = {
  to: PropType.string,
  children: PropType.node,
};

AnchorButton.defaultProps = {
  to: null,
  children: null,
};

export default AnchorButton;
