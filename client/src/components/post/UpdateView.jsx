import React, { useState, useEffect, useContext } from 'react';
import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase } from '@material-ui/core';
import { AddCircle} from '@material-ui/icons';
import { useParams } from 'react-router-dom';
// import { useHistory, useLocation } from 'react-router-dom';

import { getPost } from '../../service/api';
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
        flexDirection: 'row'
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));

// const initialPost = {
//     title: '',
//     description: '',
//     picture: '',
//     username: '',
//     categories: '',
//     createdDate: new Date()
// }

const UpdateView = () => {
    const classes = useStyle();
    // const history = useHistory();
    // const location = useLocation();

    // const [post, setPost] = useState(initialPost);
    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(id);
            // console.log(data);
            setPost(data);
        }
        fetchData();
    }, []);
    // const [file, setFile] = useState('');
    // const [imageURL, setImageURL] = useState('');
    // const { account, setAccount } = useContext(LoginContext);

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    // useEffect(() => {
    //     const getImage = async () => { 
    //         if(file) {
    //             const data = new FormData();
    //             data.append("name", file.name);
    //             data.append("file", file);
                
    //             const image = await uploadFile(data);
    //             post.picture = image.data;
    //             setImageURL(image.data);
    //         }
    //     }
    //     getImage();
    //     post.categories = location.search?.split('=')[1] || 'All'
    //     post.username = account;
    // }, [file])

    // const savePost = async () => {
    //     await createPost(post);
    //     history.push('/');
    // }

    // const handleChange = (e) => {
    //     setPost({ ...post, [e.target.name]: e.target.value });
    // }

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />

            <FormControl className={classes.title}>
                {/* <label htmlFor="fileInput">
                    <Add className={classes.addIcon} fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                /> */}
                <AddCircle fontSize='large' color = "action" />
                <InputBase placeholder="Title" className={classes.textfield} />
                <Button variant="contained" color="primary">Update</Button>
            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                name='description'
                
            />
        </Box>
    )
}

export default UpdateView;