import { useState } from 'react'
import './App.css'
import Generator from './components/Generator'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="section">

        <div className="page-name">Snippetify</div>
        <div className="text-container">
          {/* <div className="heading">Create Stunning Code Images </div> */}
          <div className="desc">Instantly generate beautiful code snippets and download them as high-quality Images.</div>
        </div>
        <Generator />
        <Footer />
      </div>
    </>
  )
}

export default App
