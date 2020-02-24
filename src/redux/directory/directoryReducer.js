const initalState = {
  sections: [
    {
      id: 1,
      title: 'hats',
      img: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'hats'
    },
    {
      id: 2,
      title: 'jacket',
      img: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: 'jackets'
    },
    {
      id: 3,
      title: 'sneakers',
      img: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkUrl: 'sneakers'
    },
    {
      id: 4,
      title: 'female',
      img: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      linkUrl: 'female'
    },
    {
      id: 5,
      title: 'male',
      img: 'https://i.ibb.co/R70vBrQ/mens.png',
      size: 'large',
      linkUrl: 'male'
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
