export const MENU_CLICK = 'menu:menuClick';

export function updateUser(newUser) {
  return {
    type: MENU_CLICK,
    payload: {
      menu: "on"
    }
  }
}
