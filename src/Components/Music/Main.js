import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { IoMdRepeat } from 'react-icons/io'
import { BiShuffle } from 'react-icons/bi'
import { FaPlay, FaPause } from 'react-icons/fa'
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'
import { useSelector, useDispatch } from 'react-redux'
// IoRepeat
// BiShuffle
// FaPlay
// FaPause
// CgPlayTrackNext
// CgPlayTrackPrev
const Main = () => {
  const { musicList } = useSelector((store) => store.effectSlice)
  const [musicDetails, setMusicDetails] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getSongDetails = musicList.find((value) => value.id === +id)
    setMusicDetails(getSongDetails)
  }, [id])

  const { title, artists } = musicDetails
  return (
    <Wrapper>
      <div className='main-music-section'>
        <h2>{title}</h2>
        <p>{artists}</p>
        <div className='range-container'>
          <input type='range' />
          <div className='time-stamp'>
            <p>0:00</p>
            <p>3:24</p>
          </div>
        </div>
        <div className='music-controls'>
          <IoMdRepeat />
          <div className='navigation-controls'>
            <CgPlayTrackPrev />
            <div className='toggle-play'>
              <FaPause />
            </div>
            <CgPlayTrackNext />
          </div>
          <BiShuffle />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .main-music-section {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  p {
    margin-top: 0.2rem;
    opacity: 0.8;
  }

  .range-container {
    margin-top: 1rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 100%;
    cursor: pointer;
  }

  .time-stamp {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .time-stamp p {
    margin-top: 0.3rem;
    font-size: 0.8em;
  }
  .music-controls {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: -1rem;
    font-size: 1.3em;
    cursor: pointer;
  }

  .navigation-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
  }

  .toggle-play {
    width: 50px;
    height: 50px;
    display: grid;
    place-content: center;
    border-radius: 50%;
    background: var(--btn-color);
    font-size: 0.8em;
    cursor: pointer;

    margin: 2rem;
  }
`

export default Main
