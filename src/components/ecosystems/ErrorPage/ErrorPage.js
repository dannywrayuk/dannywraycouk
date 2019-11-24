import React from 'react';
import PropTypes from 'prop-types';

import background from '../../../images/svg/background.svg';
import { withText } from '../../../text/textStore';
import Background from '../../_atoms/BackgroundContainer';
import Head from '../../_atoms/Head';
import Heading from '../../_molecules/Heading';
import { ResponsiveDivider, ResponsiveElement } from '../../_molecules/ResponsiveDividers';
import ResponsiveWrapper from '../../_molecules/ResponsiveWrapper';
import { Card, CardContent } from '../../_organisms/Card';

const ErrorPage = ({ Text, Text: text }) => (
  <Background image={background}>
    <ResponsiveWrapper>
      <Head title={text({ path: 'HeadTitle' })} />
      <div style={{ height: '30px' }} />
      <Card>
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

ErrorPage.propTypes = {
  Text: PropTypes.func.isRequired,
};
export default withText('ComingSoon')(ErrorPage);
