import React from 'react';

import { ReactComponent as SvgApple } from '../../../images/svg/apple.svg';
import { ReactComponent as SvgAtom } from '../../../images/svg/atom.svg';
import { ReactComponent as SvgFlame } from '../../../images/svg/flame.svg';
import { ReactComponent as SvgLightning } from '../../../images/svg/lightning.svg';
import { ReactComponent as SvgPi } from '../../../images/svg/pi.svg';
import { ReactComponent as SvgSun } from '../../../images/svg/sun.svg';
import AppConstants from '../../../utilities/AppConstants';
import { ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import IconCard from '../../_molecules/IconCard';
import LinkButton from '../../_molecules/LinkButton';
import { Circle, Container, Icon } from './PhysicsIcons.style';

const PhysicsIcons = () => (
  <Container>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.QUANTUM}>
        <IconCard strings="Physics.Catagories.quantum">
          <Circle>
            <Icon as={SvgAtom} />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.THERMAL}>
        <IconCard strings="Physics.Catagories.thermal">
          <Circle>
            <Icon as={SvgFlame} />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.CLASSICAL}>
        <IconCard strings="Physics.Catagories.classical">
          <Circle>
            <Icon as={SvgApple} />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.ELECTROMAG}>
        <IconCard strings="Physics.Catagories.electromag">
          <Circle>
            <Icon as={SvgLightning} />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.ASTRO}>
        <IconCard strings="Physics.Catagories.astro">
          <Circle>
            <Icon as={SvgSun} />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
    <ResponsiveElement>
      <LinkButton to={AppConstants.Physics.CATAGORIES.MATHS}>
        <IconCard strings="Physics.Catagories.maths">
          <Circle>
            <Icon as={SvgPi} />
          </Circle>
        </IconCard>
      </LinkButton>
    </ResponsiveElement>
  </Container>
);


export default PhysicsIcons;
