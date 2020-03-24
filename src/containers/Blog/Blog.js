import React, { Component } from "react";

// import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import { Route, Link } from "react-router-dom";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </Link>

              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>}></Route> */}
        <Route path="/" exact component={Posts}></Route>
        <Route path="/new-post" exact component={NewPost}></Route>
        {/* <Posts></Posts> */}
        {/* <section className="Posts">
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
