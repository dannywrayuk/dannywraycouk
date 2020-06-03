import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import background from '../../../images/svg/background.svg';
import Background from '../../_atoms/BackgroundContainer';
import { Card, CardContent } from '../../_atoms/Card';
import { ResponsiveDivider, ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../_atoms/ResponsiveWrapper';
import withText from '../../_atoms/Text';
import BigTitle from '../../styled/BigTitle';
import SmallTitle from '../../styled/SmallTitle';

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
              <BigTitle center>
                <Text path="Title" />
              </BigTitle>
              <SmallTitle center>
                <Text path="SubTitle" />
              </SmallTitle>
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
