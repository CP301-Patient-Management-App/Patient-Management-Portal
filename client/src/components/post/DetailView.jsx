import { Box, makeStyles, Typography, Grid, Button } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import {getPost, deletePost} from '../../service/api.js'
import { useParams } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
// import "./styles.css";
import { Helmet } from "react-helmet";


const useStyle = makeStyles(theme => ({
    container: {
        backgroundColor: '#a0b4b7',
        paddingTop: '150px',
        paddingBottom: '20px',
        paddingLeft: '50px',
        paddingRight: '50px',
        height: '20vh',
        
    },
    image: {
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
    doc: {
        background: '#bfd3d6',
        marginBottom: '40px'
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
	const user  = JSON.parse(localStorage.getItem('token'))
    const classes = useStyle();
    const Navigate =   useNavigate();
    const [post, setPost] = useState({});
    const { id } = useParams();

    const hnldeClick = () => {
        setShow(true);
        console.log("Show current prescription");
        console.log(show)
    };
    const data = [
        {
          id: 1001,
          medicine: 'Combiflame',
          quantity: '500mg',
          Dosage: '2'
        },
        {
          id: 1002,
          medicine: 'Dolopar',
          quantity: '100mg',
          Dosage: '3'
        }
      ];
    const [show, setShow] = useState(false);
    
    const hideModal = () => {
        setShow(false);
    };

    useEffect(() => {
    	const user  = JSON.parse(localStorage.getItem('token'));
        const fetchData = async () => {
            let data = await getPost(id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    }, []);

    const deleteRecord = async () => {    
        await deletePost(id);
        Navigate('/')
    }

    const url = post.Imageurl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU';

    return(
        <>
        <Helmet>
        <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        <Box className={classes.container}>
            <img src = {post.picture || url} alt = "banner" className={classes.image}/>
            <Box className={classes.icons}>
            <Button className = {classes.doc} style={{background: '#E7F2F8'}}variant="contained">
               <Link to = {'/speciality'} style={{color: 'black' ,textDecoration: 'none'}}>
                See Available Doctors
                </Link>
                </Button>
                <Link to = {`/update/${post._id}`}>
                {user && user.categories === 'Admin' && <Edit className={classes.icon} color = 'primary'/>}
                </Link>
                
                {user && user.categories === 'Admin' && <Delete onClick={() => deleteRecord()} className={classes.icon} color = 'error'/>}
                
            </Box>

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

            <Button onClick = {hnldeClick} style={{marginRight: 'auto',background: '#E7F2F8'}}variant="contained">See current Presciption</Button>
            <Button style={{background: '#E7F2F8'}}variant="contained">See Current Bill</Button>
            
            </Box>
            {show && <Modal details={data} handleClose={hideModal} />}

        </Box>
        </>


    
    )
    }
    export default DetailView;

    const Modal = ({ handleClose, details }) => {
        console.log(details)
        return (
          <div className="modal display-block">
            <section className="modal-main">
              <div className="App">
              <button style={{marginLeft: '58.25%'}} onClick={handleClose}>x</button>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Medicine</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Dosage</th>
      
                    </tr>
                   
                  </thead>
                  {details.map(detail => (
                  <tbody>
                    <tr>
                      <td>{detail.id}</td>
                      <td>{detail.medicine}</td>
                      <td>{detail.quantity}</td>
                      <td>{detail.Dosage}</td>
                    </tr>
                  </tbody>
                  ))
                  }
                </table>
              </div>
             
            </section>
          </div>
        );
      };
    

