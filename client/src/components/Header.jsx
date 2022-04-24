import { AppBar, Toolbar, Typography, makeStyles, TextField, List, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
// import styles from './post/styles.css'; 
import {Navbar, NavDropdown, Offcanvas, Nav, Container, Form, FormControl}  from 'react-bootstrap'

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
        // opacity: 0.9,

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
    }, 
    search : {
        // backgroundColor : 'black',
        height : 10
    },
    searchBox : {
        backgroundColor : 'white',
        width : '100%',
        borderRadius : 4,
        // height : "50px",

    }
})

const Header = ({ setSearchItem }) => {
    const classes = useStyle();
     const [search, setSearch] = useState("");

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
		window.location = "/";
        
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


{/* <Navbar scrolling dark expand="md" fixed="top" class="navbar navbar-expand-lg fixed-top navbar-scroll">
        <Container class="container-fluid">
        </Container>
</Navbar> */}