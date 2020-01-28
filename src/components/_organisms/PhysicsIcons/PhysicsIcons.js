import React from 'react';

import { ReactComponent as Apple } from '../../../images/svg/apple.svg';
import { ReactComponent as Atom } from '../../../images/svg/atom.svg';
import { ReactComponent as Flame } from '../../../images/svg/flame.svg';
import { ReactComponent as Lightning } from '../../../images/svg/lightning.svg';
import { ReactComponent as Pi } from '../../../images/svg/pi.svg';
import { ReactComponent as Sun } from '../../../images/svg/sun.svg';
import ShapeBlob from '../../_atoms/ShapeBlob';
import IconCard from '../../_molecules/IconCard';
import { ResponsiveElement } from '../../_molecules/ResponsiveDividers';

import style from './PhysicsIcons.css';

const PhysicsIcons = () => (
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
);


export default PhysicsIcons;
