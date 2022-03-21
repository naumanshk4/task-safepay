import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Container,Row,Col } from "react-bootstrap";
import services, { getData } from "../services/base.js";
import { useGetStudentsHook } from "../hooks/students.js";
import DataTable from "./studentsTableView.js";
import RecentLookUps from "./recentLookups.js";
import LookupCard from "./lookupcard.js";
import { useSelector } from "react-redux";
export function MainLayout() {

const searchResult = useSelector((state) => state.lookup.searchResult);
  
  const {
        states: { students,added },
        setStates: { setStudents },
        handlers: {
         getStudentsHandler
        },
      } = useGetStudentsHook();

  useEffect(() => {
      getStudentsHandler()

  }, [added]);

  return (
    <>
      <Container>
        <p style={{textAlign:"start"}} className="main-heading">
           All Students
        </p>
        <Row>
        <Col md={12} lg={8} xs={12}>
        <DataTable students={students}/>
        </Col>
        <Col className="mt-60"  md={12} lg={4} xs={12}>
          <p style={{textAlign:"start"}} className="sm-headings mb-30">Recent Look Up</p>
          {Object.keys(searchResult).length != 0  &&   <LookupCard searchResult={searchResult} /> }
        {Object.keys(searchResult).length === 0  &&   <p>No Recent Search Result <br/> <span onClick={e=>window.location.href="/lookup"} className="link-search">Click here</span> to search</p> }
        </Col>
        </Row>
      

      </Container>
    </>
  );
}
export default MainLayout;
