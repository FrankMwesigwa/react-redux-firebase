import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BlogSelected from '../images/blog_selected.png'
import { connect } from 'react-redux'

 class Home extends Component {

  render() {
      console.log(this.props)
      const { posts } = this.props
      const postsList = posts.length > 0 ? (
          posts.map(post => {
              return(
                  <div className="posts card" key={post.id}>
                    <div className="card-content">
                        <Link to={'/posts/' + post.id}>
                            <span className="card-title">{post.title}</span>
                        </Link>
                        <p>{post.content}</p>
                    </div>
                  </div>
              )
          })
      ) : (
          <div className="center">No Posts as yet </div>
          
      )

    return (
      <div className="container">
        <h4 className="center">Home Page</h4>
        <img src={BlogSelected} alt="react image setup"/>
            {postsList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);
