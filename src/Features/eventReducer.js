import { createSlice } from '@reduxjs/toolkit'
import { useLocation } from 'react-router-dom'

const initialState = {
  toNextPage: true,
  currentSong: '',
  songIsPlaying: false,
}

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {
    moveToMainPage: (state) => {
      state.toNextPage = true
    },
    // playSong: (state, action) => {
    //   state.currentSong = action.payload
    //   state.songIsPlaying = true
    //   let audio = new Audio(state.currentSong)

    //   if (state.songIsPlaying) {
    //     audio.play()
    //   }
    //   audio.setAttribute('id', action.payload)
    // },
    // pauseSong: (state, action) => {
    //   state.currentSong = action.payload
    //   state.songIsPlaying = false
    //   let audio = new Audio(state.currentSong)
    //   audio.setAttribute('id', action.payload)
    //   let allAudio = document.querySelector('audio')
    //   // allAudio.forEach((value) => {
    //   //   console.log(value)
    //   // })
    //   console.log(allAudio)
    // },
    togglePlay: (state, action) => {
      state.songIsPlaying = !state.songIsPlaying
    },
    setSong: (state, action) => {
      state.currentSong = action.payload
    },
  },
})

export const { moveToMainPage, setSong, togglePlay } = eventSlice.actions
export default eventSlice.reducer
