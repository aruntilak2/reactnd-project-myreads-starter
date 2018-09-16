import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import SearchPage from './components/searchpage'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
