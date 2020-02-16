import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Circle } from '../../../images/svg/circle.svg';
import { ReactComponent as Arrow } from '../../../images/svg/triangle.svg';
import Button from '../../_molecules/Button';
import LinkButton from '../../_molecules/LinkButton';

import style from './Accordion.css';

// Expected structure:
//
// {
//     *title,
//     *sections: [
//         {
//             *title,
//             link,
//         }
//     ]
// }
// all marked with * are required


const Accordion = ({ structure }) => {
  const [open, setOpen] = useState(false);
  const openToggle = () => {
    setOpen(!open);
  };

  // num elements * element size + margin for smooth animation
  const sectionSize = structure.sections.length * 39 + 20;

  return (
    <div>
      <div>
        <Button open onClick={openToggle} className={style.titleContainer} style={open ? { backgroundColor: '#ccc', paddingLeft: 25 } : null}>
          <Arrow className={`${style.Arrow} ${open && style.ArrowOpen}`} />
          <h3 className={style.title}>{structure.title}</h3>
        </Button>
      </div>
      <div
        className={style.section}
        style={open ? {
          maxHeight: sectionSize,
          opacity: 1,
          marginBottom: 20,
        } : { maxHeight: 0, opacity: 0 }}
      >
        {structure.sections.map((d) => (
          <LinkButton key={d.title} to={window.location.pathname + d.link || '#'} className={style.elementContainer}>
            <Circle className={style.Circle} />
            {d.title}
          </LinkButton>
        ))}
      </div>

    </div>
  );
};


Accordion.propTypes = {
  structure: PropTypes.object.isRequired,
};

export default Accordion;
