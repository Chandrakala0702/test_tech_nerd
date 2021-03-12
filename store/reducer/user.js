import { FETCH_USERS } from "../actions/user";

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        users: action.users,
      };
    default:
      return state;
  }
};
