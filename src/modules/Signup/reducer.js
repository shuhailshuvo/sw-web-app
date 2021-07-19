import { LOGGING_IN } from "./actions";

const initialState = {
  loggingIn: false,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
      };
    default:
      return state;
  }
}

export const login = (state) => state.loginReducer;
export default loginReducer;
