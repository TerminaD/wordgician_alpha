import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store'

// Define a type for the slice state
interface RegisterState {
  isRegistered: boolean
  referencer: string
}

// Define the initial state using that type
const initialState: RegisterState = {
  isRegistered: false,
  referencer: '',
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    changeRegisterStatus: (state, action: PayloadAction<boolean>) => {
      state.isRegistered = action.payload
    },
    switchRegisterStatus: (state) => {
      state.isRegistered = !state.isRegistered
    },
    setReferencer: (state, action: PayloadAction<string>) => {
      state.referencer = action.payload
    },
  },
})

export const { changeRegisterStatus, switchRegisterStatus, setReferencer } =
  registerSlice.actions

// Export functions for useSelector hook
export const getRegisterStatus = (state: RootState) => state.register.isRegistered
export const getReferencer = (state: RootState) => state.register.referencer

export default registerSlice.reducer
