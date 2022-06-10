import { createSlice } from '@reduxjs/toolkit'
import { musicData } from '../Data/data'

const initialState = {
  musicList: musicData,
  recommendList: [],
  recentlyPlayed: [],
}

const effectSlice = createSlice({
  name: 'effectSlice',
  initialState,
  reducers: {
    getRecommendList: (state) => {
      state.recommendList = state.musicList.filter((value) => value.recommended)
    },
  },
})

export const { getRecommendList } = effectSlice.actions
export default effectSlice.reducer
