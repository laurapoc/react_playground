// import React, { useState, useEffect, Fragment } from "react";
import React, { Fragment } from "react";
import PostList from "../components/Posts/PostList";

// import { getPostById } from "../services/singlePost";
import PostImage from "../components/Posts/PostImage/PostImage";
import Modal from "../components/UI/Modal/Modal";
// import Backdrop from "../components/UI/Backdrop/Backdrop";

const PlaygroundContainer = (props) => {
  // const [post, setPost] = useState([]);

  // useEffect(() => {
  //   let mounted = true;
  //   getPostById(284)
  //     .then((post) => {
  //       if (mounted) {
  //         setPost(post);
  //       }
  //     });
  //   return () => (mounted = false);
  // }, []);

 

  return (
    <Fragment>
      <Modal>
        {/* {console.log(post)} */}
        <PostImage/> 
      </Modal>
      <ul>
        <PostList />
      </ul>
    </Fragment>
  );
};

export default PlaygroundContainer;
