import React, { useState } from 'react';
import './directory.scss';
//  Components
import MenuItem from '../../pages/homepage/menu-item/MenuItem';

const directory = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sections] = useState([
    { id: 1, title: 'hats', img: 'https://i.ibb.co/cvpntL1/hats.png' },
    { id: 2, title: 'jacket', img: 'https://i.ibb.co/px2tCc3/jackets.png' },
    { id: 3, title: 'sneakers', img: 'https://i.ibb.co/0jqHpnp/sneakers.png' },
    {
      id: 4,
      title: 'female',
      img: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large'
    },
    {
      id: 5,
      title: 'male',
      img: 'https://i.ibb.co/R70vBrQ/mens.png',
      size: 'large'
    }
  ]);
  return (
    <div className="directory-menu">
      {sections.map((state, i) => (
        <MenuItem state={state} key={i} />
      ))}
    </div>
  );
};

export default directory;
