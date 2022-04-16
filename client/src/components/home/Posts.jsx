
import { Grid, Box } from '@material-ui/core';
import { Link,useLocation} from 'react-router-dom';
import Post from './Post';
import { useState, useEffect  } from 'react';

import { getAllPosts } from '../../service/api';

const Posts=({searchItem}) =>{
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    useEffect(() => {
        const fetchData = async () => {
            // console.log(search)
            let data = await getAllPosts(search);
            setPosts(data);
        }
        fetchData();
    }, [search])
    console.log(searchItem)
    return(
        posts.map(post=>(
            <>
                {post.NAME.toLowerCase().includes(searchItem.toLowerCase())  && 
            <Grid item lg={3} sm={4} xs={12}>
                <Link to = {`/details/${post._id}`} style = {{textDecoration:'none', color : 'inherit'}}>
                <Post post = {post}/>
                </Link>
                </Grid>
            }   
            </>
        ))
    )
}
 export default Posts;