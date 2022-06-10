import React from 'react'
import styled from 'styled-components'
import { TbDotsVertical } from 'react-icons/tb'
// TbDotsVertical
const SongList = ({ image, artists, title, id }) => {
  return (
    <Wrapper>
      <div className='song-list'>
        <div className='image-desc'>
          <img src={image} alt={title} />
          <div className='song-desc'>
            <h4>{title}</h4>
            <p>{artists}</p>
          </div>
        </div>
        <TbDotsVertical className='icon' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .song-list {
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .image-desc {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;

    align-items: center;
  }

  img {
    width: 70px;
    height: 100%;
    border-radius: 10px;
  }

  .song-desc {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 2rem;
  }

  p {
    opacity: 0.8;
    font-size: 0.8em;
  }

  .icon {
    cursor: pointer;
    user-select: none;
  }
`

export default SongList
