import { configureStore } from '@reduxjs/toolkit'
import eventReducer from '../Features/eventReducer'
import effectReducer from '../Features/effectReducer'
export const store = configureStore({
  reducer: {
    eventSlice: eventReducer,
    effectSlice: effectReducer,
  },
})
