//import { UPDATE_LASTNAME } from "../actions/constants";
//import { UPDATE_FIRSTNAME } from "../actions/constants";

import { initialState } from "../initialStates";

//name reducer
const nameReducer = (state = [], { type, payload }) => {
    console.log("reducer", state, type,payload);
    switch (type) {
      case "UPDATE_STUDENTS":
        return {
          ...payload
        };
      case "UPDATE_FIRSTNAME":
        return {
          ...payload
          
        };
      case "RESET":
        return {
          name: payload
        };
      default:
        return state;
    }
  };
  
  export default nameReducer;
  