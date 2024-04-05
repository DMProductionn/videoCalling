import { PayloadAction, createSlice } from '@reduxjs/toolkit'


type TypeDateChat = {
  theme: string,
  password?: string,
  id: string
}
export interface IChat {
  dateChat: TypeDateChat | null,
  name: string,
  users: string[] | null
}

const initialState: IChat = {
  dateChat: null,
  name: '',
  users: null
}

export const dateChat = createSlice({
  name: 'dateChat',
  initialState,
  reducers: {
    addDateChat: (state, action: PayloadAction<TypeDateChat>) => {
      state.dateChat = action.payload
    },
    addNameChat: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    addConnectedUsers: (state, action: PayloadAction<string[] | null>) => {
      state.users = action.payload
    },
  },
})

export const { addDateChat, addNameChat, addConnectedUsers } = dateChat.actions

export default dateChat.reducer