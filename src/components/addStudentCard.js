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



export default function AddForm(props) {
  const {
    states:{added,students},
    setStates:{setAdded},
    handlers: {
     addStudentHandler,editStudentHandler
    },
  } = useGetStudentsHook();
  const selectedStudent=useSelector(state=>state.updateStudent)
  const [studentName,setStudentName]=React.useState("");
  const [sex,setSex]=React.useState("");
  const [classs,setClasss]=React.useState("");
  const [age,setAge]=React.useState("")
  const [gpa,setGpa]=React.useState("")
  const [sibilings,setSibilings]=React.useState("")


  React.useEffect(()=>{
   
    console.log(selectedStudent)
    setStudentName(selectedStudent.name)
    setSex(selectedStudent.sex)
    setAge(selectedStudent.age)
    setGpa(selectedStudent.gpa)
    setSibilings(selectedStudent.siblings)
    setClasss(selectedStudent.class)
  },[])
   function sendData (){



   

    if(!props.update){
      const postData={
      
        "class": Number(classs),
        "name": studentName,
        "sex": sex,
        "age": Number(age),
        "siblings": Number(sibilings),
        "gpa": gpa
    
    }
      addStudentHandler(postData)

    }else{
      const postData={
        "uuid":selectedStudent.uuid,
        "class": Number(classs),
        "name": studentName,
        "sex": sex,
        "age": Number(age),
        "siblings": Number(sibilings),
        "gpa": gpa
    
    }
   
      editStudentHandler(postData)
    }
    setAdded(true)
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
          <p className="main-heading">Add Student</p>
          <Row>
            <Col className="mt-40" lg={12} xs={12} md={12}>
              <TextField
                size="sm"
                className="single-input padding-top-10 "
                id="filled-basic-card"
                placeholder="Name"
                variant="filled"
                style={{ width: "100%" }}
                type="text"
                InputProps={{
                  className: "input-card ",
                }}
                value={studentName}
                onChange={(e) => {
                  setStudentName(e.target.value);
                }}
              />
            </Col>
            <Col className="mt-40" lg={6} xs={12} md={6}>
              <TextField
                size="sm"
                className="single-input padding-top-10 "
                id="filled-basic-card"
                placeholder="Gender(sex)"
                variant="filled"
                style={{ width: "100%" }}
                type="text"
                InputProps={{
                  className: "input-card ",
                }}
                value={sex}
                onChange={(e) => {
                  setSex(e.target.value);
                }}
              />
            </Col>
            <Col className="mt-40" lg={6} xs={12} md={6}>
              <TextField
                size="sm"
                className="single-input padding-top-10 "
                id="filled-basic-card"
                placeholder="Age"
                variant="filled"
                style={{ width: "100%" }}
                type="text"
                InputProps={{
                  className: "input-card ",
                }}
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </Col>

            <Col className="mt-40" lg={6} xs={12} md={6}>
              <TextField
                size="sm"
                className="single-input padding-top-10 "
                id="filled-basic-card"
                placeholder="Sibilings"
                variant="filled"
                style={{ width: "100%" }}
                type="text"
                InputProps={{
                  className: "input-card ",
                }}
                value={sibilings}
                onChange={(e) => {
                  setSibilings(e.target.value);
                }}
              />
            </Col>
            <Col className="mt-40" lg={6} xs={12} md={6}>
              <TextField
                size="sm"
                className="single-input padding-top-10 "
                id="filled-basic-card"
                placeholder="GPA"
                variant="filled"
                style={{ width: "100%" }}
                type="text"
                InputProps={{
                  className: "input-card ",
                }}
                value={gpa}
                onChange={(e) => {
                  setGpa(e.target.value);
                }}
              />
            </Col>

            <Col className="mt-40" lg={12} xs={12} md={12}>
              <TextField
                size="sm"
                className="single-input padding-top-10 "
                id="filled-basic-card"
                placeholder="Class"
                variant="filled"
                style={{ width: "100%" }}
                type="text"
                InputProps={{
                  className: "input-card ",
                }}
                value={classs}
                onChange={(e) => {
                  setClasss(e.target.value);
                }}
              />
            </Col>

            <Col style={{textAlign:"center"}} className="mt-40" lg={12} xs={12} md={12}>
              <button className="basic-btn" onClick={sendData}>Add Student</button>
            </Col>
          </Row>
          {/* "class": 12,
    "name": "Nauman",
    "sex": "male",
    "age": 25,
    "siblings": 1,
    "gpa": "7.25" */}
        </Box>
      </Modal>
    </div>
  );
}
