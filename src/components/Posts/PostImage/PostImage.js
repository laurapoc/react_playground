import React from "react";

const postImage = (props) => {
  // const singleImage = Object.keys(props.posts).map(post => {
  //     return {post};
  // })
  return (
    <div>
      <h3>Test Modal Image</h3>
      <img src={props.image} alt={props.alt} />
    </div>
  );
};

export default postImage;
