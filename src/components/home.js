import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import BlogSelected from '../images/blog_selected.png'

 class Home extends Component {

    state = {
        posts:[]
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts:res.data.slice(0,10)
                })
            })
    }

  render() {
      const { posts } = this.state
      const postsList = posts.length > 0 ? (
          posts.map(post => {
              return(
                  <div className="posts card" key={post.id}>
                    <div className="card-content">
                        <Link to={'/posts/' + post.id}>
                            <span className="card-title">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
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

export default Home;
