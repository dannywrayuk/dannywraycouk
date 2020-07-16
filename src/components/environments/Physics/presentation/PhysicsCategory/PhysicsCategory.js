import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import backgroundimage from '../../../../../images/svg/background.svg';
import Background from '../../../../_atoms/BackgroundContainer';
import { Card, CardContent } from '../../../../_atoms/Card';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_atoms/ResponsiveWrapper';
import withText from '../../../../_atoms/Text';
import Contents from '../../../../ecosystems/Contents';
import BigTitle from '../../../../styled/BigTitle';
import Paragraph from '../../../../styled/Paragraph';
import { ItalicSmallTitle } from './PhysicsCategory.style';

const PhysicsCategory = ({ Text, category }) => (
  <Background image={backgroundimage}>
    <Helmet>
      <title>{`${Text.get(`${category}.Title`)}`}</title>
    </Helmet>
    <ResponsiveWrapper>
      <Card topper>
        <CardContent>
          <BigTitle center>
            <Text path={`${category}.Heading`} />
          </BigTitle>
          <ItalicSmallTitle center>
            <Text path={`${category}.SubHeading`} />
          </ItalicSmallTitle>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Paragraph center>
                <Text path={`${category}.Body`} />
              </Paragraph>
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Contents category={category} />
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);

PhysicsCategory.propTypes = {
  Text: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default withText('Physics.Categories')(PhysicsCategory);
