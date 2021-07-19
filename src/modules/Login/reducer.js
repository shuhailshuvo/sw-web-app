import { LOGGING_IN } from "./actions";

const initialState = {
  isLoggedIn: false,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
}

export const login = (state) => state.loginReducer;
export default loginReducer;
