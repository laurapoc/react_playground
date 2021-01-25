import React, { Fragment, Component } from "react";
// import axios from "axios";

import Post from "../components/Posts/Post/Post";

class PlaygroundContainer extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    fetch("https://vitrazai.lt/wp-json/wp/v2/media")
      .then((response) => {
        return response.json();
      })
      .then((posts) => {
        this.setState({ posts: posts });
        // console.log(posts);
      });
  }

  render() {
    const posts = this.state.posts.map((post) => {
      // console.log(post);
      return (
        <li key={post.id}>
          <Post  image={post.source_url} title={post.title.rendered} alt={post.title.rendered} />
        </li>
      );
    });
    return (
      <Fragment>
        <ul>{posts}</ul>
      </Fragment>
    );
  }
}

export default PlaygroundContainer;
