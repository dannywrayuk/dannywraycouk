import PropTypes from 'prop-types';
import React from 'react';

import style from './SectionMarker.css';

const SectionMarker = ({ dashed }) => (
  <hr className={dashed ? style.SectionMarkerDashed : style.SectionMarker} />
);

SectionMarker.propTypes = {
  dashed: PropTypes.bool,
};

SectionMarker.defaultProps = {
  dashed: false,
};

export default SectionMarker;
