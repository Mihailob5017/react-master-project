import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
//  Style
import {
  CollectionItemContainer,
  CollectionFooter,
  NameContainer,
  PriceContainer,
  BackgroundImage,
  AddButton
} from './collectionItem.styles';

const collectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}$</PriceContainer>
      </CollectionFooter>
      <AddButton ton onClick={() => addItem(item)} inverted>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(collectionItem);
