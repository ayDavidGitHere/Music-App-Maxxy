import React from 'react'
import styled from 'styled-components'
import { Header, Main } from '../Components/Music'

const Music = () => {
  return (
    <Wrapper>
      <div className='music-section'>
        <Header />
        <Main />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .music-section {
    display: flex;
    flex-direction: column;
    background: var(--page-bg);
    color: var(--white-color);
    width: 100%;
    min-height: 100vh;
    padding: 1.5rem;
    position: absolute;
    z-index: 200;
    top: 0;
    padding-bottom: 5rem;
  }
`

export default Music
