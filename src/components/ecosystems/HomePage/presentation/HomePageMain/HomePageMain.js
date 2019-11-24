import React from 'react';
import PropTypes from 'prop-types';

import InstagramImage1 from '../../../../../images/png/instagram_image1.jpg';
import InstagramImage2 from '../../../../../images/png/instagram_image2.jpg';
import Me from '../../../../../images/png/me.png';
import { ReactComponent as Apple } from '../../../../../images/svg/apple.svg';
import { ReactComponent as Atom } from '../../../../../images/svg/atom.svg';
import background from '../../../../../images/svg/background.svg';
import { ReactComponent as Flame } from '../../../../../images/svg/flame.svg';
import { ReactComponent as Instagram } from '../../../../../images/svg/instagram.svg';
import { ReactComponent as Lightning } from '../../../../../images/svg/lightning.svg';
import { ReactComponent as Pi } from '../../../../../images/svg/pi.svg';
import { ReactComponent as Spotify } from '../../../../../images/svg/spotify.svg';
import { ReactComponent as Sun } from '../../../../../images/svg/sun.svg';
import { ReactComponent as Twitter } from '../../../../../images/svg/twitter.svg';
import { withText } from '../../../../../text/textStore';
import AppConstants from '../../../../../utilities/AppConstants';
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
        <center>
          <img className={style.titleImage} src={Me} alt="" width={250} height={250} />
        </center>
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
          <a href={AppConstants.TwitterLink}>
            <Twitter className={style.socialIcons} />
          </a>
          <a href={AppConstants.InstagramLink}>
            <Instagram className={style.socialIcons} />
          </a>
          <a href={AppConstants.SpotifyLink}>
            <Spotify className={style.socialIcons} />
          </a>
        </CardFooter>
      </Card>
      <Card>
        <CardContent>
          <Heading level={2} center>
            <Text path="PhysicsCard.Title" />
          </Heading>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Text path="PhysicsCard.SubTitle" />
            </ResponsiveElement>
          </ResponsiveDivider>
          <div className={style.textAlignCenter}>
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
        <CardFooter>
          <Text path="PhysicsCard.FooterText" />
        </CardFooter>
      </Card>
      <Card>
        <CardContent>
          <Heading level={2} center>
            <Text path="BlogCard.Title" />
          </Heading>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Text path="BlogCard.SubTitle" />
            </ResponsiveElement>
          </ResponsiveDivider>
          <div className={style.textAlignCenter}>
            <ResponsiveElement>
              <img src={InstagramImage2} alt="" width="300px" />
            </ResponsiveElement>
            <ResponsiveElement>
              <img src={InstagramImage1} alt="" width="300px" />
            </ResponsiveElement>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Heading level={2} center>
            <Text path="MoreCard.Title" />
          </Heading>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Text path="MoreCard.SubTitle" />
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
