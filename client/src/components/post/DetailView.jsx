import { Box, makeStyles, Typography, Grid, Button } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react';
import {getPost} from '../../service/api.js'
import { useParams } from 'react-router-dom';


const useStyle = makeStyles(theme => ({
    container: {
        backgroundColor: '#a0b4b7',
        paddingTop: '100px',
        paddingBottom: '20px',
        paddingLeft: '50px',
        paddingRight: '50px',
        width: '100%',
        height: '20vh',
        
    },
    image: {
        // paddingLeft: '50px',
        width: '220px',
        height: '220px',
        borderRadius: '50%',
        aspectRatio: 'auto',
        
        
        
    },
    icons: {
        
        float: 'right',
        paddingRight: 135
        
    },
    icon: {
        backgroundColor: '#bfd3d6',
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius: 10
    },
    details: {
        paddingTop: '80px',
        paddingLeft: '70px',
        paddingRight: '90px'
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '10px 0',
        
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    subheadin: {
       
        display: 'flex',
        margin: '10px 0',
        
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
   
}));


const DetailView = ({ match }) =>{
    const classes = useStyle();
    
    const [post, setPost] = useState({});
    const { id } = useParams();
   

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    }, []);
    const url = post.Imageurl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU';

    return(
        <Box>
        <Box className={classes.container}>
            <img src = {post.picture || url} alt = "banner" className={classes.image}/>
            <Box className={classes.icons}>
                <Link to = {`/update/${post._id}`}>
                    <Edit className={classes.icon} color = 'primary'/>
                </Link>
                <Delete className={classes.icon} color = 'error'/>   
            </Box>
            {/* <Typography className={classes.heading}>{post.title}</Typography> */}
            </Box>
        
            <Box className={classes.details}>
            <Box className={classes.subheadin}>
            <Typography style={{fontWeight:600}}>Patient: {post.NAME}</Typography>
            <Typography style={{marginLeft: 'auto',fontWeight:600}}>Admitted on: {new Date(post.createdDate).toDateString()}</Typography>
            </Box>
            <Box className={classes.subheading}>
            <Typography>Description:<span> </span> 
                {post.description}
            </Typography>
            <Typography style={{marginLeft: 'auto',fontWeight:600}}>Category:<span> </span> 
                {post.categories}
            </Typography>
            
            </Box>
            <Typography style={{marginLeft: 'auto',color: '#82807F',fontWeight:600}}>Age:<span> </span> 
                {post.AGE}
            </Typography>
            <Typography style={{paddingBottom: '10px',color: '#82807F',fontWeight:600}}>Contact Number:<span> </span> 
                {post.PHONE}
            </Typography>
            <Box className={classes.subheading}>

            <Button style={{marginRight: 'auto',background: '#E7F2F8'}}variant="contained">See current Presciption</Button>
            <Button style={{background: '#E7F2F8'}}variant="contained">See Current Bill</Button>
            
            </Box>
         
        </Box>
        </Box>
    
    )
}
export default DetailView;
