import { AppBar, Toolbar, Typography, makeStyles, TextField, List, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {Navbar, NavDropdown, Offcanvas, Nav, Container, Form, FormControl}  from 'react-bootstrap'
import { LocalGasStationOutlined } from "@material-ui/icons";
// const useStyles 

const useStyle = makeStyles({
    component: {
        width:"100%",
        background: '#FFFFFF',
        color : 'black'
    },
    container: {
        width:"100%",
        justifyContent: 'center',
        color : '#eee',
        background: '#006778',
        // opacity: 0.9,

        '&  > *': {
            padding: 20,
            color: '#ddd',
            textDecoration: 'none',
           
            
        },
        
    },
    Link : {
        textDecoration:'none',
        color : 'inherite'
    },
    navs : {
        fontSize: 20,
        fontWeight : 150,
        cursor: 'pointer',
        '&:hover':{
            color:'white',
            transform: 'scale(1.07)',
        },
        transition: '0.1s all ease-in-out',
    }, 
    search : {
        height : 10
    },
    searchBox : {
        width : '100%',
        borderRadius : 4,
        border:'2px solid #00AFC1'
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
                <img src={"CP301-LOGO.png"} style={{width:60,marginTop:-7}}/>
            </Link>
            <Link to = '/'>
                <Typography className={classes.navs}>Home</Typography>
            </Link>
            <Link to = '/aboutus'>
            <Typography className={classes.navs}>About</Typography>
            </Link>
            <Link to = '/contactus'>
            <Typography className={classes.navs}>Contact</Typography>
            </Link>
            <Typography className={classes.navs} onClick={handleLogout}>Logout</Typography>
          
        
        <div className="search">
            <TextField
             inputProps={{ style: { color: "white" }}}
             InputPlaceholderProps={{
                style: { color: '#99c' },
              }}
            className={classes.searchBox}

            id="outlined-basic"
            variant="outlined"
            fullWidth
            placeholder="Search"
            onChange = {(e) =>handleChange(e)}
            name = 'Search'
            />
        </div>
        {/* <Button variant="contained" color="primary" onClick = {() => handleClick()} > Search </Button> */}


            
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