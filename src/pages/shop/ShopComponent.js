import React, { useState } from 'react';
//  Components
import { SHOP_DATA } from './ShopData';
import CollectionPreview from '../../components/preview/previewCollection';
const ShopComponent = props => {
  const [shopData] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopComponent;
