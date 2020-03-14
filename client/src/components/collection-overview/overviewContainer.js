import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsFetching } from '../../redux/shop/shopdataSelector';
import WithSpinner from '../with-spinner/withSpinner';
import CollectionOverview from './overviewCollection';
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

//  This is the same as
//  export default connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;
