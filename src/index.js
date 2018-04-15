import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Nav />
  </BrowserRouter>,
  document.getElementById('root')
)
