// export default function menuReducer(state = [], action) {
//   return state;
// }

import { MENU_CLICK } from '../actions/menu-actions';

export default function menuReducer(state = '', { type, payload }) { // type, payload was 'action'
  switch (type) {
    case MENU_CLICK:
      return payload.menu;
    default:
      return state;
  }
}
