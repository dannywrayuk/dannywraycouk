import PropType from 'prop-types';
import React from 'react';

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
  style: PropType.shape({}),
};

AnchorButton.defaultProps = {
  to: null,
  children: null,
  style: null,
};

export default AnchorButton;
