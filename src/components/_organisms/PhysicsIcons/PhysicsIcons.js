import React from 'react';

import { ReactComponent as Apple } from '../../../images/svg/apple.svg';
import { ReactComponent as Atom } from '../../../images/svg/atom.svg';
import { ReactComponent as Flame } from '../../../images/svg/flame.svg';
import { ReactComponent as Lightning } from '../../../images/svg/lightning.svg';
import { ReactComponent as Pi } from '../../../images/svg/pi.svg';
import { ReactComponent as Sun } from '../../../images/svg/sun.svg';
import AppConstants from '../../../utilities/AppConstants';
import { ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import ShapeBlob from '../../_atoms/ShapeBlob';
import IconCard from '../../_molecules/IconCard';
import LinkButton from '../../_molecules/LinkButton';

import style from './PhysicsIcons.css';

const PhysicsIcons = () => (
  <div className={style.iconsContainer}>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.QUANTUM}>
        <IconCard strings="Physics.Catagories.quantum">
          <ShapeBlob className={style.shapeBlob}>
            <Atom width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.THERMAL}>
        <IconCard strings="Physics.Catagories.thermal">
          <ShapeBlob className={style.shapeBlob}>
            <Flame width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.CLASSICAL}>
        <IconCard strings="Physics.Catagories.classical">
          <ShapeBlob className={style.shapeBlob}>
            <Apple width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.ELECTROMAG}>
        <IconCard strings="Physics.Catagories.electromag">
          <ShapeBlob className={style.shapeBlob}>
            <Lightning width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.ASTRO}>
        <IconCard strings="Physics.Catagories.astro">
          <ShapeBlob className={style.shapeBlob}>
            <Sun width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.MATHS}>
        <IconCard strings="Physics.Catagories.maths">
          <ShapeBlob className={style.shapeBlob}>
            <Pi width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
  </div>
);


export default PhysicsIcons;
