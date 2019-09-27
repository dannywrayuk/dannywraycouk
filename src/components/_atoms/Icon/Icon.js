import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import style from './Icon.css';

const Icon = ({
  icon, outlined, rounded, twotone, sharp, className,
}) => {
  const [iconStyle, setIconStyle] = useState(style.hidden);
  useEffect(() => {
    let variant = 'filled';
    let c = 0;
    if (outlined) {
      variant = 'outlined';
      c++;
    }
    if (twotone) {
      variant = 'twotone';
      c++;
    }
    if (rounded) {
      variant = 'round';
      c++;
    }
    if (sharp) {
      variant = 'sharp';
      c++;
    }
    if (c > 1) { throw new Error('Only one style can be specified at one time.'); }
    setIconStyle(`${className} ${style[variant]} ${style.Icon}`);
  }, [className]);
  return (<i className={iconStyle}>{icon}</i>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  outlined: PropTypes.bool,
  rounded: PropTypes.bool,
  twotone: PropTypes.bool,
  sharp: PropTypes.bool,
  className: PropTypes.string,
};

Icon.defaultProps = {
  outlined: false,
  rounded: false,
  twotone: false,
  sharp: false,
  className: '',
};

export default Icon;
