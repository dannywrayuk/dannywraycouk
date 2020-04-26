import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Paragraph from '../../styled/Paragraph';
import {
  Arrow,
  Circle,
  DropDown,
  ElementDescription,
  Link,
  Title,
  TitleButton,
} from './Accordion.style';

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
  const [isOpen, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const openToggle = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(ref.current.offsetHeight + 20);
  });


  return (
    <div>
      <div>
        <TitleButton isOpen={isOpen} onClick={openToggle}>
          <Arrow isOpen={isOpen} />
          <Title>{structure[1].title}</Title>
        </TitleButton>
      </div>
      <DropDown isOpen={isOpen} height={height}>
        <div ref={ref}>
          {Object.entries(structure[1].posts).map((d) => (
            <Link key={d[1].title} to={d[1].date ? `${window.location.pathname}/${structure[0]}/${d[0]}` : '#'}>
              <Circle />
              <div>
                <Paragraph dark>{d[1].title}</Paragraph>
                {d[1].description
                 && (<ElementDescription>{d[1].description}</ElementDescription>)}
              </div>
            </Link>
          ))}
        </div>
      </DropDown>
    </div>
  );
};


Accordion.propTypes = {
  structure: PropTypes.array.isRequired,
};

export default Accordion;
