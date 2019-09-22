import PropTypes from 'prop-types';
import React from 'react';

import Head from '../../../../_atoms/Head';
import SectionMarker from '../../../../_atoms/SectionMarker';
import Heading from '../../../../_molecules/Heading';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper/ResponsiveWrapper';
import Card from '../../../../_organisms/Card';
import { withText } from '../../../../../text/textStore';
// import style from './HomePageMain.css';

const HomePageMain = ({ Text, Text: text }) => (
  <>
    <Head title={text({ path: 'defaultTitle' })} />
    <ResponsiveWrapper>
      <Card>
        <Heading>
          <Text path="defaultTitle" />
        </Heading>
        <Heading level={2} center>
          <Text path="defaultTitle" />
        </Heading>
        <Heading level={3}>
          <Text path="defaultTitle" />
        </Heading>
        <SectionMarker />
        <SectionMarker dashed />
        <Heading level={4}>
          <Text path="defaultTitle" />
        </Heading>
        <Heading level={5}>
          <Text path="defaultTitle" />
        </Heading>
        <Heading level={6}>
          <Text path="defaultTitle" />
        </Heading>
        <p>card1</p>
      </Card>
      <Card footer={<p>footer</p>}>
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
