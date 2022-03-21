import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Row, Col } from "react-bootstrap";
export default function LookupCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image="/assets/dummyPerson.jpeg"

      />
      <CardContent>
        <Typography sx={{ color: "#193a8c"}} gutterBottom variant="h5" component="div">
          {props.searchResult.name} <br/> Age: {props.searchResult.age}
        </Typography>
      </CardContent>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap:"wrap",
            width: "100%",
            justifyContent: "space-between"
            , padding:"10px"
          }}
        >
          <div style={{ display: "flex" }}>
            <p
              style={{ fontSize: "14px", fontWeight: "400", color: "#193a8c",marginRight:"10px" }}
              size="small"
            >
              <span style={{ fontSize: "14px", fontWeight: "500" }}>Class: </span>
              {props.searchResult.class}
            </p>

            <p
              style={{ fontSize: "14px", fontWeight: "400", color: "#193a8c" }}
              size="small"
            >
              <span style={{ fontSize: "14px", fontWeight: "500" }}>GPA: </span>
              {props.searchResult.gpa}
            </p>
          </div>

          <div style={{ display: "flex",}}>
            <p
              style={{ fontSize: "14px", fontWeight: "400", color: "#193a8c",marginRight:"10px" }}
              size="small"
            >
              <span style={{ fontSize: "14px", fontWeight: "500" }}>Sex: </span>
              {props.searchResult.sex}
            </p>

            <p
              style={{ fontSize: "14px", fontWeight: "400", color: "#193a8c" }}
              size="small"
            >
              <span style={{ fontSize: "14px", fontWeight: "500" }}>Sibilings: </span>
              {props.searchResult.siblings}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
