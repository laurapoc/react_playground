import React from "react";
import classes from "./Post.module.css";
// import './Post.css';

const post = (props) => (
  <article className={classes.post}>
    <h2>{props.title}</h2>
    <img src={props.image} alt={props.alt} onClick={props.clicked}/>
  </article>
);

export default post;
