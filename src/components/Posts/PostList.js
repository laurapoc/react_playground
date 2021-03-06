// import React, { Fragment, Component } from "react";
import React, { useState, useEffect, Fragment } from "react";
import { getList } from "../../services/list";

import classes from "./PostList.module.css";
import Post from "./Post/Post";
import Modal from "../UI/Modal/Modal";
import PostImage from "../Posts/PostImage/PostImage";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      // fetch("https://vitrazai.lt/wp-json/wp/v2/media")
      //   .then((response) => response.json())
      .then((posts) => {
        if (mounted) {
          setPosts(posts);
        }
      });
    return () => (mounted = false);
  }, []);

  const onClickImage = (props) => {
    // setPosts(posts.id);
    console.log("image clicked, id: " + props.id);
  };

  const list = posts.map((post) => {
    // console.log(post);
    return (
      <Fragment key={post.slug}>
        <Modal>
          {/* {console.log(post)} */}
          <PostImage />
        </Modal>
        <li className={classes.List}>
          <Post
            image={post.media_details.sizes.medium_large.source_url}
            title={post.title.rendered}
            alt={post.title.rendered}
            clicked={onClickImage}
            id={post.id}
          />
        </li>
      </Fragment>
    );
  });
  return <Fragment>{list}</Fragment>;
};

export default PostList;
