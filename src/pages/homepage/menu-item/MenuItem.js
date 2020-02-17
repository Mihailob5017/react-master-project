import React from 'react';
import './menu-item.scss';
const MenuItem = ({ state }) => {
  return (
    <div
      style={{ backgroundImage: `url(${state.img})` }}
      className={`${state.size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{state.title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
