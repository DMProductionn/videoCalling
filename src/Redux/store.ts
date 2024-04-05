import { configureStore } from '@reduxjs/toolkit'
import dateChat from './Slices/dateChat.slice'
import connectedDevices from './Slices/checkConnectedDevices.slice'

export const store = configureStore({
  reducer: {
    dateChat,
    connectedDevices
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch