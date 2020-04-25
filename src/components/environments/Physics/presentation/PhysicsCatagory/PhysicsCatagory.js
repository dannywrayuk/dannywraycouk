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
import { ItalicSmallTitle } from './PhysicsCatagory.style';

const PhysicsCatagory = ({ Text, catagory }) => (
  <Background image={backgroundimage}>
    <Helmet>
      <title>{`${Text.get(`${catagory}.Title`)}`}</title>
    </Helmet>
    <ResponsiveWrapper>
      <Card topper>
        <CardContent>
          <BigTitle center>
            <Text path={`${catagory}.Heading`} />
          </BigTitle>
          <ItalicSmallTitle center>
            <Text path={`${catagory}.SubHeading`} />
          </ItalicSmallTitle>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Paragraph>
                <Text path={`${catagory}.Body`} />
              </Paragraph>
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Contents catagory={catagory} />
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);

PhysicsCatagory.propTypes = {
  Text: PropTypes.func.isRequired,
  catagory: PropTypes.string.isRequired,
};

export default withText('Physics.Catagories')(PhysicsCatagory);
