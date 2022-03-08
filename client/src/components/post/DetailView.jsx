import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react';
import {getPost} from '../../service/api.js'
import { useParams } from 'react-router-dom';
const useStyle = makeStyles(theme => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius: 10
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
        margin: '20px 0',
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
    const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU';
    
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
    return(
        <Box className={classes.container}>
            <img src = {post.picture || url} alt = "banner" className={classes.image}/>
            <Box className={classes.icons}>
                <Link to = {`/update/${post._id}`}>
                    <Edit className={classes.icon} color = 'primary'/>
                </Link>
                <Delete className={classes.icon} color = 'error'/>   
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>


            <Box className={classes.subheading}>
            <Typography>Author: <span style={{fontWeight:600}}>{post.username}</span></Typography>
            <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>

            <Typography> 
                {post.description}
            </Typography>
        </Box>
    
    )
}
export default DetailView;
