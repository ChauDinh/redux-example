import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

import PropTypes from "prop-types";

class Posts extends Component {

  componentWillMount() {
   this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
   if (nextProps.newPost) {
    this.props.posts.unshift(nextProps.newPost);
   }
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
 posts: PropTypes.array.isRequired,
 newPost: PropTypes.object
}

const mapStateToProps = state => ({
 posts: state.posts.items,
 newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
