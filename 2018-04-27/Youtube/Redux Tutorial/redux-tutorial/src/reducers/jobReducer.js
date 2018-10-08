export default function jobReducer(state = '', { type, payload }) {
  switch (type) {
    case "updateJob" :
      return payload;
    default:
      return state;
  }
}
