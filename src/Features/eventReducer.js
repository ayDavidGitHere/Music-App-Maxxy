import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toNextPage: false,
}

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {
    moveToMainPage: (state) => {
      state.toNextPage = true
    },
  },
})

export const { moveToMainPage } = eventSlice.actions
export default eventSlice.reducer
