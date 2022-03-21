
import { useEffect, useState } from "react";
import ResponsiveAppBar from "../components/navbar";
import ClippedDrawer from "../components/sidenav";
import TextField from '@mui/material/TextField';
import { Container } from "react-bootstrap";

export function Main(props) {



    return (
        <>
            <div className='bg-grey'>
               
                <ClippedDrawer redirectTo={props.redirectTo} />
  
              
            </div>
         


        </>

    )
}
export default Main