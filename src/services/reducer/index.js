import { ACTION_TYPES } from "../action/index";
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case ACTION_TYPES.FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

export default reducer;
