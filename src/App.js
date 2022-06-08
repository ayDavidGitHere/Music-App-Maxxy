import React from 'react'
import { FirstPage } from './Pages'
import { Routes, Route, Link } from 'react-router-dom'
const App = () => {
  return (
    <>
      <main className='main-app'>
        <FirstPage />
        {/* <audio controls>
        <source src='https://connectloaded.com/tag/doja-cat/' />
      </audio> */}
      </main>
      <div className='not-availabe'>
        <h3>Opps!</h3>
        <p>Sorry, This is only available on small screen</p>
      </div>
    </>
  )
}

export default App
