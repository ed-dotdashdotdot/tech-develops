import { UPDATE_USER, SHOW_ERROR } from '../actions/user-actions';

export default function userReducer(state = '', { type, payload }) { // type, payload was 'action'
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    case SHOW_ERROR:
      return payload;
    default:
      return state;
  }
}
