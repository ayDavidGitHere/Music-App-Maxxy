import React from 'react'
import styled from 'styled-components'
import { BgStars, Astro } from '../Assets'
import { TbRocket } from 'react-icons/tb'
import { HiArrowRight } from 'react-icons/hi'
import { Routes, Route, Link } from 'react-router-dom'
// HiArrowRight
// TbRocket
const FirstPage = () => {
  return (
    <Wrapper>
      {/* <img src='../Assets/DOJA FIRST.jpg' alt="" /> */}
      <div className='first-page-section'>
        <img src={BgStars} alt='stars' className='bg-img' />
        <img src={Astro} alt='Astronaunt' className='img-man' />
        <div className='first-page-details'>
          <span>Hi,</span>
          <span>Welcome to</span>
          <span>
            <h3>Doja World </h3>
            <TbRocket className='rocket' />
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
    background: var(--bg-main);
    color: var(--white-color);
    padding: 2rem;
  }

  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  .img-man {
    height: 100px;
    width: 200px;
    object-fit: cover;
  }

  .first-page-details {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    // background: rgb(180, 113, 226);
    // background: linear-gradient(
    //   90deg,
    //   rgba(180, 113, 226, 1) 0%,
    //   rgba(128, 193, 213, 1) 61%
    // );
  }

  span {
    margin: 0.3rem;
    font-size: 2em;
    display: flex;
    flex-direction: row;
    align-items: center;
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
    user-select: none;
  }
`

export default FirstPage
