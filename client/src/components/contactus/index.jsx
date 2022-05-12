import React from 'react';
import Banner from './Banner';
import { makeStyles} from "@material-ui/core";
import { useState } from 'react';
import zIndex from '@material-ui/core/styles/zIndex';


const useStyle = makeStyles({
column:{
    float: "left",
    width: "30%",
    marginBottom: "16px",
    padding: "0 8px",
  },
  card: {
    justifyContent:"center",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
  },
  container :{
    padding: "0 16px",
  },
  title:{
    color: "#222",
  }
})
const ContactUs= () => {
    const classes = useStyle();
    return (
        <>
        <Banner/>
        <div style={{margin:"0 auto",marginTop:"2%",width: "90%",justifyContent:'center'}}>
        <div class={classes.row}>
        <div class={classes.column}>
            <div class={classes.card}>
            <img src={"CP301-LOGOv2.png"} style={{width:"50%"}}/>
            <div class={classes.container}>
            <h2>Chennamolla Vinay</h2>
                <p class={classes.title}>EE, IIT Ropar</p>
                <p>2019eeb1155@iitrpr.ac.in</p>
            </div>
            </div>
        </div>

        <div class={classes.column}>
            <div class={classes.card}>
            <img src={"CP301-LOGOv2.png"} style={{width:"50%"}}/>
            <div class={classes.container}>
            <h2>Swapnil Saurav</h2>
                <p class={classes.title}>EE, IIT Ropar</p>
                <p>2019eeb1204@iitrpr.ac.in</p>
            </div>
            </div>
        </div>

        <div class={classes.column}>
            <div class={classes.card}>
            <img src={"CP301-LOGOv2.png"} style={{width:"50%"}}/>
            <div class={classes.container}>
                <h2>Tushar Jain</h2>
                <p class={classes.title}>EE, IIT Ropar</p>
                <p>2019eeb1207@iitrpr.ac.in</p>
            </div>
            </div>
        </div>
        </div>
        <div class={classes.row}>
        <div class={classes.column}>
            <div class={classes.card}>
            <img src={"CP301-LOGOv2.png"} style={{width:"50%"}}/>
            <div class={classes.container}>
                <h2>Tanishk Gupta</h2>
                <p class={classes.title}>EE, IIT Ropar</p>
                <p>2019eeb1205@iitrpr.ac.in</p>
            </div>
            </div>
        </div>

        <div class={classes.column}>
            <div class={classes.card}>
            <img src={"CP301-LOGOv2.png"} style={{width:"50%"}}/>
            <div class={classes.container}>
                <h2>Ajay Raj Meena</h2>
                <p class={classes.title}>EE, IIT Ropar</p>
                <p>2019eeb1147@iitrpr.ac.in</p>
            </div>
            </div>
        </div>
        </div>
        </div>

        </>
    )
}

export default ContactUs;