import * as type from "../type";
const initialState = {
  isLoading: false,
  isAuthenticated: false,
  error: {},
  type: "",
  user: {},
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
      break;

    case type.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: {},
      };

    case type.REGISTER_ERROR:
    case type.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        type: action.name,
      };

    case type.LOGIN_SUCCESS:
    case type.ME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case type.LOGOUT_SUCCESS:
    case type.ME_ERROR:
      return {
        isLoading: false,
        isAuthenticated: false,
        error: {},
        type: "",
        user: {},
      };

    default:
      return state;
      break;
  }
};

export default Reducer;
