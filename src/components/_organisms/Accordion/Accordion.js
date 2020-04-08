import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Circle } from '../../../images/svg/circle.svg';
import { ReactComponent as Arrow } from '../../../images/svg/triangle.svg';
import Button from '../../_molecules/Button';
import LinkButton from '../../_molecules/LinkButton';

import style from './Accordion.css';

// Expected structure:
// [
// *title,
// {
//     *title,
//     *posts: {
//         *link:{
//             *title,
//              date,
//              blurb,
//              description,
//         }
//     }
// }
// ]
// all marked with * are required


const Accordion = ({ structure }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const openToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setHeight(ref.current.offsetHeight + 20);
  });


  return (
    <div>
      <div>
        <Button open onClick={openToggle} className={style.titleContainer} style={open ? { backgroundColor: '#ccc', paddingLeft: 25 } : null}>
          <Arrow className={`${style.Arrow} ${open && style.ArrowOpen}`} />
          <h3 className={style.title}>{structure[1].title}</h3>
        </Button>
      </div>
      <div
        className={style.section}
        style={open ? {
          maxHeight: height,
          opacity: 1,
          marginBottom: 20,
        } : { maxHeight: 0, opacity: 0 }}
      >
        <div ref={ref}>
          {Object.entries(structure[1].posts).map((d) => (
            <LinkButton key={d[1].title} to={`${window.location.pathname}/${structure[0]}/${d[0]}` || '#'} className={style.elementContainer}>
              <Circle className={style.Circle} />
              {d[1].title}
            </LinkButton>
          ))}
        </div>
      </div>

    </div>
  );
};


Accordion.propTypes = {
  structure: PropTypes.array.isRequired,
};

export default Accordion;
