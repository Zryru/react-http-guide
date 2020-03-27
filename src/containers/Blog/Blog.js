import React, { Component } from "react";

import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import { Route, NavLink } from "react-router-dom";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>

              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>}></Route> */}
        <Route path="/" exact component={Posts}></Route>
        <Route path="/new-post" exact component={NewPost}></Route>
        <Route path="/:id" exact component={FullPost}></Route>
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
