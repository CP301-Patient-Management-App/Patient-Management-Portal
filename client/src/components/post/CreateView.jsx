import React, { useState, useEffect, useContext } from 'react';
import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase, TextField, MenuItem, Select, InputLabel } from '@material-ui/core';
import { AddCircle} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../../service/api.js';

const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
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
    // title: '',
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
    console.log(post.Imageurl);
    const url = post.Imageurl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU';

    const savePost = async () => {
        await createPost(post);
        navigate('/');
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Box className={classes.container}>
            
            <div className={classes.imageCont}>
                <img src={url} alt="post" className={classes.image} />
                <AddCircle className={classes.circle} fontSize='large' color = "action" />
            </div>
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
                        // value={age}
                        // label="Age"
                        onChange = {(e) =>handleChange(e)}
                        name = 'categories'
                    >
                    <MenuItem >General</MenuItem>
                    <MenuItem >ENT</MenuItem>
                    <MenuItem >Cardiovascular</MenuItem>
                    <MenuItem >Injuries and accidents</MenuItem>
                    <MenuItem >Skin and Respiratory</MenuItem>
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