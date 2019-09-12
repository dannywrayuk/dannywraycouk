import React from 'react';
import { withText } from '../../../../../text/textStore';
import LogoWithText from '../../../../_atoms/LogoWithText';
import SearchButton from '../../../../_molecules/SearchButton';
import HamburgerButton from '../../../../_molecules/HamburgerButton';

import style from './HeaderMobile.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchExtended: false,
      menuExtended: false,
    };
    this.searchClick = this.searchClick.bind(this);
    this.closeClick = this.closeClick.bind(this);
    this.hamburgerClick = this.hamburgerClick.bind(this);
  }

  searchClick() {
    const { searchExtended } = this.state;
    this.setState({
      searchExtended: !searchExtended,
    });
  }

  closeClick() {
    const { searchExtended } = this.state;
    this.setState({
      searchExtended: !searchExtended,
    });
  }

  hamburgerClick() {
    const { menuExtended } = this.state;
    this.setState({
      menuExtended: !menuExtended,
    });
  }


  render() {
    const { searchExtended, menuExtended } = this.state;
    return (
      <div className={style.bar}>
        <div className={menuExtended ? style.menuFill : style.menuContainer}>
          <HamburgerButton onClick={this.hamburgerClick} />
        </div>
        <div className={(searchExtended || menuExtended) ? style.logoHide : style.logoContainer}>
          <div className={style.alignLogo}>
            <LogoWithText />
          </div>
        </div>
        <div className={searchExtended ? style.searchFill : style.searchContainer}>
          <SearchButton onSearchClick={this.searchClick} isExtended={searchExtended} />
        </div>
      </div>
    );
  }
}


export default withText('HomePageMain.Header')(Header);
