import {
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_SUCCESS,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS
} from '../reducerTypes';
const initialState = {
  currentUser: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case GOOGLE_SIGN_IN_START:
      return { ...state };

    case GOOGLE_SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };

    case GOOGLE_SIGN_IN_FAILURE:
      return { ...state, error: action.payload };

    case EMAIL_SIGN_IN_START:
      return { ...state };

    case EMAIL_SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };

    case EMAIL_SIGN_IN_FAILURE:
      return { ...state, error: action.payload };

    case SIGN_OUT_START:
      return { ...state };

    case SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null };

    case SIGN_OUT_FAILURE:
      return { ...state, error: action.payload };
    case SIGN_UP_START:
      return { ...state };
    case SIGN_UP_FAILURE:
      return { ...state, error: action.payload };
    case SIGN_UP_SUCCESS:
      return { ...state };

    default:
      return state;
  }
};

export default userReducer;
