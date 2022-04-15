import React from 'react';
import { Box, makeStyles, Typography, Grid,  } from '@material-ui/core';
import { specialities } from '../../constants/data';
import { Link,useLocation } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import { getAllDoctors } from '../../service/api';
import DoctorPosts from './DoctorPosts';

const useStyle = makeStyles({
    container: {
        border: '2px solid #d3cede',
        borderRadius : 5,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 180,
        width : 180,
    },
    image: {
        width: "50%",
        height: '50%',
        marginTop : '20%',
        marginBottom : '10%',
    },
    frag : {
      paddingTop : "100px",
      paddingLeft : "60px",
      
    },
    name : {
      fontWeight : 600,
      color: 'black' ,
      

    }

})


const Post = ({ info }) => {
    const classes = useStyle();
    return (
      <div className={classes.frag}>
      <Box className={classes.container}>
          <img src={info.imgurl} alt="post" className={classes.image} />
          <Typography className={classes.name}>{info.name}</Typography>
        </Box>
      </div>  
    )
}

const Posts=() =>{
  return(
      specialities.map(speciality=>(
          <Grid item lg={3} sm={4} xs={6}>
              <Link to={`/Doctors?categories=${speciality.name}`} style={{color: 'black' ,textDecoration: 'none'}}>
                  <Post info = {speciality} />
              </Link>
          </Grid>
      ))
  )
}

const Home = () => {
  
  const classes = useStyle();
  return (
      <>
        <Grid container item xs={12} sm={10} lg={12}>
          <Posts />
        </Grid> 
        {/* <DoctorPosts /> */}
      </>
  )
}

export default Home;