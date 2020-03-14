import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import { createStructuredSelector } from 'reselect';
import {
  selectIsFetching,
  selectIsLoaded
} from '../../redux/shop/shopdataSelector';
import { Route, withRouter } from 'react-router-dom';

import CollectionOverviewContainer from '../../components/collection-overview/overviewContainer';
import CategoryComponentContainer from '../category/categoryContainer';

const ShopComponent = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopComponent)
);
