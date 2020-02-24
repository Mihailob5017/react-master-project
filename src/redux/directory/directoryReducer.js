const initalState = {
  sections: [
    {
      id: 1,
      title: 'hats',
      img: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'shop/hats'
    },
    {
      id: 2,
      title: 'jacket',
      img: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: 'shop/jackets'
    },
    {
      id: 3,
      title: 'sneakers',
      img: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkUrl: 'shop/sneakers'
    },
    {
      id: 4,
      title: 'female',
      img: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      linkUrl: 'shop/womens'
    },
    {
      id: 5,
      title: 'male',
      img: 'https://i.ibb.co/R70vBrQ/mens.png',
      size: 'large',
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
