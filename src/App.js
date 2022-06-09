import React from 'react'
import { FirstPage, SlidePage } from './Pages'
import { useSelector, useDispatch } from 'react-redux'

import { Routes, Route, Link } from 'react-router-dom'
const App = () => {
  const { toNextPage } = useSelector((store) => store.eventSlice)
  return (
    <React.Fragment>
      <main className='main-app'>
        {!toNextPage ? (
          <FirstPage />
        ) : (
          <section className='main-app-section'>
            <SlidePage />
            <p>go</p>
          </section>
        )}
      </main>
      <div className='not-availabe'>
        <h3>Opps!</h3>
        <p>Sorry, This is only available on small screen</p>
      </div>
    </React.Fragment>
  )
}

export default App
