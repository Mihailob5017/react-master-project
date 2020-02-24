import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sectionsSelector } from '../../redux/directory/directorySelector';
import './directory.scss';
//  Components
import MenuItem from '../../pages/homepage/menu-item/MenuItem';

const directory = ({ sections }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem {...otherProps} key={id} />
      ))}
    </div>
  );
};
const mapStateToProps = state =>
  createStructuredSelector({ sections: sectionsSelector });

export default connect(mapStateToProps)(directory);
