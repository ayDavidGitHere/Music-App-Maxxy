import React from 'react'
import styled from 'styled-components'
import { Header, Main } from '../Components/Explore'

const Explore = () => {
  return (
    <Wrapper>
      <div className='explore-page'>
        <Header />
        <Main />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .explore-page {
    display: flex;
    flex-direction: column;
    background: var(--page-bg);
    color: var(--white-color);
    width: 100%;
    min-height: 100vh;
    padding-bottom: 8rem;
  }
`

export default Explore
