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
          {Object.entries(structure[1].posts).map(([id, data]) => (
            <Link key={data.title} to={data.date ? `${window.location.pathname}/${structure[0]}/${id}` : '#'}>
              <Circle />
              <div>
                <Paragraph>{data.title}</Paragraph>
                {data.description
                 && (<ElementDescription>{data.description}</ElementDescription>)}
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
