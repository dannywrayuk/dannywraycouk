import React from 'react';

import { ReactComponent as SvgGitHub } from '../../../images/svg/github.svg';
import { ReactComponent as SvgInstagram } from '../../../images/svg/instagram.svg';
import { ReactComponent as SvgLinkedIn } from '../../../images/svg/linkedin.svg';
import { ReactComponent as SvgSpotify } from '../../../images/svg/spotify.svg';
import { ReactComponent as SvgTwitter } from '../../../images/svg/twitter.svg';
import AppConstants from '../../../utilities/AppConstants';
import { Icon, Link } from './SocialIcons.style';

const SocialIcons = () => (
  <>
    <Link to={AppConstants.TwitterLink}>
      <Icon as={SvgTwitter} />
    </Link>
    <Link to={AppConstants.InstagramLink}>
      <Icon as={SvgInstagram} />
    </Link>
    <Link to={AppConstants.LinkedInLink}>
      <Icon as={SvgLinkedIn} />
    </Link>
    <Link to={AppConstants.SpotifyLink}>
      <Icon as={SvgSpotify} />
    </Link>
    <Link to={AppConstants.GitHubLink}>
      <Icon as={SvgGitHub} />
    </Link>
  </>
);

export default SocialIcons;
