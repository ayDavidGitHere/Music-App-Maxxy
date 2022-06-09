import React, { useEffect } from 'react'
import { Howl, Howler } from 'howler'
// const { Howl, Howler } = require('howler')
import styled from 'styled-components'
import { BgStars, Astro, Moon } from '../Assets'
import { TbRocket } from 'react-icons/tb'
import { HiArrowRight } from 'react-icons/hi'
import { musicData } from '../Data/data'
import { Routes, Route, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { playMusic } from '../Features/eventReducer'
// HiArrowRight
// TbRocket

const FirstPage = () => {
  const dispatch = useDispatch()

  return (
    <Wrapper className='main-first-page'>
      <div className='first-page-section'>
        <img src={Astro} alt='Astronaunt' className='img-man' />
        <audio>
          <source src='https://www.computerhope.com/jargon/m/example.mp3' />
        </audio>
        <div className='first-page-details'>
          <span>
            <p>Hi,✨</p>
          </span>
          <span>
            <p>Welcome to</p>
          </span>
          <span>
            <h3>DOJA WORLD </h3>
          </span>
        </div>
        <div className='nav-container'>
          <HiArrowRight />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .first-page-section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Audiowide', cursive;
    // background: var(--bg-main);
    color: var(--white-color);
    padding: 2rem;
  }

  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
  }

  .img-man {
    height: 100px;
    width: 200px;
    object-fit: cover;
    position: relative;
    animation-name: astro;
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes astro {
    0% {
      transform: translateY(-50px);
      transform: translateX(-30px);
    }
    100% {
      transform: translateY(10px);
      transform: translateX(0);
    }
  }

  .first-page-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
  }

  span {
    margin: 0.3rem;
    font-size: 1.4em;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
  }

  p {
    opacity: 0.8;
  }

  h3 {
    font-size: 1.5em;
  }

  .rocket {
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav-container {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    background: rgb(180, 113, 226);
    background: linear-gradient(
      90deg,
      rgba(180, 113, 226, 1) 0%,
      rgba(128, 193, 213, 1) 61%
    );
    font-size: 1.3em;
    cursor: pointer;
    margin-bottom: 2rem;
  }
`

export default FirstPage
