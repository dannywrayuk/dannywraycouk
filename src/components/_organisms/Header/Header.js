import React from 'react';
import PropTypes from 'prop-types';
import { withText } from '../../../text/textStore';
import LinkButton from '../../_molecules/LinkButton';

import style from './Header.css';

const Header = ({ Text }) => (
  <div className={style.div}>
    <p className={style.text}>D</p>
    <LinkButton
      to="banter"
      modifierStyles={{
        root: style.xxx,
      }}
    >
      <Text path="Link" />
    </LinkButton>
  </div>
);

Header.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('HomePageMain.Header')(Header);
