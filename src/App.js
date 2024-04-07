import React, { Component,useState } from 'react'
import Navbar from './Navbar'
import News from './News'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  let api_key = process.env.REACT_APP_NEWS_api

  const [progress,setProgress] = useState(0);

  const handleSetProgress = (e) => {
    setProgress(e);
  }
    return (
      <div>
        <BrowserRouter>
          <>
            <LoadingBar color= '#f11946' progress={progress} onLoaderFinished={() => handleSetProgress(0)}/>
            <Navbar />
            <Routes>
              {/* <Route path='/general' element={<News api_key={api_key} category="general" />} /> */}
              <Route exact path='/' element={<News setProgress={handleSetProgress} key="general" api_key={api_key} category="general" />} />
              <Route exact path='/business' element={<News setProgress={handleSetProgress} key="business" api_key={api_key} category="business" />} />
              <Route exact path='/entertainment' element={<News setProgress={handleSetProgress} key="entertainment" api_key={api_key} category="entertainment" />} />
              <Route exact path='/general' element={<News setProgress={handleSetProgress} key="general" api_key={api_key} category="general" />} />
              <Route exact path='/health' element={<News setProgress={handleSetProgress} key="health" api_key={api_key} category="health" />} />
              <Route exact path='/science' element={<News setProgress={handleSetProgress} key="science" api_key={api_key} category="science" />} />
              <Route exact path='/sports' element={<News setProgress={handleSetProgress} key="sports" api_key={api_key} category="sports" />} />
              <Route exact path='/technology' element={<News setProgress={handleSetProgress} key="technology" api_key={api_key} category="technology" />} />
            </Routes>
            {/* <News country="us" /> */}
          </>
        </BrowserRouter>

      </div>
    )
}

export default App;
