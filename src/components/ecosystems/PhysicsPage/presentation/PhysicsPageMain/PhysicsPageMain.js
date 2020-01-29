import React from 'react';
import PropTypes from 'prop-types';

import backgroundimage from '../../../../../images/svg/background.svg';
import { withText } from '../../../../../text/textStore';
import Background from '../../../../_atoms/BackgroundContainer';
import Head from '../../../../_atoms/Head';
import Heading from '../../../../_molecules/Heading';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_molecules/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper';
import { Card, CardContent } from '../../../../_organisms/Card';
import PhysicsIcons from '../../../../_organisms/PhysicsIcons';

import style from './PhysicsPageMain.css';

const PhysicsPageMain = ({ Text: text, Text }) => (
  <Background image={backgroundimage}>
    <Head title={text({ path: 'PhysicsMainTitle' })} />
    <ResponsiveWrapper>
      <Card>
        <CardContent>
          <Heading center>
            <Text path="Heading" />
          </Heading>
          <ResponsiveDivider>
            <ResponsiveElement>
              <p className={style.IntroductionText}>
                <Text path="Body" />
              </p>
            </ResponsiveElement>
          </ResponsiveDivider>
          <PhysicsIcons />
          <ResponsiveDivider>
            <ResponsiveElement>
              <p className={style.IntroductionText}>
                <Text path="UnderCard" />
              </p>
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);

PhysicsPageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('PhysicsPage')(PhysicsPageMain);
