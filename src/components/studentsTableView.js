import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import AddForm from "./addStudentCard";
import { connect, useDispatch, useSelector } from "react-redux";
import { useGetStudentsHook } from "../hooks/students";
import { update_student } from "../redux/actions/updateStudent";
import DeleteModal from "./deleteModal";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
export default function DataTable(props) {
  const rows = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const columns = [
    { field: "uuid", headerName: "UUID", width: 90 },
    { field: "name", headerName: "Name", width: 90 },
    { field: "sex", headerName: "Sex", width: 90 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "gpa",
      headerName: "GPA",
      type: "number",
      width: 90,
    },
    {
      field: "siblings",
      headerName: "Sibling",
      type: "number",
      width: 90,
    },
    {
      field: "class",
      headerName: "Class",
      type: "number",
      width: 90,
    },

    {
      field: "action",
      headerName: "Edit",
      type:"number",
      width: 90,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          // editStudentHandler(thisRow)
          dispatch(update_student(thisRow));
          handleOpen();
          setFromUpdate(true);
          return;
        };

        return <div className="pointer" onClick={onClick}><BorderColorOutlinedIcon sx={{color:"#193a8c"}}/></div>;
      },
    },
    {
      field: "action2",
      headerName: "Delete",
      type:"number",
      width: 90,

      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          // editStudentHandler(thisRow)
          dispatch(update_student(thisRow));
          handleDeleteOpen();
          setFromUpdate(true);
          return;
        };

        return <div className="pointer" onClick={onClick}><DeleteOutlineOutlinedIcon sx={{color:"red"}}/></div>;
      },
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [deleteBox, setDeleteBox] = React.useState(false);
  const [fromUpdate, setFromUpdate] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setFromUpdate(false);
  };
  const handleDeleteOpen = () => {
    setDeleteBox(true);
  
  };
  const handleClose = () => {setOpen(false)
    dispatch(update_student([]));
  };
  const handleDeleteClose = () => {setDeleteBox(false)
    dispatch(update_student([]));

  }
  ;
  const {
    states: { added, students },
    setStates: { setAdded },
    handlers: { editStudentHandler },
  } = useGetStudentsHook();

  return (
    <div style={{ height: 450, width: "100%" }}>
      <div style={{ textAlign: "end", paddingBottom: "20px" }}>
        <button className="basic-btn" onClick={handleOpen}>Add Student</button>
      </div>

      <DataGrid
        getRowId={(row) => row.uuid}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        autoPageSize={true}
        sx={{
          fontFamily:"Roboto",
          color:"#193a8c",
          fontSize:14
        }}
      
        // onCellClick={console.log("nauman ")}
      />
      {open && (
        <AddForm update={fromUpdate} open={open} handleClose={handleClose} />
      )}
       {deleteBox && (
        <DeleteModal open={deleteBox} handleClose={handleDeleteClose} />
      )}
    </div>
  );
}
