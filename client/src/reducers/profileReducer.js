import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  UPDATE_OR_CREATE_PROFILE
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };

    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };

    case UPDATE_OR_CREATE_PROFILE:
      return {
        ...state
      };
    default:
      return state;
  }
}
