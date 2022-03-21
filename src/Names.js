import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  update_students,
  update_lastname,
  reset
} from "./redux/actions/nameActions";
import fetchUsers from "./redux/actions/fetchUsers";

function Name(props) {
const dispatch= useDispatch();
const FirstName=useSelector(state=>state.name.name)
  return (
    <div>
      <h2>Update Name</h2>
      <div>
        <button onClick={e=>dispatch(update_students({name:"nauman"}))}>Update First Name</button>
        <br /> <br />
       <span style={{ color: "blue" }}> NAME IS: </span>
        {FirstName != undefined ? FirstName : ""}
        <br></br>
        <button onClick={e=>dispatch(update_lastname({name:"kahlid"}))}>Update Last Name</button>
      </div>
    </div>
  );
}

// const MapStateToProps = state => {
//   return {
//     name: state.name,
//     users: state.users
//   };
// };
// const MapDispatchToProps = dispatch => {
//   return {
//     update_firstname: () => dispatch(update_firstname),
//     update_lastname: () => dispatch(update_lastname),
//     reset: () => dispatch(reset),
//     // fetchUsers: () => dispatch(fetchUsers)
//   };
// };
// export default connect(
//   MapStateToProps,
//   MapDispatchToProps
// )(Name);

export default Name