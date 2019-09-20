import PropTypes from 'prop-types';
import React from 'react';

import Head from '../../../../_atoms/Head';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper/ResponsiveWrapper';
import Card from '../../../../_organisms/Card';
import { withText } from '../../../../../text/textStore';
// import style from './HomePageMain.css';

const HomePageMain = ({ Text: text }) => (
  <>
    <Head title={text({ path: 'defaultTitle' })} />
    <ResponsiveWrapper>
      <Card>
        <p>card1</p>
      </Card>
      <Card>
        <p>card2</p>
      </Card>
      <Card>
        <p>card3</p>
      </Card>
      <Card>
        <p>card4</p>
      </Card>
      <Card>
        <p>card5</p>
      </Card>
    </ResponsiveWrapper>
  </>
);

HomePageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Meta')(HomePageMain);
