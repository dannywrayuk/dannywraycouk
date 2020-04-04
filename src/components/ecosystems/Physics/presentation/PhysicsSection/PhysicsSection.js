import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import backgroundimage from '../../../../../images/svg/background.svg';
import { withText } from '../../../../../text/textStore';
import Background from '../../../../_atoms/BackgroundContainer';
import Heading from '../../../../_molecules/Heading';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_molecules/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper';
import { Card, CardContent } from '../../../../_organisms/Card';
import Contents from '../../../../_organisms/Contents';

import style from './PhysicsSection.css';

const PhysicsSection = ({ match, Text, Text: text }) => {
  const { section } = match.params;
  return (
    <Background image={backgroundimage}>
      <Helmet>
        <title>{`${text({ path: `${section}.Title` })}`}</title>
      </Helmet>
      <ResponsiveWrapper>
        <Card topper>
          <CardContent>
            <Heading center>
              <Text path={`${section}.Heading`} />
            </Heading>
            <Heading level={4} center className={style.subHeading}>
              <Text path={`${section}.SubHeading`} />
            </Heading>
            <ResponsiveDivider>
              <ResponsiveElement>
                <p className={style.IntroductionText}>
                  <Text path={`${section}.Body`} />
                </p>
              </ResponsiveElement>
            </ResponsiveDivider>
            <ResponsiveDivider>
              <Contents section={section} />
            </ResponsiveDivider>
          </CardContent>
        </Card>
      </ResponsiveWrapper>
    </Background>
  );
};

PhysicsSection.propTypes = {
  Text: PropTypes.func.isRequired,
  match: PropTypes.object,
  params: PropTypes.object,
};

PhysicsSection.defaultProps = {
  match: { params: { section: 0 } },
  params: { section: 0 },
};

export default withText('PhysicsPage.Sections')(PhysicsSection);
