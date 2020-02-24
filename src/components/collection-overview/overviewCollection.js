import React from 'react';
import './overviewCollection.scss';
import { connect } from 'react-redux';
import { shopDataSelector } from '../../redux/shop/shopdataSelector';
import CollectionPreview from '../collection-preview/previewCollection';
import { createStructuredSelector } from 'reselect';
const overviewCollection = ({ shopData }) => {
  return (
    <div className="collections-overview">
      {shopData.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  shopData: shopDataSelector
});

export default connect(mapStateToProps)(overviewCollection);
