import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import background from '../../../images/svg/background.svg';
import { withText } from '../../../text/textStore';
import Background from '../../_atoms/BackgroundContainer';
import { ResponsiveDivider, ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../_atoms/ResponsiveWrapper';
import Heading from '../../_molecules/Heading';
import { Card, CardContent } from '../../_organisms/Card';

const Error = ({ Text, Text: text }) => (
  <Background image={background}>
    <ResponsiveWrapper>
      <Helmet>
        <title>{`${text({ path: 'HeadTitle' })}`}</title>
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
