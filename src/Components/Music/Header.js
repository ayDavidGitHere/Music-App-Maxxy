import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiChevronLeft } from 'react-icons/bi'
import { TbDotsVertical } from 'react-icons/tb'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  const { musicList } = useSelector((store) => store.effectSlice)
  const [musicItem, setMusicItem] = useState([])
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const getSongDetails = musicList.find((value) => value.id === +id)
    setMusicItem(getSongDetails)
  }, [id])

  const { image, title } = musicItem

  return (
    <Wrapper>
      <div className='music-header'>
        <div className='header-details'>
          <Link to='/'>
            <BiChevronLeft className='icon' />
          </Link>
          <h3>Song</h3>
          <TbDotsVertical className='icon' />
        </div>
        <div className='image-container'>
          <img src={image} alt={title} />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .music-header {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  .header-details {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: var(--white-color);
  }

  a > .icon {
    font-size: 1.5em;
    cursor: pointer;
    user-select: none;
  }

  .icon {
    font-size: 1.5em;
    cursor: pointer;
    user-select: none;
  }

  .image-container {
    margin-top: 3rem;
    width: 80%;
  }

  img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    object-fit: cover;
  }
`

export default Header
