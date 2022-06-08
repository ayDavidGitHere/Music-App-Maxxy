import React from 'react'
import styled from 'styled-components'
import { BgStars } from '../Assets'

const FirstPage = () => {
  return (
    <Wrapper>
      {/* <img src='../Assets/DOJA FIRST.jpg' alt="" /> */}
      <div className='first-page-section'>
        <img src={BgStars} alt='' />
        <h3>Doja World</h3>
        {/* <div className='image-bg'></div> */}
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
    font-family: 'Audiowide', cursive;
    background: var(--bg-main);
    color: var(--white-color);
    padding: 2rem;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  //   .image-bg {
  //     background: url(${BgStars});
  //   }
`

export default FirstPage
