import { createStore, combineReducers, applyMiddleware } from "redux";
import nameReducer from "./reducers/nameReducer";
import userReducer from "./reducers/userReducer";
import studentReducer from "./reducers/studentReducer";
import updateReducer from "./reducers/editStudent";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import { update_student } from "./actions/updateStudent";
import lookUpReducer from "./reducers/lookup";
// import { initialState } from "./initialStates";
const middleware = [thunk];

const reducer = combineReducers({ name: nameReducer, users: userReducer ,student:studentReducer,updateStudent:updateReducer,lookup:lookUpReducer});

const initialState = {
  allStates: {
    users: [],
    name: "Kpose",students:[]
  }
};

// const store = createStore(
//   reducer,
//   initialState,
//   applyMiddleware(...middleware)
// );
const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ));
export default store;
