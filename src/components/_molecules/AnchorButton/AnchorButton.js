import React from 'react';
import PropType from 'prop-types';
import AbstractElement from '../../_atoms/AbstractElement';


const AnchorButton = ({
  children,
  ...props
}) => (
  <AbstractElement
    as="a"
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
