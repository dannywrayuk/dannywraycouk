import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import { withText } from '../../../text/textStore';


const Font = ({ Text: text, name }) => (
  <Helmet>
    <link
      rel="stylesheet"
      href={text({ path: name })}
    />
  </Helmet>
);

Font.propTypes = {
  Text: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default withText('Fonts')(Font);
