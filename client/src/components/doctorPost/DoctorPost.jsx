
import { makeStyles, Box, Typography, Button } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        border: '3px solid #d3cede',
        borderRadius: 5,
        margin: "auto",
        marginBottom : "10px",
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        height: 280,
        width: 650,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 10px"

        
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginLeft : 20,
        marginRight : 20,
        marginBottom : 110,
        // height: 160
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
    },
    imgcon : {
        borderRight: 'solid'
    },
    textcon : {
        marginLeft : 20,
        // marginRight : 20,
        borderRight: 'solid',
        width : "35%",
        

    }, 
    Qualification : {
        display : "flex",
        flexDirection : "row",
        padding : "10px"
    },
    exp : {
        display : "flex",
        flexDirection : "row",
    }, 
    timing : {
       marginLeft : 30
    },
    line : {
        borderBottom: "solid"
    }, 
    button : {
        background: "#0C4160",
        color : "white",
        fontWeight : 600,
        "&:hover" : {
            background : '#B1D4E0',
            color : "black",
        },
        marginTop : 20
        
    }
})

const DoctorPost = ({ post }) => {
    const classes = useStyle();
    // console.log(post.picture);
    const imgurl = post.Imageurl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU';
    const url = post.picture ? post.picture :  imgurl;  
    const hosurl = "https://www.askapollo.com/assets/images/dr-location.svg";
    const langurl = "https://www.askapollo.com/assets/images/language.svg";
    const qualurl = "https://www.askapollo.com/assets/images/qualification.svg";
    
    return (
        <Box className={classes.container}>
            <div className={classes.imgcon}>
                <img src={url} alt="post" className={classes.image} />
            </div>
            <div className={classes.textcon}>
                <div className={classes.line}>
                    <Typography className={classes.name}>{post.NAME}</Typography>
                    <Typography className={classes.textColor}><p>{post.categories}   |   {post.Experience} Years Exp</p></Typography>
                </div>
                
               
                <Typography className={classes.Qualification}><img src={hosurl} alt="post" style={{marginRight : 10}}/>AIIMS Hospital</Typography>
                <Typography className={classes.Qualification}><img src={langurl} alt="post" style={{marginRight : 10}}/>{post.Languages}</Typography>
                <Typography className={classes.Qualification}><img src={qualurl} alt="post" style={{marginRight : 10}}/>{post.Qualification}</Typography>
            </div>
            <Box  className={classes.timing}>
            <Typography className={classes.Qualification}>{post.AvailablityDays}</Typography>
            <Typography className={classes.Qualification}>{post.AvailablityTime}</Typography>
            <Button variant="contained" className={classes.button}>Book Appointment</Button>
            </Box>
            
        </Box>
    )
}

export default DoctorPost;
// https://www.askapollo.com/assets/images/language.svg
// https://www.askapollo.com/assets/images/qualification.svg
// 	https://www.askapollo.com/assets/images/dr-location.svg