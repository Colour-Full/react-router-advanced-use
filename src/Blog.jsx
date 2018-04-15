import React, { Component } from 'react'
import posts from './posts'
import { Link } from 'react-router-dom'

class Blog extends Component {
    listPostsByTitle = () => {
      return posts.map(function (post) {
        return (
          <li key={post.id}>
            <h2><Link to={{
              pathname: `/blog/${post.slug}`,
              // this is where we are telling React Router that this is a modal
              state: { modal: true }
            }}>{post.title}</Link></h2>
          </li>
        )
      })
    }
    render () {
      return (
        <div>
          {this.listPostsByTitle()}
        </div>
      )
    }
}

export default Blog
