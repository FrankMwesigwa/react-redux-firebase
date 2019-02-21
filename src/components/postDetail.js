import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

 class PostDetail extends Component {

    handleDelete = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push("/");
    }

  render() {
      const post = this.props.post ? (
          <div className="post">
            <h4 className="center"> Post Id: {this.props.post.id}</h4>
            <h4 className="center"> Title: {this.props.post.title}</h4>
            <p>{this.props.post.content}</p>
            <div className="center">
                <button className="btn-grey" onClick={this.handleDelete}> Delete Post </button>
            </div>
          </div>
      ) : (
          <div className="center">Loading Post .... </div>
      )

    return (
      <div className="container">
        { post } 
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => {dispatch(deletePost(id))}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
