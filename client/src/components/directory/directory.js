import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sectionsSelector } from '../../redux/directory/directorySelector';
import { DircetoryComponent } from './directory.styles';
//  Components
import MenuItem from '../../pages/homepage/menu-item/MenuItem';

const directory = ({ sections }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <DircetoryComponent>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem {...otherProps} key={id} />
      ))}
    </DircetoryComponent>
  );
};
const mapStateToProps = state =>
  createStructuredSelector({ sections: sectionsSelector });

export default connect(mapStateToProps)(directory);
