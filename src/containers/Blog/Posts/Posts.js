import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import Axios from "../../../axios";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";
// import { Link } from "react-router-dom";
import { Route } from "react-router-dom";


class Posts extends Component {
  state = {
    posts: []
  };

  postSelectedHandler = id => {
    // this.setState({ selectedPostId: id });
    this.props.history.push({
      pathname: "/posts/" + id
    });
  };

  componentDidMount() {
    console.log("props", this.props);

    Axios.get("/posts")
      .then(response => {
        //   console.log("response", response);
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "jsonPlaceholder"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log("error", error);
        // this.setState({ error: true });
      });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
    if (this.state.posts) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={"/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          ></Post>
          // </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost}>
        </Route>
      </div>
    );
  }
}

export default Posts;
