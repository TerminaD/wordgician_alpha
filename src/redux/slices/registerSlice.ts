import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store'

// Define a type for the slice state
export interface RegisterState {
  isRegistered: boolean
  userName: string
  uuid: string
  passcodeHash: string
}

// Define the initial state using that type
const initialState: RegisterState = {
  isRegistered: false,
  userName: '',
  uuid: '',
  passcodeHash: '',
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerAccount: (state) => {
      state.isRegistered = true
    },

    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    },

    setUUID: (state) => {
      var result: string = ''
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (var i: number = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * 10))
      }
      state.uuid = result
    },

    hashPasscode: (state, action: PayloadAction<string>) => {


    clearAll: (state) => {
      state.isRegistered = false
      state.userName = ''
      state.uuid = ''
    },
  },
})

export const { registerAccount, setUserName, setUUID, clearAll } = registerSlice.actions

// Export functions for useSelector hook
export const getRegisterStatus = (state: RootState) => state.register.isRegistered
export const getUserName = (state: RootState) => state.register.userName
export const getUUID = (state: RootState) => state.register.uuid

export default registerSlice.reducer
