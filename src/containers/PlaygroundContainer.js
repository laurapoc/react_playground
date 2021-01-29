import React, { Fragment } from "react";
import PostList from "../components/Posts/PostList";

// import Backdrop from "../components/UI/Backdrop/Backdrop";

const PlaygroundContainer = () => {


  return (
    <Fragment>
      <ul>
        <PostList />
      </ul>
    </Fragment>
  );
};

export default PlaygroundContainer;
