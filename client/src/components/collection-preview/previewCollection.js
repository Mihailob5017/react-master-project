import React from 'react';
//  Style
import { CollectionPreview, Preview, Title } from './prevriewCollection.style';
//  Components
import CollectionItem from '../collection-item/collectionItem';
const previewCollection = ({ title, items }) => {
  return (
    <CollectionPreview>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, i) => i < 4)
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </Preview>
    </CollectionPreview>
  );
};

export default previewCollection;
