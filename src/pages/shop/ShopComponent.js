import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import { Route, withRouter } from 'react-router-dom';
import {
  firestore,
  collectionSnapshotToMap
} from '../../firebase/FireBaseUtill';
import CollectionOverview from '../../components/collection-overview/overviewCollection';
import WithSpinner from '../../components/with-spinner/withSpinner';
import CategoryComponent from '../category/categoryComponent';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryComponentWithSpinner = WithSpinner(CategoryComponent);

const ShopComponent = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);
  let unsubscribeFromSnapShot = null;

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = collectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:id`}
        render={props => (
          <CategoryComponentWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default withRouter(connect(null, mapDispatchToProps)(ShopComponent));
