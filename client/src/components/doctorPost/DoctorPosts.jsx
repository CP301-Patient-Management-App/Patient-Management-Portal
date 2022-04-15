import { Grid, Box } from '@material-ui/core';
import { Link, useLocation} from 'react-router-dom';
import DoctorPost from './DoctorPost';
import { useState, useEffect  } from 'react';

import { getAllDoctors } from '../../service/api';

const DoctorPosts=() =>{
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    // console.log(search)

    useEffect(() => {
        console.log("usefeef")
        const fetchData = async () => {
            // console.log(search)
            let data = await getAllDoctors(search);
            // console.log(data);
            setPosts(data);
        }
        fetchData();
    }, [search])

    return(
        posts.map(post=>(
            <Grid item lg={3} sm={4} xs={12}>
                {/* <Link to = {`/details/${post._id}`} style = {{textDecoration:'none', color : 'inherit'}}> */}
                    <DoctorPost post = {post}/>
                {/* </Link> */}
            </Grid>
        ))
    )
}
export default DoctorPosts;