//import { UPDATE_LASTNAME } from "../actions/constants";
//import { UPDATE_FIRSTNAME } from "../actions/constants";

const update_students= (payload)=>{
  return{
    type: "UPDATE_STUDENTS",
    payload
  }
   
  };
  
  const update_lastname=(payload)=> {
    return{
      type: "UPDATE_LASTNAME",
      payload
    }
 
  };
  
  const reset = {
    type: "RESET",
    payload: "Kpose"
  };
  
  export { update_students, update_lastname, reset };
  