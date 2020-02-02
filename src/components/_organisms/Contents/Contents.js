import React from 'react';
import PropTypes from 'prop-types';

import Quantum from '../../../text/Physics/Contents/Quantum.md';
import FetchHTML from '../../_molecules/FetchHTML';

import style from './Contents.css';

const Contents = ({ section }) => {
  if (section === 'quantum') return <FetchHTML containerName={style.contentsContainer} location={Quantum} />;

  return <p>Yeet</p>;
};

Contents.propTypes = {
  section: PropTypes.string.isRequired,
};


export default Contents;
