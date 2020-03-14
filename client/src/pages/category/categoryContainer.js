import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoaded } from '../../redux/shop/shopdataSelector';
import WithSpinner from '../../components/with-spinner/withSpinner';
import CategoryComponent from './categoryComponent';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsLoaded(state)
});

const categoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CategoryComponent);

export default categoryContainer;
