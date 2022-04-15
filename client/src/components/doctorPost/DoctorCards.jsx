import React from 'react';
import { Box, makeStyles, Typography, Grid,  } from '@material-ui/core';
import DoctorPosts from './DoctorPosts';


const useStyle = makeStyles({
    Cards: {
        paddingTop: "80px",
        paddingLeft: "20px",
        justifyContent: 'center'
    }

})

const DoctorCards = () => {
  const classes = useStyle();
   
    return (
        <>
          {/* <Grid container item xs={12} sm={10} lg={12}> */}
            <div className={classes.Cards}>
            <DoctorPosts />
            </div>
          {/* </Grid>  */}
        </>
    )
  }
  
  export default DoctorCards;