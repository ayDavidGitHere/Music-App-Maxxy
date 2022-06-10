import React from 'react'
import styled from 'styled-components'
import { BiChevronLeft } from 'react-icons/bi'
import { DojaStars } from '../../Assets'
import { FaPlay, FaPause } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// BiChevronLeft

const Header = () => {
  return (
    <Wrapper>
      <div className='header-section'>
        <div className='header-img-container'>
          <Link to='/'>
            <div className='icon'>
              <BiChevronLeft />
            </div>
          </Link>

          <div className='image-container'>
            <img src={DojaStars} alt='' />
          </div>
        </div>
        <div className='song-details'>
          <div className='details'>
            <p>Artist</p>
            <h3>Song</h3>
            <p className='melody'>Enjoy the melody</p>
          </div>
          <div className='song-icon'>
            <FaPlay />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .header-section {
    width: 100%;
    height: 300px;
    padding: 2rem;
    // background: rgba(255, 255, 255, 0.15);
    // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    // backdrop-filter: blur(20px);
    // -webkit-backdrop-filter: blur(20px);
    // background-image: url(${DojaStars});
    background: var(--highlight);
  }

  .header-img-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
  }

  .image-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  a > .icon {
    font-size: 2em;
    color: var(--white-color);
    cursor: pointer;
  }

  img {
    width: 50%;
    height: 100%;
    border-radius: 10px;
    background: black;
    margin-top: -2rem;
  }

  .song-details {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  p {
    opacity: 0.8;
  }

  h3 {
    margin-top: 0.1rem;
    font-size: 2em;
  }

  .melody {
    font-size: 0.8em;
    margin-top: 0.5rem;
  }

  .song-icon {
    background: var(--btn-color);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    cursor: pointer;
  }
`

export default Header

// background: rgba(255, 255, 255, 0.25);
//     box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//     backdrop-filter: blur(4.5px);
//     -webkit-backdrop-filter: blur(4.5px);
//     border-radius: 10px;
//     border: 1px solid rgba(255, 255, 255, 0.18);
