import React from 'react'
import List from './RecentlyPlayedList'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const RecentlyPlayed = () => {
  const { recentlyPlayed } = useSelector((store) => store.effectSlice)
  return (
    <Wrapper>
      <div className='recently-played'>
        <div className='play-details'>
          <h3>Recently Played</h3>
          <p>See all</p>
        </div>
        <div className='recent-container'>
          {recentlyPlayed ? (
            <button type='button'>✨Explore World</button>
          ) : (
            <div>item list</div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .recently-played {
    width: 100%;
    height: auto;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
  }

  .play-details {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--white-color);
  }

  p {
    opacity: 0.8;
    cursor: pointer;
    user-select: none;
  }

  .recent-container {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background: rgb(180, 113, 226);
    background: linear-gradient(
      90deg,
      rgba(180, 113, 226, 1) 0%,
      rgba(128, 193, 213, 1) 61%
    );
    width: 50%;
    height: 50px;
    border: none;
    cursor: pointer;
    font-family: 'Audiowide', cursive;
    border-radius: 5px;
  }
`

export default RecentlyPlayed
