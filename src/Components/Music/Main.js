import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { IoMdRepeat, IoIosArrowUp } from 'react-icons/io'
import { BiShuffle } from 'react-icons/bi'
import { FaPlay, FaPause, FaSnowflake } from 'react-icons/fa'
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'
import { useSelector, useDispatch } from 'react-redux'
import { togglePlay, setSong, setAudio } from '../../Features/eventReducer'
// IoRepeat
// BiShuffle
// FaPlay
// FaPause
// CgPlayTrackNext
// CgPlayTrackPrev
// IoIosArrowUp
const Main = () => {
  const { musicList } = useSelector((store) => store.effectSlice)
  const { songIsPlaying, currentSong, currentAudio } = useSelector(
    (store) => store.eventSlice
  )

  const [musicDetails, setMusicDetails] = useState([])
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const getSongDetails = musicList.find((value) => value.id === +id)
    setMusicDetails(getSongDetails)
  }, [id])

  const { title, artists, songUrl } = musicDetails

  useEffect(() => {
    dispatch(setSong(songUrl))
  }, [id, songUrl])

  const [music, setMusic] = useState(0)
  // var audio = new Audio(songUrl)
  const playSong = () => { 
    alert("songIsPlaying: "+songIsPlaying); alert(currentAudio);
    /*if (songIsPlaying && currentAudio != '') {
      alert("song is playing");
      currentAudio.pause()
    }
    setAudio(currentSong);
    currentAudio.play();*/
    setAudio(currentSong);
    alert(currentAudio);
  }

  useEffect(() => {
    playSong()
    // const audio = new Audio(songUrl)
    // let pause = audio.pause()
    // if (songIsPlaying) {
    //   setMusic(music + 1)
    //   if (music === 0) {
    //     audio.play()
    //   }
    // }

    // if (!songIsPlaying) {
    //   if (pause !== undefined) {
    //     pause.then(() => {
    //       audio.pause()
    //     })
    //   }
    // }
    // if (songIsPlaying) {
    //   audio.play()
    //   // if (promiseAudio !== undefined) {
    //   //   promiseAudio
    //   //     .then(() => {
    //   //       audio.play()
    //   //     })
    //   //     .catch(() => {
    //   //       console.log('error')
    //   //     })
    //   // }
    // } else {
    //   audio.pause()
    //   console.log('pause')
    // }
  }, [songIsPlaying])

  return (
    <Wrapper>
      <div className='main-music-section'>
        <h2>{title}</h2>
        <p>{artists}</p>
        <div className='range-container'>
          <input type='range' defaultValue='0' />
          <div className='time-stamp'>
            <p>0:00</p>
            <p>3:24</p>
          </div>
        </div>
        <div className='music-controls'>
          <IoMdRepeat />
          <div className='navigation-controls'>
            <CgPlayTrackPrev />
            <div className='toggle-play' onClick={() => dispatch(togglePlay())}>
              {songIsPlaying ? <FaPause /> : <FaPlay />}
            </div>
            <CgPlayTrackNext />
          </div>
          <BiShuffle />
        </div>
        <div className='music-footer'>
          <IoIosArrowUp />
          <p>Songs</p>
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

  .music-footer {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default Main
