import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Title from './Title';
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


const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
  job: jobReducer,
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  allReducers,
  {
    products: [{ name: "iPad" }],
    user: "Ed",
    job: "Astronaut"
  },
  allStoreEnhancers
);

console.log(store.getState());

const updateUserAction = {
  type: "updateUser",
  payload: "Nat"
}

const updateJobAction = {
  type: "updateJob",
  payload: "Time traveller"
}

store.dispatch(updateUserAction);
store.dispatch(updateJobAction);

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
