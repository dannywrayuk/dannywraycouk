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
import Contents from '../../../../_organisms/Contents';

import style from './PhysicsCatagory.css';

const PhysicsCatagory = ({ Text, catagory }) => (
  <Background image={backgroundimage}>
    <Helmet>
      <title>{`${Text.get(`${catagory}.Title`)}`}</title>
    </Helmet>
    <ResponsiveWrapper>
      <Card topper>
        <CardContent>
          <Heading center>
            <Text path={`${catagory}.Heading`} />
          </Heading>
          <Heading level={4} center className={style.subHeading}>
            <Text path={`${catagory}.SubHeading`} />
          </Heading>
          <ResponsiveDivider>
            <ResponsiveElement>
              <p className={style.IntroductionText}>
                <Text path={`${catagory}.Body`} />
              </p>
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <Contents catagory={catagory} />
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
