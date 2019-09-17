import PropTypes from 'prop-types';
import React from 'react';

import Head from '../../../../_atoms/Head';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper/ResponsiveWrapper';
import { withText } from '../../../../../text/textStore';
import style from './HomePageMain.css';

const HomePageMain = ({ Text: text }) => (
  <>
    <Head title={text({ path: 'defaultTitle' })} />
    <ResponsiveWrapper>
      <div className={style.temp}>
        hello
      </div>
    </ResponsiveWrapper>
  </>
);

HomePageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(HomePageMain);
