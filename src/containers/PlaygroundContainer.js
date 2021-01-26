// import React, { Fragment, Component } from "react";
import React, { Fragment } from "react";
// import axios from "axios";
import PostList from "../components/Posts/PostList";
import Backdrop from "../components/UI/Backdrop/Backdrop";

// class PlaygroundContainer extends Component {
//   state = {
//     posts: [],
//   };
//   componentDidMount() {
//     fetch("https://vitrazai.lt/wp-json/wp/v2/media")
//       .then((response) => {
//         return response.json();
//       })
//       .then((posts) => {
//         this.setState({ posts: posts });
//         // console.log(posts);
//       });
//   }

//   render() {
//     const posts = this.state.posts.map((post) => {
//       // console.log(post);
//       return (
//         <li key={post.id}>
//           <Post  image={post.source_url} title={post.title.rendered} alt={post.title.rendered} />
//         </li>
//       );
//     });
//     return (
//       <Fragment>
//         <ul>{posts}</ul>
//       </Fragment>
//     );
//   }
// }



const PlaygroundContainer = () => {
  return (
    <Fragment>
      {/* <Backdrop /> */}
      <ul>
        <PostList />
      </ul>
    </Fragment>
  );
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("https://vitrazai.lt/wp-json/wp/v2/media")
  //     .then((response) => response.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     });

  // }, []);

  // const postList = posts.map((post) => {
  //   return (
  //     <li key={post.id}>
  //       <Post image={post.source_url} title={post.title.rendered} alt={post.title.rendered} />
  //     </li>
  //   );
  // });

  // return postList;
};

export default PlaygroundContainer;
