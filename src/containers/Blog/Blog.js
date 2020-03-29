import React, { Component, Suspense } from "react";

// import FullPost from "./FullPost/FullPost";
// import NewPost from "./NewPost/NewPost";
// import async
import Posts from "./Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
// import asyncComponent from "../../hoc/asyncComponent";

// const AsyncNewPost = asyncComponent(() => {
//   return import("./NewPost/NewPost");
// });

const AsyncNewPost = React.lazy(() => import("./NewPost/NewPost"));

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/posts">
                  Posts
                </NavLink>
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
        <Switch>
          <Route
            path="/new-post"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <AsyncNewPost />
              </Suspense>
            )}
          />
          {/* {this.state.auth ? (
            <Route path="/new-post" exact component={AsyncNewPost}></Route>
          ) : null} */}
          <Route path="/posts" component={Posts}></Route>
          <Redirect from="/" to="posts"></Redirect>
          {/* <Route render={() => <h1>Not found</h1>}></Route> */}
          {/* <Route path="/:id" exact component={FullPost}></Route> */}
        </Switch>
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
