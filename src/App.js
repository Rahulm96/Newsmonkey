import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './News'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  api_key = process.env.REACT_APP_NEWS_api
  
  state = {
    progress: 0
  }
  
  setProgress = (e)=>{
    this.setState({
      progress: e 
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <>
            <LoadingBar color= '#f11946' progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)}/>
            <Navbar />
            <Routes>
              {/* <Route path='/general' element={<News api_key={this.api_key} category="general" />} /> */}
              <Route exact path='/' element={<News setProgress={this.setProgress} key="general" api_key={this.api_key} category="general" />} />
              <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" api_key={this.api_key} category="business" />} />
              <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" api_key={this.api_key} category="entertainment" />} />
              <Route exact path='/general' element={<News setProgress={this.setProgress} key="general" api_key={this.api_key} category="general" />} />
              <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" api_key={this.api_key} category="health" />} />
              <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" api_key={this.api_key} category="science" />} />
              <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" api_key={this.api_key} category="sports" />} />
              <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" api_key={this.api_key} category="technology" />} />
            </Routes>
            {/* <News country="us" /> */}
          </>
        </BrowserRouter>

      </div>
    )
  }
}

