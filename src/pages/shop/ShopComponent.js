import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { asyncFetchCollectionsStart } from '../../redux/shop/shopActions';
import { createStructuredSelector } from 'reselect';
import {
  selectIsFetching,
  selectIsLoaded
} from '../../redux/shop/shopdataSelector';
import { Route, withRouter } from 'react-router-dom';

import CollectionOverviewContainer from '../../components/collection-overview/overviewContainer';
import CategoryComponentContainer from '../category/categoryContainer';

const ShopComponent = ({ match, fetchAsyncCollections }) => {
  useEffect(() => {
    fetchAsyncCollections();
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:id`}
        component={CategoryComponentContainer}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  isLoaded: selectIsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchAsyncCollections: () => dispatch(asyncFetchCollectionsStart())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopComponent)
);
