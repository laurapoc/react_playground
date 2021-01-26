import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => (
    // props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
   <div className={classes.Backdrop} ></div>
);

export default Backdrop;