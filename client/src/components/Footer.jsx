import { makeStyles} from "@material-ui/core";
import React, { useState } from 'react';


const useStyle = makeStyles({
    component: {
        backgroundColor: "#006778",
        color: "#eee",
        fontSize: 15,
        fontWeight : 150,
        textAlign: "center",
        padding: "5px",
        position:"Fixed",
        left: "0",
        bottom: "0",
        height: "20px",
        width: "100%",
    },
})

const Footer = () => {
    const classes = useStyle();
    return (
        <div className={classes.component}>
         © Patient Mangement Portal | 2022 | CP301 Group-10  
        </div>
    );
}

export default Footer;
