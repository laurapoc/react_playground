// import React, { Fragment, Component } from "react";
import React, { useState, useEffect, Fragment } from "react";

import classes from "./PostList.module.css";

import Post from "./Post/Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://vitrazai.lt/wp-json/wp/v2/media")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  const onClickImage = () => {
    console.log("image clicked");
  };

  const list = posts.map((post) => {
    // console.log(post);
    return (
      <li key={post.slug} className={classes.List}>
        <Post
          image={post.media_details.sizes.medium_large.source_url}
          title={post.title.rendered}
          alt={post.title.rendered}
          clicked={onClickImage}
        />
      </li>
    );
  });
  return list;
};

export default PostList;
