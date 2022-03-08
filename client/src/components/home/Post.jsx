
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 350,
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        width: '60%',
        objectFit: 'cover',
        borderRadius: '10px 10px 10px 10px',
        marginTop : 10,
        height: 160
    },
    textColor: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
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
    const url = post.Imageurl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU';

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />
            <Typography className={classes.name}>{post.NAME}</Typography>
            <Typography className={classes.age}>Age : {post.AGE}</Typography>
            <Typography className={classes.phone}>Phone : {post.PHONE}</Typography>
            <Typography className={classes.textColor}>Created By: {post.username}</Typography>
            
            <Typography className={classes.detail}>{post.discription}</Typography>
            <Typography className={classes.textColor}>Category : {post.categories}</Typography>

        </Box>
    )
}

export default Post;