import PropTypes from 'prop-types';
import React from 'react';

import IconURL from '../../../utilities/IconURL';

const Icon = ({
  icon, outlined, rounded, twotone, sharp,
}) => {
  let variant = '';
  if (outlined) {
    variant += 'outlined';
  }
  if (twotone) {
    variant += 'twotone';
  }
  if (rounded) {
    variant += 'round';
  }
  if (sharp) {
    variant += 'sharp';
  }
  if (variant.length > 9) { throw new Error('Only one style can be specified at one time.'); }
  return (<img src={IconURL(icon, variant)} alt="" />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  outlined: PropTypes.bool,
  rounded: PropTypes.bool,
  twotone: PropTypes.bool,
  sharp: PropTypes.bool,
};

Icon.defaultProps = {
  outlined: false,
  rounded: false,
  twotone: false,
  sharp: false,
};

export default Icon;
