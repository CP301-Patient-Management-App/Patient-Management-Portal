import { AppBar, Toolbar, Typography, makeStyles, TextField, List, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useState } from 'react';


// const useStyles 

const useStyle = makeStyles({
    component: {
        background: '#FFFFFF',
        color : 'black'
    },
    container: {
        justifyContent: 'center',
        color : 'white',
        background: '#4b53bc',

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

const Header = ({ setSearchItem }) => {
    const classes = useStyle();
     const [search, setSearch] = useState("");

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	}

    const handleChange = (e) => {
        setSearch(e.target.value);
        setSearchItem(e.target.value);
    }
    const handleClick=  () => {
        setSearchItem(search)
    }
    // console.log(search)
    return (
        <AppBar className={classes.component}>
        <Toolbar className={classes.container}>
          <Link to = '/'>
          <Typography className={classes.navs}>Home</Typography>
          </Link>
          <Typography className={classes.navs}>About</Typography>
          <Typography className={classes.navs}>Contact</Typography>
          <Typography className={classes.navs} onClick={handleLogout}>Logout</Typography>
          
        
        <div className="search">
            <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            onChange = {(e) =>handleChange(e)}
            name = 'Search'
            />
        </div>
        <Button variant="contained" color="primary" onClick = {() => handleClick()} > Search </Button>


            
            <List />
        </Toolbar>
        </AppBar>
    
    );
}

export default Header;