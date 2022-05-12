
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    
    image:  {
        marginTop: 64,
        width: '100%',
        background: `url(${'https://blog.cureatr.com/hubfs/images/blog/care%20management%20program.jpg'}) center/55% repeat-x #000`,
        height: '30vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'top',
        opacity:0.4,
        position:'absolute',
        zIndex: 0,
    },
    imageBox : {
        backgroundColor : 'black',
        position: 'relative',
        height: '35vh',
        overflow: 'hidden',
        marginTop: '20px',
    }, 
    text : {
        color : 'white',
        display:'inline-block',
        fontFamily: "Lato",
        fontSize: 70,
        color: 'white',
        lineHeight: 1,
        paddingTop : 80,
        textAlign: 'center',
        width: '100%',
        zIndex:3,
        position: 'relative'
    },
    text2 : {
        fontFamily: "Lato",
        color : 'white',
        display:'inline-block',
        fontSize: 20,
        width: '100%',
        textAlign: 'center',
        position: 'relative'
    }
})

const Banner = () => {
    const classes = useStyle();
    const url = 'https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg';
    return (
        <>
        
            <Box className={classes.imageBox}>
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
                </style>
                <Box className={classes.image}>
                    
                </Box>
                <br/>
                <br/>
                <br/>
                <br/>
                <Typography className={classes.text}>Conact Us</Typography>
            </Box>
            
        </>
    )
}

export default Banner;
/*it is experimiental*/