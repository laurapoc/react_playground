import React, { Fragment, Component } from "react";
import axios from "axios";

import Post from "../components/Posts/Post/Post";

class PlaygroundContainer extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get("https://vitrazai.lt/wp-json/wp/v2/media/287")
      .then((response) => {
        //   console.timeLog(this.posts);
        // console.log(response.data);
        const posts = response.data;
        this.setState({ posts: posts });
        console.log(posts);
      });
  }

  render() {
    // const posts = this.state.posts.map((post) => {
    //     return <Post key={post.id} title={post.title} />;
    // //   return this.state[post];
    // });
    return (
      <Fragment>
        <h1>This is my playground container</h1>
        <h1>id: {this.state.posts.id}</h1>
        <h1>id: {this.state.posts.id}</h1>
        {/* {posts} */}
      </Fragment>
    );
  }
}

export default PlaygroundContainer;
