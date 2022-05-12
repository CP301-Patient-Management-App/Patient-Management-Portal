import { Box, makeStyles, Typography, Grid, Button } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import React, { useState, useEffect, Fragment } from 'react';
import {getPost, deletePost, updatePost} from '../../service/api.js'
import { useParams } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
// import "./styles.css";
import {updateCell} from '../../service/api.js'
import { Helmet } from "react-helmet";
import ReadOnlyRow from "./ReadOnlyRow.jsx";
import EditableRow from "./EditableRow.jsx";



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
    const [contacts1, setContacts1] = useState([]);

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
            // console.log(data);
            setPost(data);
            setContacts1(data.vitals_data)
        }
        fetchData();
    }, []);

    const deleteRecord = async () => {    
        await deletePost(id);
        Navigate('/')
    }

    const url = post.Imageurl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU';
    // ``````````````````````````````````````
    const cont = post.vitals_data;
    const [contacts, setContacts] = useState(post.vitals_data);
  
    const [addFormData, setAddFormData] = useState({
      Temperature: "",
      Blood_Pressure: "",
      Pulse_Rate: "",
      SPo2: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      Temperature: "",
      Blood_Pressure: "",
      Pulse_Rate: "",
      SPo2: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
      // console.log(newFormData);
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        // id: nanoid(),
        Temperature: addFormData.Temperature,
        Blood_Pressure: addFormData.Blood_Pressure,
        Pulse_Rate: addFormData.Pulse_Rate,
        SPo2: addFormData.SPo2
      };
      console.log(addFormData);
      const newContacts = [...post.vitals_data, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        Temperature: editFormData.Temperature,
        Blood_Pressure: editFormData.Blood_Pressure,
        Pulse_Rate: editFormData.Pulse_Rate,
        SPo2: editFormData.SPo2
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      post.vitals_data = newContacts;
      setEditContactId(null);
    };
  // ``````````````````````````````````````````````````````````
    const handleEditClick = (event, contact, id) => {
      event.preventDefault();
      setEditContactId(id);
      console.log(id)
      // console.log(1111, contact)
      const formValues = {
        Temperature: contact.Temperature,
        Blood_Pressure: contact.Blood_Pressure,
        Pulse_Rate: contact.Pulse_Rate,
        SPo2: contact.SPo2
      };
      setEditFormData(formValues);
    };
  // ``````````````````````````````````````````````````````````
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (id) => {
      var newContacts = [];
      console.log(contacts1.length)
      for (var i=0 ; i<contacts1.length ; i++){
        if (i!==id) newContacts.push(contacts1[i])
      }
      console.log(newContacts)



      // setContacts1(contacts1 => contacts1.filter((contact, i) => i !== id));
      // var item = contacts1[id] 
      // setContacts1(contacts1.filter(cont => cont !== item))
      // setContacts1(newContacts);
      setEditContactId(null)

      setPost({...post, vitals_data : newContacts})
      console.log(post)
      // updatePost(post._id, post)
  
      // const index = contacts.findIndex((contact) => contact.id === contactId);
  
      // newContacts.splice(index, 1);
  
      // setContacts(newContacts);
    };
  
    const handleSaveClick = (id) => {

      var newContacts = [...contacts1];
      
      newContacts[id].Temperature = editFormData.Temperature
      newContacts[id].Blood_Pressure = editFormData.Blood_Pressure
      newContacts[id].Pulse_Rate = editFormData.Pulse_Rate
      newContacts[id].SPo2 = editFormData.SPo2
  
      setContacts1(newContacts);
      setEditContactId(null)
      setPost({...post, vitals_data : contacts1})
      // savePost(post)
      updatePost(post._id, post)
    };
    const savePost = async () => {
        post.vitals_data.push(addFormData)
        console.log(post)
        await updateCell(post._id, post);
      };
    //   `````````````````````````````````````
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
        {/* ```````````````````````````````````````````````````````````````````` */}

        <div className="app-container">
      
        <form  className = "mainTable">
        <table>
          <thead>
            <tr>
              <th>Temperature</th>
              <th>Blood Pressure</th>
              <th>Pulse Rate</th>
              <th>Spo2</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts1?.map((contact, i) => (
              <Fragment>
                {i === editContactId ? (
                  <>
                  
                  <EditableRow
                    id={i}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    handleSaveClick = {handleSaveClick}
                  />
                  </>
                ) : (
                  <ReadOnlyRow
                    id={i}
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
          </form>
      

      <h2>Add New Entry</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Temperature"
          required="required"
          placeholder="Enter Temperature..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Blood_Pressure"
          required="required"
          placeholder="Enter Blood Pressure..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Pulse_Rate"
          required="required"
          placeholder="Enter Pulse Rate..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="SPo2"
          required="required"
          placeholder="Enter SPo2..."
          onChange={handleAddFormChange}
        />
        <button onClick = {() => savePost()} type="submit"> Add </button>
      </form>
    </div>
    </>


    
    )
    }
    export default DetailView;

    const Modal = ({ handleClose, details }) => {
        // console.log(details)
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
    

