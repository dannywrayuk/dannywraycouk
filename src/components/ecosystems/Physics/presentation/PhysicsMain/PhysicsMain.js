import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import backgroundimage from '../../../../../images/svg/background.svg';
import Background from '../../../../_atoms/BackgroundContainer';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_atoms/ResponsiveWrapper';
import withText from '../../../../_atoms/Text';
import Heading from '../../../../_molecules/Heading';
import { Card, CardContent } from '../../../../_organisms/Card';
import PhysicsIcons from '../../../../_organisms/PhysicsIcons';

import style from './PhysicsMain.css';

const PhysicsMain = ({ Text }) => (
  <Background image={backgroundimage}>
    <Helmet>
      <title>{`${Text.get('Title')}`}</title>
    </Helmet>
    <ResponsiveWrapper>
      <Card topper>
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

PhysicsMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Physics.Main')(PhysicsMain);