import React from 'react';
import PropTypes from 'prop-types';

import contents from '../../../text/Physics/Contents.json';
import Accordion from '../../_organisms/Accordion';

const Contents = ({ catagory }) => (
  <>
    {Object.entries(contents[catagory]).map((d) => (
      <Accordion key={`${catagory}${d[0]}`} structure={d} />
    ))}
  </>
);

Contents.propTypes = {
  catagory: PropTypes.string.isRequired,
};


export default Contents;
