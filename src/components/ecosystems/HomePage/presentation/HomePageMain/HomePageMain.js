import React from 'react';
import PropTypes from 'prop-types';

import Sponge from '../../../../../images/gif/sponge.gif';
import { ReactComponent as Apple } from '../../../../../images/svg/apple.svg';
import { ReactComponent as Atom } from '../../../../../images/svg/atom.svg';
import background from '../../../../../images/svg/background.svg';
import { ReactComponent as Flame } from '../../../../../images/svg/flame.svg';
import { ReactComponent as Lightning } from '../../../../../images/svg/lightning.svg';
import { ReactComponent as Pi } from '../../../../../images/svg/pi.svg';
import { ReactComponent as Sun } from '../../../../../images/svg/sun.svg';
import { withText } from '../../../../../text/textStore';
import Background from '../../../../_atoms/BackgroundContainer';
import Head from '../../../../_atoms/Head';
import ShapeBlob from '../../../../_atoms/ShapeBlob';
import Heading from '../../../../_molecules/Heading';
import IconCard from '../../../../_molecules/IconCard';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_molecules/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper';
import { Card, CardContent, CardFooter } from '../../../../_organisms/Card';

import style from './HomePageMain.css';

const HomePageMain = ({ Text, Text: text }) => (
  <Background image={background}>
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
                  <Lightning width="25px" />
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
          <Heading level={2} center>
            <Text path="ProjectCard.Title" />
          </Heading>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Text path="Description" />
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <ResponsiveElement width={2}>
              <Text path="Description" />
            </ResponsiveElement>
            <ResponsiveElement>
              <img src={Sponge} alt="" width="300px" />
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Text path="Description" />
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <ResponsiveElement>
              <img src={Sponge} alt="" width="300px" />
            </ResponsiveElement>
            <ResponsiveElement width={2}>
              <Text path="Description" />
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Heading level={2} center>
            <Text path="BlogCard.Title" />
          </Heading>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Text path="Description" />
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <ResponsiveElement width={2}>
              <Text path="Description" />
            </ResponsiveElement>
            <ResponsiveElement>
              <img src={Sponge} alt="" width="300px" />
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Heading level={2} center>
            <Text path="MoreCard.Title" />
          </Heading>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Text path="Description" />
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);

HomePageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('HomePageMain')(HomePageMain);
