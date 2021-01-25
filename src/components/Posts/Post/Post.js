import React from "react";
import classes from "./Post.module.css";
// import './Post.css';

const post = (props) => (
  <article className={classes.post}>
    {/* <div>{props.image}</div> */}
    {/* <div>test title</div> */}
    <h2>{props.title}</h2>

    <img src={props.image} alt={props.alt}  />
  </article>
);

export default post;
