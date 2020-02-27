import React from 'react';
import { CollectionOverview } from './overviewCollection.styles';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shopdataSelector';
import CollectionPreview from '../collection-preview/previewCollection';
import { createStructuredSelector } from 'reselect';
const overviewCollection = ({ shopData }) => {
  return (
    <CollectionOverview>
      {shopData.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionOverview>
  );
};
const mapStateToProps = createStructuredSelector({
  shopData: selectCollectionsForPreview
});

export default connect(mapStateToProps)(overviewCollection);
