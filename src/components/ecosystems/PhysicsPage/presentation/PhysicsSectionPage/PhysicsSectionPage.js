import React from 'react';
import PropTypes from 'prop-types';

import backgroundimage from '../../../../../images/svg/background.svg';
import { withText } from '../../../../../text/textStore';
import Background from '../../../../_atoms/BackgroundContainer';
import Head from '../../../../_atoms/Head';
import Heading from '../../../../_molecules/Heading';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper';
import { Card, CardContent } from '../../../../_organisms/Card';

const PhysicsSectionPage = (props) => {
  const { match } = props;
  const { section } = match.params;
  const { Text: text } = props;
  return (
    <Background image={backgroundimage}>
      <Head title={text({ path: 'PhysicsMainTitle' })} />
      <ResponsiveWrapper>
        <Card topper>
          <CardContent>
            <Heading center>
              {section}
            </Heading>
          </CardContent>
        </Card>
      </ResponsiveWrapper>
    </Background>
  );
};

PhysicsSectionPage.propTypes = {
  Text: PropTypes.func.isRequired,
  match: PropTypes.object,
  params: PropTypes.object,
};

PhysicsSectionPage.defaultProps = {
  match: { params: { section: 0 } },
  params: { section: 0 },
};

export default withText('PhysicsPage')(PhysicsSectionPage);
