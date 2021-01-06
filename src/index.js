import React from 'react'
import ReactDOM from 'react-dom'
import './css/dist/bootstrap.min.css'
import './css/dist/bootstrap-social.css'
import './css/dist/styles.min.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.render(<BrowserRouter><ScrollToTop /><App /></BrowserRouter>, document.getElementById('root'));
