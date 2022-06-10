import React from 'react'
import styled from 'styled-components'
import { FaPlay, FaPause } from 'react-icons/fa'
import { Routes, Route, Link } from 'react-router-dom'

const RecommendList = ({ image, id, artists, title }) => {
  return (
    <Wrapper>
      <div className='recommend-list'>
        <Link to={`/music/${id}`}>
          <img src={image} alt={title} />
        </Link>
        <div className='details'>
          <div className='texts-container'>
            <h5>{title}</h5>
            <p className='p-text'>{artists}</p>
          </div>
          <FaPlay className='icon' />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .recommend-list {
    height: 300px;
    width: 270px;
    background: var(--highlight);
    border-radius: 10px;
    margin-right: 1rem;
    padding: 1.5rem;
  }

  a > img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

    // box-shadow: 3px 3px 5px #6b6b78;
  }

  .details {
    height: 30%;
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .texts-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .p-text {
    font-size: 0.8em;
    margin-top: 0.3rem;
  }

  .icon {
    cursor: pointer;
  }
`

export default RecommendList
