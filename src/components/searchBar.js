import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useGetStudentsHook } from '../hooks/students';
import { useDispatch } from 'react-redux';
import { lookup_search } from '../redux/actions/lookupAction';

export default function CustomizedInputBase() {
    const dispatch=useDispatch()
    const [search, setSearch]=React.useState()
    const {
        states: { students,added },
        setStates: { setStudents },
        handlers: {
         lookupStudentHandler
        },
      } = useGetStudentsHook();

      const searchStudent=(e)=>{
        dispatch(lookup_search({searchValue:e.target.value}))
        setSearch(e.target.value)
      }
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',  }}
    >
   
      <InputBase
      onChange={e=>searchStudent(e)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter UUID of Student to Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton onClick={e=>lookupStudentHandler({"uuid":search})} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    
    </Paper>
  );
}