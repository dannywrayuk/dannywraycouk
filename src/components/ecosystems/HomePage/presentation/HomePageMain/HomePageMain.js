import React from 'react';
import PropTypes from 'prop-types';

import { withText } from '../../../../../text/textStore';
import Head from '../../../../_atoms/Head';
import Logo from '../../../../_atoms/Logo';
import Heading from '../../../../_molecules/Heading';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_molecules/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper';
import { Card, CardContent, CardFooter } from '../../../../_organisms/Card';

import style from './HomePageMain.css';

// import ShapeBlob from '../../../../_atoms/ShapeBlob';


const HomePageMain = ({ Text, Text: text }) => (
  <>
    <Head title={text({ path: 'Title' })} />
    <ResponsiveWrapper>
      <ResponsiveDivider>
        <ResponsiveElement width={1}>
          <center>
            <Logo className={style.logo} />
          </center>
        </ResponsiveElement>
        <ResponsiveElement width={2}>
          <Heading center>
            <Text path="Title" />
          </Heading>
          <Heading level={2} center>
            <Text path="SubTitle" />
          </Heading>
        </ResponsiveElement>
      </ResponsiveDivider>
      <Card>
        <CardContent>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Heading level={4}>
                <Text path="IntroCard.Programming.Title" />
              </Heading>
              <p>
                <Text path="IntroCard.Programming.Body" />
              </p>
            </ResponsiveElement>
            <ResponsiveElement>
              <Heading level={4}>
                <Text path="IntroCard.Physics.Title" />
              </Heading>
              <p>
                <Text path="IntroCard.Physics.Body" />
              </p>
            </ResponsiveElement>
            <ResponsiveElement>
              <Heading level={4}>
                <Text path="IntroCard.More.Title" />
              </Heading>
              <p>
                <Text path="IntroCard.More.Body" />
              </p>
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
        <CardFooter>
          <Text path="IntroCard.FooterText" />
        </CardFooter>
      </Card>
      <Card>
        <CardContent>
          <Heading level={2} center>
            <Text path="PhysicsCard.Title" />
          </Heading>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Text path="Description" />
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Text path="BlogCard.Title" />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Text path="ProjectCard.Title" />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Text path="MoreCard.Title" />
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </>
);

HomePageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('HomePageMain')(HomePageMain);
