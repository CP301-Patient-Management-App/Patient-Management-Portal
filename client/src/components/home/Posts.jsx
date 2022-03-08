
import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Post from './Post';
import { useState, useEffect  } from 'react';

import { getAllPosts } from '../../service/api';
const Posts=() =>{
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllPosts();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, [])

    return(
        posts.map(post=>(
            <Grid item lg={3} sm={4} xs={12}>
                <Link to = {`/details/${post._id}`} style = {{textDecoration:'none', color : 'inherit'}}>
                    <Post post = {post}/>
                </Link>
            </Grid>
        ))
    )
}
 export default Posts;