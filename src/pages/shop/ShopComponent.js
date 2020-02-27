import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import { Route, withRouter } from 'react-router-dom';
import {
  firestore,
  collectionSnapshotToMap
} from '../../firebase/FireBaseUtill';
import CollectionOverview from '../../components/collection-overview/overviewCollection';
import CategoryComponent from '../category/categoryComponent';
const ShopComponent = ({ match, updateCollections }) => {
  let unsubscribeFromSnapShot = null;

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = collectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }, []); 
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:id`} component={CategoryComponent} />
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default withRouter(connect(null, mapDispatchToProps)(ShopComponent));
