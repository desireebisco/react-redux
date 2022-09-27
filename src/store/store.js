import { createStore, compose } from "redux";
import reducer from "./reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //to check in redux devtools

const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

// const loadFromLocalStorage = () => {
//   try {
//     const serialisedState = localStorage.getItem("persistantState");
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// };

// const store = createStore(reducer, loadFromLocalStorage(), composeEnhancers());
const store = createStore(reducer, composeEnhancers());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
