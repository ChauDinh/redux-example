import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

import PropTypes from "prop-types";

class Posts extends Component {

  componentWillMount() {
   this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(postItem => (
     <div key={postItem.id}>
      <h3>{postItem.title}</h3>
      <p>{postItem.body}</p>
     </div>
    ));
    return (
      <div>
       <h1>Posts</h1>
       { postItems }
      </div>
    )
  }
}

Posts.propTypes = {
 fetchPosts: PropTypes.func.isRequired,
 posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
 posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
