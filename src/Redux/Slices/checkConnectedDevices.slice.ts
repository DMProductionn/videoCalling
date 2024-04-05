import { PayloadAction, createSlice } from '@reduxjs/toolkit'


interface IConnectedDevices {
  connectedMicrophone: MediaStream | null,
  mediaStream: MediaStream | null
}


const initialState: IConnectedDevices = {
  connectedMicrophone: null,
  mediaStream: null
}

export const connectedDevices = createSlice({
  name: 'connectedDevices',
  initialState,
  reducers: {
    addMicrophone: (state, action: PayloadAction<null | MediaStream>) => {
      state.connectedMicrophone = action.payload
    },
    addMediaStream: (state, action: PayloadAction<null | MediaStream>) => {
      state.mediaStream = action.payload
    },
  },
})

export const { addMediaStream, addMicrophone } = connectedDevices.actions

export default connectedDevices.reducer