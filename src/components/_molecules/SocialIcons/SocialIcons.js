import React from 'react';

import { ReactComponent as Instagram } from '../../../images/svg/instagram.svg';
import { ReactComponent as LinkedIn } from '../../../images/svg/linkedin.svg';
import { ReactComponent as Spotify } from '../../../images/svg/spotify.svg';
import { ReactComponent as Twitter } from '../../../images/svg/twitter.svg';
import AppConstants from '../../../utilities/AppConstants';
import AnchorButton from '../AnchorButton';

import style from './SocialIcons.css';

const SocialIcons = () => (
  <>
    <AnchorButton to={AppConstants.TwitterLink} className={style.followText}>
      <Twitter className={style.socialIcons} />
    </AnchorButton>
    <AnchorButton to={AppConstants.InstagramLink} className={style.followText}>
      <Instagram className={style.socialIcons} />
    </AnchorButton>
    <AnchorButton to={AppConstants.LinkedInLink} className={style.followText}>
      <LinkedIn className={style.socialIcons} />
    </AnchorButton>
    <AnchorButton to={AppConstants.SpotifyLink} className={style.followText}>
      <Spotify className={style.socialIcons} />
    </AnchorButton>
  </>
);

export default SocialIcons;
