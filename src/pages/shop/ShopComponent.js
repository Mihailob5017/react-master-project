import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { asyncFetchCollectionsStart } from '../../redux/shop/shopActions';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching, selectIsLoaded } from '../../redux/shop/shopdataSelector';
import { Route, withRouter } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/overviewCollection';
import WithSpinner from '../../components/with-spinner/withSpinner';
import CategoryComponent from '../category/categoryComponent';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryComponentWithSpinner = WithSpinner(CategoryComponent);

const ShopComponent = ({ match, fetchAsyncCollections, isLoaded }) => {
  let unsubscribeFromSnapShot = null;

  useEffect(() => {
    fetchAsyncCollections();
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={!isLoaded} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:id`}
        render={props => (
          <CategoryComponentWithSpinner isLoading={!isLoaded} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  isLoaded:selectIsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchAsyncCollections: () => dispatch(asyncFetchCollectionsStart())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopComponent)
);
