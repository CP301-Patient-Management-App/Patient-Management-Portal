
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://blog.cureatr.com/hubfs/images/blog/care%20management%20program.jpg'}) center/55% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'top',
        '& :first-child': {
            fontfamily: "Dancing Script",
            fontSize: 70,
            color: 'black',
            lineHeight: 1,
            padding : 20
        },
        '& :last-child': {
            fontSize: 20,
            // background: '#FFFFFF',
        }
    }
})

const Banner = () => {
    const classes = useStyle();
    const url = 'https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg';
    return (
        <>
            <Box className={classes.image}>
                <Typography>Patient Management Portal</Typography>
                <Typography>Get Well Soon</Typography>
            </Box>
        </>
    )
}

export default Banner;