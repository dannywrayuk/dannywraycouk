import React from 'react';
import { Breakpoint } from 'react-socks';
import HeaderDesktop from '../presentation/HeaderDesktop';

const Header = () => (
  <Breakpoint medium up>
    <HeaderDesktop />
  </Breakpoint>
);


export default Header;
