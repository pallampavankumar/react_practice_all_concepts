import React from 'react'
import {Routes,Route} from 'react-router-dom'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
function PageNavigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageOne/>}></Route>
        <Route path="/pagetwo" element={<PageTwo/>}></Route>
      </Routes>
    </div>
  )
}

export default PageNavigation
