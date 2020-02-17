import React from 'react';
//  Style
import './preview-collection.scss';
//  Components
import CollectionItem from '../collection-item/collectionItem';
const previewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({ id, ...otherProps }) => {
            return <CollectionItem key={id} {...otherProps} />;
          })}
      </div>
    </div>
  );
};

export default previewCollection;
