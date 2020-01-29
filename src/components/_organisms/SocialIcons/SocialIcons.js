import React from 'react';

import { ReactComponent as Instagram } from '../../../images/svg/instagram.svg';
import { ReactComponent as LinkedIn } from '../../../images/svg/linkedin.svg';
import { ReactComponent as Spotify } from '../../../images/svg/spotify.svg';
import { ReactComponent as Twitter } from '../../../images/svg/twitter.svg';
import AppConstants from '../../../utilities/AppConstants';

import style from './SocialIcons.css';

const SocialIcons = () => (
  <>
    <a href={AppConstants.TwitterLink} className={style.followText}>
      <Twitter className={style.socialIcons} />
    </a>
    <a href={AppConstants.InstagramLink} className={style.followText}>
      <Instagram className={style.socialIcons} />
    </a>
    <a href={AppConstants.LinkedInLink} className={style.followText}>
      <LinkedIn className={style.socialIcons} />
    </a>
    <a href={AppConstants.SpotifyLink} className={style.followText}>
      <Spotify className={style.socialIcons} />
    </a>
  </>
);

export default SocialIcons;
