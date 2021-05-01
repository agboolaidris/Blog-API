import * as type from "../type";
const initialState = {
  isLoading: false,
  isAuthenticated: false,
  error: {},
  type: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
      break;
    case type.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        msg: action.payload,
      };
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        msg: action.payload,
      };

    case type.AUTH_ERROR:
    case type.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        type: action.name,
        isAuthenticated: false,
      };

    default:
      return state;
      break;
  }
};

export default Reducer;
