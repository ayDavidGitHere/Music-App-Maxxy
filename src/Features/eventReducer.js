import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isPlaying: false,
}

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {
    playMusic: (state, action) => {
      console.log('true')
      alert('true')
    },
  },
})

export const { playMusic } = eventSlice.actions
export default eventSlice.reducer
