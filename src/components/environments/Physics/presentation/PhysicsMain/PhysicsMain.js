import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import backgroundimage from '../../../../../images/svg/background.svg';
import Background from '../../../../_atoms/BackgroundContainer';
import { Card, CardContent } from '../../../../_atoms/Card';
import Heading from '../../../../_atoms/Heading';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_atoms/ResponsiveWrapper';
import withText from '../../../../_atoms/Text';
import PhysicsIcons from '../../../../_organisms/PhysicsIcons';
import { IntroductionText } from './PhysicsMain.style';

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
              <IntroductionText>
                <Text path="Body" />
              </IntroductionText>
            </ResponsiveElement>
          </ResponsiveDivider>
          <PhysicsIcons />
          <ResponsiveDivider>
            <ResponsiveElement>
              <IntroductionText>
                <Text path="UnderCard" />
              </IntroductionText>
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
