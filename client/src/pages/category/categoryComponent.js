import React from 'react';
import './categoryComponent.scss';
import { connect } from 'react-redux';
import { selectCathegory } from '../../redux/shop/shopdataSelector';
import CollectionItem from '../../components/collection-item/collectionItem';
import {
  CategoryContainer,
  TitleContainer,
  ItemsContainer
} from './categoryComponent.styles';
const categoryComponent = ({ category }) => {
  const { title, items } = category;
  return (
    <CategoryContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CategoryContainer>
  );
};
//when u need to pass the param from props,u can easily do that like this,by adding another props value and adding it first once u select cathegory
const mapStateToProps = (state, ownProps) => ({
  category: selectCathegory(ownProps.match.params.id)(state)
});

export default connect(mapStateToProps)(categoryComponent);
