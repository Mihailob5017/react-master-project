import { UPDATE_COLLECTIONS } from '../reducerTypes';
const initalState = {
  collections: null
};

const shopDataReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};
export default shopDataReducer;
