import React from 'react';

import { ReactComponent as Apple } from '../../../images/svg/apple.svg';
import { ReactComponent as Atom } from '../../../images/svg/atom.svg';
import { ReactComponent as Flame } from '../../../images/svg/flame.svg';
import { ReactComponent as Lightning } from '../../../images/svg/lightning.svg';
import { ReactComponent as Pi } from '../../../images/svg/pi.svg';
import { ReactComponent as Sun } from '../../../images/svg/sun.svg';
import AppConstants from '../../../utilities/AppConstants';
import ShapeBlob from '../../_atoms/ShapeBlob';
import IconCard from '../../_molecules/IconCard';
import LinkButton from '../../_molecules/LinkButton';
import { ResponsiveElement } from '../../_molecules/ResponsiveDividers';

import style from './PhysicsIcons.css';

const PhysicsIcons = () => (
  <div className={style.textAlignCenter}>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.QUANTUM}>
        <IconCard strings="HomePageMain.PhysicsCard.Catagories.1">
          <ShapeBlob>
            <Atom width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.THERMAL}>
        <IconCard strings="HomePageMain.PhysicsCard.Catagories.2">
          <ShapeBlob>
            <Flame width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.CLASSICAL}>
        <IconCard strings="HomePageMain.PhysicsCard.Catagories.3">
          <ShapeBlob>
            <Apple width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.ELECTROMAG}>
        <IconCard strings="HomePageMain.PhysicsCard.Catagories.4">
          <ShapeBlob>
            <Lightning width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.ASTRO}>
        <IconCard strings="HomePageMain.PhysicsCard.Catagories.5">
          <ShapeBlob>
            <Sun width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.MATHS}>
        <IconCard strings="HomePageMain.PhysicsCard.Catagories.6">
          <ShapeBlob>
            <Pi width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
  </div>
);


export default PhysicsIcons;
