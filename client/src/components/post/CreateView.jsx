import React, { useState, useEffect, useContext } from 'react';
import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase, TextField, MenuItem, Select, InputLabel } from '@material-ui/core';
import { AddCircle as Add, CallEnd } from '@material-ui/icons';
import { useNavigate , useLocation } from 'react-router-dom';

import { createPost , uploadFile } from '../../service/api.js';

const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    addIcon: {
        paddingLeft: '60%'
    },
    image: {
        marginTop: "5%",
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    circle: {
        // marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        marginLeft : '60%'
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25,
        marginBottem : 5
    },
    textarea: {
        width: '100%',
        border: 'none',
        margin: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    },
    image : {
        width : '20%',
        display: 'flex',
        // margin : "auto"
        marginRight : 0,
        marginLeft : "40%"
    },
    fields : {
        margin : 50,
        width : '20%'
    }, 
    publishButton : {
        // float : 'right'
        marginLeft : '45%'
    }, 
    imageCont : {
        paddingTop : "2%",
        display: 'flex',
        flexDirection: 'column',
    }
}));

const initialPost = {
    description: '',
    picture: '',
    username: 'Vinay',
    categories: 'General',
    createdDate: new Date(),
    NAME : '',
    AGE : '',
    Imageurl : '',
    PHONE : '',
    Email : ''
}

const CreateView = () => {
    const classes = useStyle();
    const navigate =   useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [category, setCategory] = useState('General');
    const [file, setFile] = useState('');
    const [imageURL, setImageURL] = useState('');

    
    const url = post.Imageurl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU';


    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const image = await uploadFile(data);
                post.picture = image.data;
                setImageURL(image.data);
            }
        }
        getImage();
        // post.categories = location.search?.split('=')[1] || 'All'
        
    }, [file])

    const savePost = async () => {
        await createPost(post);
        // navigate('/');
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    const handleMenu = (e) => {
        // setPost({ ...post, [e.target.getAttribute("name")]: e.target.innerText });
         setCategory(e.target.value);
        console.log(e.target);
         setPost({ ...post, [e.target.name] : e.target.value });
        //  setPost({...post, title : post.PHONE})
     }
    return (
        <Box className={classes.container}>
            
            <div className={classes.imageCont}>
                <img src={url} alt="post" className={classes.image} />
                <label htmlFor="fileInput">
                    <Add className={classes.addIcon} fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    className={classes.circle}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                {/* <AddCircle   className={classes.circle} onChange={(e) => setFile(e.target.files[0])} fontSize='large' color = "action" /> */}
            </div>
           
            <TextField id="standard-basic" label="NAME" variant="standard" 
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'NAME'
            
            />
            <TextField id="standard-basic" label="Email" variant="standard" 
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'Email'
            
            />
            <TextField id="standard-basic" label="AGE" variant="standard" 
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'AGE'
                
            />
            <TextField id="standard-basic" label="PHONE-NO" variant="standard" 
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'PHONE'
            />
            <TextField id="standard-basic" label="Image URL" variant="standard" 
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'Imageurl'
            />
            <FormControl className={classes.fields}>
                <InputLabel id="demo-simple-select-label">CATEGORY</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value = {category}
                        name = "categories"
                        onChange = {handleMenu}
                      >
                    <MenuItem   value = {'General'}>General</MenuItem>
                    <MenuItem   value = {'ENT'}>ENT</MenuItem>
                    <MenuItem   value = {'Cardiovascular'} >Cardiovascular</MenuItem>
                    <MenuItem   value = {'Injuries and accidents'}>Injuries and accidents</MenuItem>
                    <MenuItem   value = {'Skin and Respiratory'}>Skin and Respiratory</MenuItem>
                    </Select>
            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                placeholder="Description"
                className={classes.textarea}
                name='description'
                onChange={(e) => handleChange(e)} 
                
            />

            <Button  onClick = {() => savePost()} variant="contained" color="primary" className={classes.publishButton}> Publish </Button>
        </Box>
    )
}

export default CreateView;