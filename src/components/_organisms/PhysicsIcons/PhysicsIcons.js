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
  <div className={style.iconsContainer}>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.QUANTUM}>
        <IconCard strings="PhysicsPage.Sections.quantum">
          <ShapeBlob>
            <Atom width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.THERMAL}>
        <IconCard strings="PhysicsPage.Sections.thermal">
          <ShapeBlob>
            <Flame width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.CLASSICAL}>
        <IconCard strings="PhysicsPage.Sections.classical">
          <ShapeBlob>
            <Apple width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.ELECTROMAG}>
        <IconCard strings="PhysicsPage.Sections.electromag">
          <ShapeBlob>
            <Lightning width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.ASTRO}>
        <IconCard strings="PhysicsPage.Sections.astro">
          <ShapeBlob>
            <Sun width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.SECTIONS.MATHS}>
        <IconCard strings="PhysicsPage.Sections.maths">
          <ShapeBlob>
            <Pi width="25px" />
          </ShapeBlob>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
  </div>
);


export default PhysicsIcons;
