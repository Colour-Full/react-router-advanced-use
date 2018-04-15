import React, { Component } from 'react'
import posts from './posts'
import { CSSTransition } from 'react-transition-group'
class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      in: false
    }
  }
  componentDidMount () {
    // Note the arrow function here, this will help us to keep the scope of `this` relative to the react component
    // If you try using a normal function you will get an error saying that `this` is undefined
    posts.forEach((post) => {
      if (post.slug === this.props.match.params.postSlug) {
        this.setState({
          title: post.title,
          body: post.body,
          in: true
        })
      }
    })
  }

  goBack = e => {
    console.log(e)
    e.stopPropagation()
    this.setState({
      in: false
    })
    setTimeout(() => this.props.history.goBack(), 500)
  }

  render () {
    return (
      <div className='post-container' onClick={this.goBack}>
        <CSSTransition
          key={this.props.location.pathname}
          in={this.state.in}
          classNames='postFadeIn'
          timeout={1000}
        >
          <div className='post'>
            <h1>{this.state.title}</h1>
            <p>{this.state.body}</p>
            <h2><button className='post-back-button' onClick={this.goBack}>Back To Blog</button></h2>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default Post
