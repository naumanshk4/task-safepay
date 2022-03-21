import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Container,Row,Col } from "react-bootstrap";
import services, { getData } from "../services/base.js";
import { useGetStudentsHook } from "../hooks/students.js";
import CustomizedInputBase from "./searchBar.js";
import LookupCard from "./lookupcard.js";
import { useSelector } from "react-redux";

export function LookupLayout() {

    const searchResult = useSelector((state) => state.lookup.searchResult);
    console.log(Array(searchResult).length)
  return (
    <>
      <Container >
        <p style={{textAlign:"start"}} className="main-heading">
           Look-Up Students
        </p>
        <Row>
        <Col className="mt-40" md={8} lg={8} xs={12}>
         <p className="sm-headings" style={{marginBottom:"20px"}}>Search For Student</p>
         <CustomizedInputBase />
        <div className="mt-60">

        {Object.keys(searchResult).length != 0  &&   <LookupCard searchResult={searchResult} /> }
        {Object.keys(searchResult).length === 0  &&   <p>No Search Result</p> }
      
        </div>
       
        </Col>
        <Col className="mt-60"  md={4} lg={4} xs={12}>
   
        </Col>
        </Row>
      

      </Container>
    </>
  );
}
export default LookupLayout;
