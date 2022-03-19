import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

// const useStyles 

const useStyle = makeStyles({
    component: {
        background: '#FFFFFF',
        color : 'black'
    },
    container: {
        justifyContent: 'center',
        color : 'white',
        background: 'black',

        '&  > *': {
            padding: 20,
            color: 'white',
            textDecoration: 'none'
        }
    },
    Link : {
        textDecoration:'none',
        color : 'inherite'
    },
    navs : {
        fontSize: 20,
        fontWeight : 150
    }
    // name : {
    //     fontWeight: 900,
    //     fontSize : 25,
    //     marginTop : "1%",
    //     // marginBottom : "0%"

    // }
})

const Header = () => {
    const classes = useStyle();
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	}
    return (
        <AppBar className={classes.component}>
        <Toolbar className={classes.container}>
          <Link to = '/'>
          <Typography className={classes.navs}>Home</Typography>
          </Link>
          <Typography className={classes.navs}>About</Typography>
          <Typography className={classes.navs}>Contact</Typography>
          <Typography className={classes.navs} onClick={handleLogout}>Logout</Typography>
        </Toolbar>
        </AppBar>
    
    );
}

export default Header;