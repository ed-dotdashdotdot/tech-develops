import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore
} from 'redux';
import { Provider } from 'react-redux';

import productsReducer from "./reducers/productsReducer";
import userReducer from "./reducers/userReducer";
import jobReducer from "./reducers/jobReducer";
import menuReducer from "./reducers/menuReducer";


const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
  job: jobReducer,
  menu: menuReducer,
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  allReducers,
  {
    products: [{ name: "iPad" }],
    user: "Edd",
    job: "Astronaut",
    menu: "off"
  },
  allStoreEnhancers
);

console.log(store.getState());

// const updateUserAction = {
//   type: "updateUser",
//   payload: "Nat"
// }
// const updateJobAction = {
//   type: "updateJob",
//   payload: "Time traveller"
// }
// store.dispatch(updateUserAction);
// store.dispatch(updateJobAction);

console.log(store.getState());

// const action = {
//   type: 'changeState',
//   payload: {
//     newState: "New state"
//   }
// }
// store.dispatch(action);
// console.log(store.getState());

ReactDOM.render(
  <Provider store={ store }>
    <App
      randomProps="whatever"
    />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
