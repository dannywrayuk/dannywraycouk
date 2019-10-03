import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Apple } from '../../../../../images/svg/apple.svg';
import { ReactComponent as Atom } from '../../../../../images/svg/atom.svg';
import { ReactComponent as Flame } from '../../../../../images/svg/flame.svg';
import { ReactComponent as Pi } from '../../../../../images/svg/pi.svg';
import { ReactComponent as Sun } from '../../../../../images/svg/sun.svg';
import { withText } from '../../../../../text/textStore';
import Head from '../../../../_atoms/Head';
import Icon from '../../../../_atoms/Icon';
// import Logo from '../../../../_atoms/Logo';
import ShapeBlob from '../../../../_atoms/ShapeBlob';
import Heading from '../../../../_molecules/Heading';
import IconCard from '../../../../_molecules/IconCard';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_molecules/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper';
import { Card, CardContent, CardFooter } from '../../../../_organisms/Card';

import style from './HomePageMain.css';

const HomePageMain = ({ Text, Text: text }) => (
  <ResponsiveWrapper>
    <Head title={text({ path: 'HeadTitle' })} />
    <ResponsiveDivider>
      <ResponsiveElement width={2}>
        <Heading>
          <Text path="Title" />
        </Heading>
        <Heading level={2}>
          <Text path="SubTitle" />
        </Heading>
      </ResponsiveElement>
      {/* <center>
        <ResponsiveElement width={1}>
          <Logo className={style.logo} />
        </ResponsiveElement>
      </center> */}
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
        <div className={style.physicsblobs}>
          <ResponsiveElement>
            <IconCard strings="HomePageMain.PhysicsCard.Catagories.1">
              <ShapeBlob>
                <Atom width="25px" />
              </ShapeBlob>
            </IconCard>
          </ResponsiveElement>
          <ResponsiveElement>
            <IconCard strings="HomePageMain.PhysicsCard.Catagories.2">
              <ShapeBlob>
                <Flame width="25px" />
              </ShapeBlob>
            </IconCard>
          </ResponsiveElement>
          <ResponsiveElement>
            <IconCard strings="HomePageMain.PhysicsCard.Catagories.3">
              <ShapeBlob>
                <Apple width="25px" />
              </ShapeBlob>
            </IconCard>
          </ResponsiveElement>
          <ResponsiveElement>
            <IconCard strings="HomePageMain.PhysicsCard.Catagories.4">
              <ShapeBlob>
                <Icon icon="flash_on" />
              </ShapeBlob>
            </IconCard>
          </ResponsiveElement>
          <ResponsiveElement>
            <IconCard strings="HomePageMain.PhysicsCard.Catagories.5">
              <ShapeBlob>
                <Sun width="25px" />
              </ShapeBlob>
            </IconCard>
          </ResponsiveElement>
          <ResponsiveElement>
            <IconCard strings="HomePageMain.PhysicsCard.Catagories.6">
              <ShapeBlob>
                <Pi width="25px" />
              </ShapeBlob>
            </IconCard>
          </ResponsiveElement>
        </div>
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
);

HomePageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('HomePageMain')(HomePageMain);
