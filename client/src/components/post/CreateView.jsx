import React, { useState, useEffect, useContext } from 'react';
import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase, TextField, MenuItem, Select, InputLabel } from '@material-ui/core';
import { AddCircle} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../../service/api.js';
// import { LoginContext } from '../../context/ContextProvider';

const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    title: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        float : "right"
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
        margin : "auto"
    },
    fields : {
        margin : 50,
        width : '20%'
    }
}));

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'Vinay',
    categories: 'General',
    createdDate: new Date(),
    NAME : '',
    AGE : '',
    Imageurl : '',
    PHONE : ''
}

const CreateView = () => {
    const classes = useStyle();
    const navigate =   useNavigate();
    
    const [post, setPost] = useState(initialPost);
    const [category, setCategory] = useState('General');
    console.log(post.Imageurl);
    const url = post.Imageurl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU';

    const savePost = async () => {
        await createPost(post);
        navigate('/');
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    const handleMenu = (e) => {
       // setPost({ ...post, [e.target.getAttribute("name")]: e.target.innerText });
        setCategory(e.target.value);
       // console.log(e.target.name);
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />

            <FormControl className={classes.title}>
                <AddCircle fontSize='large' color = "action" />
                <InputBase 
                    onChange = {(e) =>handleChange(e)}
                    placeholder="Title" 
                    className={classes.textfield} 
                    name = 'title'
                />
                <Button onClick = {() => savePost()} variant="contained" color="primary">Publish</Button>
            </FormControl>
            <TextField id="standard-basic" label="NAME" variant="standard" 
                className={classes.fields}
                onChange = {(e) =>handleChange(e)}
                name = 'NAME'
            
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
            
        </Box>
    )
}

export default CreateView;