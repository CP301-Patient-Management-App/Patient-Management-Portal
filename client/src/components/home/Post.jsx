
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 310,
        '& > *': {
            padding: '0 5px 5px 5px',
            // fontWeight: '600'
        },
        "&:hover" : {
            transform: 'scale(1.005)',
            boxShadow: '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)',
            background : '#B1D4E0',
        },
        background : '#E1ECF0',
        
    },
    image: {
        width: '50%',
        height: '50%',
        objectFit: 'cover',
        borderRadius: '50%',
        marginTop : 10,
        height: 160
    },
    textColor: {
        
        fontSize: 14,
        fontWeight: '600'
    },
    created: {
        color: '#878787',
        fontSize: 12,
       
    },
    heading: {
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        alignItems: 'center',
        fontSize: 14,
        wordBreak: 'break-word',
        textAlign: 'center'
    },
    name : {
        fontSize: 18,
        fontFamily: "sans-serif",
        fontWeight: 600,
        color: '#33415c'
    }
})

const Post = ({ post }) => {
    const classes = useStyle();
    // console.log(post.picture);
    const imgurl = post.Imageurl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU';
    const url = post.picture ? post.picture :  imgurl;  
    
    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />
            <Typography className={classes.name}>{post.NAME}</Typography>
            <Typography className={classes.age}>Age : {post.AGE}</Typography>
            {/* <Typography className={classes.phone}>Phone : {post.PHONE}</Typography> */}
            <Typography className={classes.created}>Created By: {post.username}</Typography>
            
            {/* <Typography className={classes.detail}>{post.description}</Typography> */}
            <Typography className={classes.textColor}>{post.categories}</Typography>

        </Box>
    )
}

export default Post;