import React from 'react';

import { ReactComponent as Apple } from '../../../images/svg/apple.svg';
import { ReactComponent as Atom } from '../../../images/svg/atom.svg';
import { ReactComponent as Flame } from '../../../images/svg/flame.svg';
import { ReactComponent as Lightning } from '../../../images/svg/lightning.svg';
import { ReactComponent as Pi } from '../../../images/svg/pi.svg';
import { ReactComponent as Sun } from '../../../images/svg/sun.svg';
import AppConstants from '../../../utilities/AppConstants';
import { ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import IconCard from '../../_molecules/IconCard';
import LinkButton from '../../_molecules/LinkButton';
import { Circle, Container } from './PhysicsIcons.style';

const PhysicsIcons = () => (
  <Container>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.QUANTUM}>
        <IconCard strings="Physics.Catagories.quantum">
          <Circle>
            <Atom width="25px" />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.THERMAL}>
        <IconCard strings="Physics.Catagories.thermal">
          <Circle>
            <Flame width="25px" />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.CLASSICAL}>
        <IconCard strings="Physics.Catagories.classical">
          <Circle>
            <Apple width="25px" />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.ELECTROMAG}>
        <IconCard strings="Physics.Catagories.electromag">
          <Circle>
            <Lightning width="25px" />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.ASTRO}>
        <IconCard strings="Physics.Catagories.astro">
          <Circle>
            <Sun width="25px" />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.MATHS}>
        <IconCard strings="Physics.Catagories.maths">
          <Circle>
            <Pi width="25px" />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
  </Container>
);


export default PhysicsIcons;
