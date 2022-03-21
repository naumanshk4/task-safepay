import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../styles/style.css";
import { Row, Col } from "react-bootstrap";
import { useGetStudentsHook } from "../hooks/students";
import { useSelector } from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #193a8c",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};



export default function DeleteModal(props) {
  const {
    states:{added,students},
    setStates:{setAdded},
    handlers: {
     deleteStudentHandler
    },
  } = useGetStudentsHook();
  const selectedStudent=useSelector(state=>state.updateStudent)


   function deleteStudent (){

      const postData={
        "uuid":selectedStudent.uuid,
        "class": Number(selectedStudent.classs),
        "name": selectedStudent.studentName,
        "sex": selectedStudent.sex,
        "age": Number(selectedStudent.age),
        "siblings": Number(selectedStudent.sibilings),
        "gpa": selectedStudent.gpa
    
      }
   
      deleteStudentHandler(postData)
      props.handleClose()
 


  }
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="main-heading">Are Sure You Want To Delete?</p>
          <div>
            <button style={{backgroundColor:"#D11A2A ",borderColor:"#D11A2A",marginRight:"20px"}} className="basic-btn" onClick={deleteStudent}>Yes</button>
            <button className="basic-btn" onClick={props.handleClose}>No</button>
          </div>
 
        </Box>
      </Modal>
    </div>
  );
}
