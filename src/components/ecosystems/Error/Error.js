import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import background from '../../../images/svg/background.svg';
import Background from '../../_atoms/BackgroundContainer';
import { ResponsiveDivider, ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../_atoms/ResponsiveWrapper';
import withText from '../../_atoms/Text';
import Heading from '../../_molecules/Heading';
import { Card, CardContent } from '../../_organisms/Card';

const Error = ({ Text }) => (
  <Background image={background}>
    <ResponsiveWrapper>
      <Helmet>
        <title>{`${Text.get('HeadTitle')}`}</title>
      </Helmet>
      <Card topper>
        <CardContent>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Heading center>
                <Text path="Title" />
              </Heading>
              <Heading center level={3}>
                <Text path="SubTitle" />
              </Heading>
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);

Error.propTypes = {
  Text: PropTypes.func.isRequired,
};
export default withText('ComingSoon')(Error);
