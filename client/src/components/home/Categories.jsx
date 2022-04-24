import React, { useState, useEffect, useContext } from 'react';
import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Grid } from '@material-ui/core';
import { Link,useLocation } from 'react-router-dom';

import { categories } from '../../constants/data';

const have_color = '#ffffff';
const useStyle = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)',
        
    },
    write: {
        margin: 20,
        width: '85%',
        background: '#00AFC1',
        color: 'black',
        textDecoration: 'none',
        fontSize: 15,
        "&:hover" : {
            background: '#74BDCB',
          }

    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    cell : {
        fontSize: 15,
        border: 'none'
    },
    elemactive :{
        backgroundColor:'#95D1CC',
        transition: '0.2s all ease-in-out',
    },
    elemdeactive :{
        transition: '0.2s all ease-in-out',
    }
})

const Categories = ({ match }) => {
    const classes = useStyle();
    const location = useLocation();
    let catg = new URLSearchParams(location.search).get("categories");
    if (catg==null)
        catg='General';
    // let params = new URLSearchParams(location.search);
    return (
        <>
            <Link to='/create' className={classes.link}>
                <Button variant="contained" className={classes.write}  >create new</Button>
            </Link>
            
            <Table className={classes.table}>
                <TableHead>
                    <TableCell className = {classes.cell}>
                    {/* <Link to={`/create/${location.search}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" className={classes.write}>Create Blog</Button>
                    </Link> */}
                    </TableCell>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow className={classes.tablerow}>
                                <Link to={`/?categories=${category}`} className={(category===catg)?classes.elemactive:classes.elemdeactive} style={{display:"block", textDecoration:"none"}}>
                                <TableCell  className = {classes.cell}>
                                        {category}
                                </TableCell>
                                    </Link>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;