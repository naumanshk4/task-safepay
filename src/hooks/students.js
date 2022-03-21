import { useContext, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  update_students,
  update_lastname,
  reset
} from "../redux/actions/nameActions";
import {
  get_students
} from "../redux/actions/fetchStudents";
import { getData, addStudent, editStudent,deleteStudent, lookupStudent } from "../services/base";
import { lookup_student } from "../redux/actions/lookupAction";
export const useGetStudentsHook = () => {
  const [students, setStudents] = useState([]);
  const [added, setAdded] = useState(false);
  const dispatch= useDispatch();
  /**
   * @description students handler to get all the students from database
   
   */
  
  const getStudentsHandler = async () => {
    var config = { "Access-Control-Allow-Origin": "*" };
    await getData(
      config,
      (res) => {
        //success
        console.log(res, "in hook");
        if (res.status == 200) {
          setStudents(res.data);
          dispatch(get_students(res.data))
        }
      },
      (err) => {
        //error
        console.log(err);
        alert(err);
      }
    );
  };

  const addStudentHandler = async (postData) => {
    var config = { "Access-Control-Allow-Origin": "*" };
    await addStudent(
      postData,
      config,
      (res) => {
        //success
        console.log(res, "in hook");
        if (res.status == 200) {
          console.log("Added");
          // setAdded(true)
          console.log("added,",added)
          getStudentsHandler()

        }
      },
      (err) => {
        //error
        console.log(err);
        alert(err);
      }
    );
  };

  const editStudentHandler = async (postData) => {
    var config = { "Access-Control-Allow-Origin": "*" };
  
    await editStudent(
      postData,
      config,
      (res) => {
        //success
        console.log(res, "in hook");
        if (res.status == 200) {
          console.log("Added");
          // setAdded(true)
         
          getStudentsHandler()

        }
      },
      (err) => {
        //error
        console.log(err);
        alert(err);
      }
    );
  };

  const deleteStudentHandler = async (postData) => {
    var config = { "Access-Control-Allow-Origin": "*" };
  
    await deleteStudent(
      postData,
      config,
      (res) => {
        //success
        console.log(res, "in hook");
        if (res.status == 200) {
          console.log("Added");
          // setAdded(true)
         
          getStudentsHandler()

        }
      },
      (err) => {
        //error
        console.log(err);
        alert(err);
      }
    );
  };

  const lookupStudentHandler = async (postData) => {
    var config = { "Access-Control-Allow-Origin": "*" };
  
    await lookupStudent(
      postData,
      config,
      (res) => {
        //success
        console.log(res, "in hook");
        if (res.status == 200) {
          console.log("Added");
          // setAdded(true)
          dispatch(lookup_student({searchResult:res.data}))
          // getStudentsHandler()

        }
      },
      (err) => {
        //error
        console.log(err);
        alert(err);
      }
    );
  };

  return {
    states: { students,added },
    setStates: { setStudents ,setAdded},
    handlers: {
      getStudentsHandler,
      addStudentHandler,
      editStudentHandler,
      deleteStudentHandler,
      lookupStudentHandler
    },
  };
};
