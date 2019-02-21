import React, { Component } from 'react'
import { connect } from 'react-redux'

 class PostDetail extends Component {

  render() {
      const post = this.props.post ? (
          <div className="post">
            <h4 className="center"> Post Id: {this.props.posts.id}</h4>
            <h4 className="center"> Title: {this.props.posts.title}</h4>
            <p>{this.props.posts.content}</p>
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

export default connect(mapStateToProps)(PostDetail);
