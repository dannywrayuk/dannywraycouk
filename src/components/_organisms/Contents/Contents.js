import React from 'react';
import PropTypes from 'prop-types';

import contents from '../../../text/Physics/Contents.json';
import Accordion from '../Accordion';

import style from './Contents.css';

const Contents = ({ section }) => (
  <div className={style.contents}>
    {contents[section] && contents[section].length > 0 ? contents[section].map((d) => (
      <Accordion key={`${section}${d.title}`} structure={d} />
    )) : null }
  </div>
);

Contents.propTypes = {
  section: PropTypes.string.isRequired,
};


export default Contents;
