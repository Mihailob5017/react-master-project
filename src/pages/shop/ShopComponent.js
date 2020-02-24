import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/overviewCollection';
import CategoryComponent from '../category/categoryComponent';
const ShopComponent = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:id`} component={CategoryComponent} />
    </div>
  );
};

export default withRouter(ShopComponent);
