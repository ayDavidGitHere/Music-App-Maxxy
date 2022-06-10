import React, { useEffect } from 'react'
import {
  FirstPage,
  SlidePage,
  HomePage,
  ExplorePage,
  LikesPage,
  SearchPage,
  NavSection,
  MusicPage,
} from './Pages'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { getRecommendList } from './Features/effectReducer'
const App = () => {
  const { musicList } = useSelector((store) => store.effectSlice)
  const { toNextPage } = useSelector((store) => store.eventSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommendList())
  }, [musicList])
  return (
    <React.Fragment>
      <main className='main-app'>
        {!toNextPage ? (
          <FirstPage />
        ) : (
          <section className='main-app-section'>
            <SlidePage />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/explore' element={<ExplorePage />} />
              <Route path='/likes' element={<LikesPage />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/music/:id' element={<MusicPage />} />
            </Routes>
            <NavSection />
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
