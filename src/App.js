import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './News'
import {Route, Routes, Link, BrowserRouter } from 'react-router-dom'


export default class App extends Component {
  api_key = process.env.REACT_APP_NEWS_api
  render() {
    return (
      <div>
        <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            {/* <Route path='/general' element={<News api_key={this.api_key} category="general" />} /> */}
            <Route exact path='/' element={<News key= "general" api_key={this.api_key} category="general" />} />
            <Route exact path='/business' element={<News key= "business" api_key={this.api_key} category="business" />} />
            <Route exact path='/entertainment' element={<News key= "entertainment" api_key={this.api_key} category="entertainment" />} />
            <Route exact path='/general' element={<News key= "general" api_key={this.api_key} category="general" />} />
            <Route exact path='/health' element={<News key= "health" api_key={this.api_key} category="health" />} />
            <Route exact path='/science' element={<News key= "science" api_key={this.api_key} category="science" />} />
            <Route exact path='/sports' element={<News key= "sports" api_key={this.api_key} category="sports" />} />
            <Route exact path='/technology' element={<News key= "technology" api_key={this.api_key} category="technology" />} />
          </Routes>
          {/* <News country="us" /> */}
          </>
        </BrowserRouter>

      </div>
    )
  }
}

