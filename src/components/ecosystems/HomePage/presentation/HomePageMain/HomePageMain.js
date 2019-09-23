import PropTypes from 'prop-types';
import React from 'react';

import Head from '../../../../_atoms/Head';
import Icon from '../../../../_atoms/Icon';
import SectionMarker from '../../../../_atoms/SectionMarker';
import Heading from '../../../../_molecules/Heading';
import ResponsiveDivider from '../../../../_molecules/ResponsiveDivider';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper';
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
          <Text path="Pangram" />
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
        <ResponsiveDivider
          FirstSection={(
            <p>
            Build apps fast, without managing infrastructure
            Firebase gives you functionality like analytics, databases, messaging
            and crash reporting so you can move quickly and focus on your users.
            </p>
)}
          SecondSection={(
            <p>
            Backed by Google, trusted by top apps
            Firebase is built on Google infrastructure and
            scales automatically, for even the largest apps.
            </p>
)}
          ThirdSection={(
            <p>
            One platform, with products that work better together
            Firebase products work great individually but share data and insights,
            so they work even better together.
            </p>
)}
        />
      </Card>
      <Card>
        <ResponsiveDivider
          FirstSection={
            <p>first section</p>
        }
          SecondSection={
            <p>second section</p>
        }
        />
      </Card>
      <Card>
        <Icon icon="home" />
        <Icon icon="home" rounded />
        <Icon icon="home" twotone />
        <Icon icon="home" sharp />
        <Icon icon="home" outlined />
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
