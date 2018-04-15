import React from 'react'
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter
} from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Contact from './Contact'
import Post from './Post'
import './index.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Nav extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route
          render={({location}) => {
            const currentKey = location.pathname.split('/')[1] || '/'
            const timeout = { enter: 1000, exit: 500 }
            // Checking if this is the modal location
            const isModal = location.state && location.state.modal
            // We need to make sure that modal location match the blog path
            const modalLocation = {
              pathname: '/blog',
              search: '',
              hash: '',
              state: undefined,
              key: location.key
            }
            // Manually setting the location for the modal
            // if isModal is true otherwise use router location
            const setLocation = isModal ? modalLocation : location
            return (
              <div>
                <header>
                  <h1>React Router Advanced Use</h1>
                  <ul className='header'>
                    <li><NavLink exact to='/'>Home</NavLink> </li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                  </ul>
                </header>
                <TransitionGroup
                  className='content'
                >
                  <CSSTransition
                    key={currentKey}
                    timeout={timeout}
                    classNames='fadeIn'
                  >
                    <Switch location={setLocation}>
                      <Route path='/contact' component={Contact} />
                      <Route path='/blog' component={Blog} />
                      <Route exact path='/' component={Home} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                {/* We are showing the modal outside the main container
                so we can position it on top of it */}
                <Route path='/blog/:postSlug' component={Post} />
              </div>
            )
          }}
        />
      </BrowserRouter>

    )
  }
}

export default Nav
