import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import InstagramImage1 from '../../../images/png/instagram_image1.jpg';
import InstagramImage2 from '../../../images/png/instagram_image2.jpg';
import Me from '../../../images/png/me.png';
import backgroundimage from '../../../images/svg/background.svg';
import Background from '../../_atoms/BackgroundContainer';
import { Card, CardContent, CardFooter } from '../../_atoms/Card';
import { ResponsiveDivider, ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../_atoms/ResponsiveWrapper';
import withText from '../../_atoms/Text';
import PhysicsIcons from '../../_organisms/PhysicsIcons';
import SocialIcons from '../../_organisms/SocialIcons';
import AlignCenter from '../../styled/AlignCenter';
import BigTitle from '../../styled/BigTitle';
import Paragraph from '../../styled/Paragraph';
import SmallTitle from '../../styled/SmallTitle';
import Title from '../../styled/Title';
import {
  BlogImage,
  CenterImage,
  TitleImage,
} from './Home.style';

const Home = ({ Text }) => (
  <Background image={backgroundimage}>
    <Helmet>
      <title>{`${Text.get('HeadTitle')}`}</title>
    </Helmet>
    <ResponsiveWrapper>
      <ResponsiveDivider>
        <ResponsiveElement width={2}>
          <AlignCenter>
            <BigTitle>
              <Text path="Title" />
            </BigTitle>
            <Title>
              <Text path="SubTitle" />
            </Title>
          </AlignCenter>
        </ResponsiveElement>
        <CenterImage>
          <TitleImage src={Me} alt="" />
        </CenterImage>
      </ResponsiveDivider>
      <Card topper>
        <CardContent>
          <ResponsiveDivider>
            <ResponsiveElement>
              <SmallTitle>
                <Text path="IntroCard.Programming.Title" />
              </SmallTitle>
              <Paragraph>
                <Text path="IntroCard.Programming.Body" />
              </Paragraph>
            </ResponsiveElement>
            <ResponsiveElement>
              <SmallTitle>
                <Text path="IntroCard.Physics.Title" />
              </SmallTitle>
              <Paragraph>
                <Text path="IntroCard.Physics.Body" />
              </Paragraph>
            </ResponsiveElement>
            <ResponsiveElement>
              <SmallTitle>
                <Text path="IntroCard.More.Title" />
              </SmallTitle>
              <Paragraph>
                <Text path="IntroCard.More.Body" />
              </Paragraph>
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
        <CardFooter>
          <AlignCenter>
            <Text path="IntroCard.FooterText" />
          </AlignCenter>
          <SocialIcons />
        </CardFooter>
      </Card>
      <Card>
        <CardContent>
          <Title center>
            <Text path="PhysicsCard.Title" />
          </Title>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Paragraph center>
                <Text path="PhysicsCard.SubTitle" />
              </Paragraph>
            </ResponsiveElement>
          </ResponsiveDivider>
          <PhysicsIcons />
        </CardContent>
        <CardFooter>
          <Text path="PhysicsCard.FooterText" />
        </CardFooter>
      </Card>
      <Card>
        <CardContent>
          <Title center>
            <Text path="BlogCard.Title" />
          </Title>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Paragraph center>
                <Text path="BlogCard.SubTitle" />
              </Paragraph>
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <ResponsiveElement>
              <CenterImage>
                <BlogImage src={InstagramImage2} alt="" />
              </CenterImage>
            </ResponsiveElement>
            <ResponsiveElement>
              <CenterImage>
                <BlogImage src={InstagramImage1} alt="" />
              </CenterImage>
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);

Home.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Home')(Home);
