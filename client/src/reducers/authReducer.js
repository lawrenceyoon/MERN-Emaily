import { FETCH_USER } from '../actions/types';

// purpose is to record whether or not user is logged in!
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  };
};
