import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import backgroundimage from '../../../../../images/svg/background.svg';
import Background from '../../../../_atoms/BackgroundContainer';
import { Card, CardContent } from '../../../../_atoms/Card';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_atoms/ResponsiveWrapper';
import withText from '../../../../_atoms/Text';
import PhysicsIcons from '../../../../_organisms/PhysicsIcons';
import BigTitle from '../../../../styled/BigTitle';
import Paragraph from '../../../../styled/Paragraph';

const PhysicsMain = ({ Text }) => (
  <Background image={backgroundimage}>
    <Helmet>
      <title>{`${Text.get('Title')}`}</title>
    </Helmet>
    <ResponsiveWrapper>
      <Card topper>
        <CardContent>
          <BigTitle center>
            <Text path="Heading" />
          </BigTitle>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Paragraph center>
                <Text path="Body" />
              </Paragraph>
            </ResponsiveElement>
          </ResponsiveDivider>
          <PhysicsIcons />
          <ResponsiveDivider>
            <ResponsiveElement>
              <Paragraph center>
                <Text path="UnderCard" />
              </Paragraph>
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
