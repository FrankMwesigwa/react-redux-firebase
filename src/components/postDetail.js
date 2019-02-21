import React, { Component } from 'react'
import axios from 'axios'

 class PostDetail extends Component {
     state = {
         posts: null
     }

     componentDidMount = () => {
         console.log(this.props);
         let id = this.props.match.params.post_id;
         axios.get('https://jsonplaceholder.typicode.com/posts' + id )
            .then(response => {
                this.setState({
                    posts: response.data
                })
            console.log(response)
            })
     }

  render() {
      const post = this.state.post ? (
          <div className="post">
            <h4 className="center"> Post Id: {this.state.posts.id}</h4>
            <h4 className="center"> Title: {this.state.posts.title}</h4>
            <p>{this.state.posts.body}</p>
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

export default PostDetail;
