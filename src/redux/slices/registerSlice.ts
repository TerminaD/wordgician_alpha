import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store'

// Define a type for the slice state
interface registerState {
  isRegistered: boolean
	referencer: string
}

// Define the initial state using that type
const initialState: registerState = {
  isRegistered: false,
	referencer: ''
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
		register: (state) => {
			state.isRegistered = true
		},
		deleteAccount: (state) => {
			state.isRegistered = false
		},
		setReferencer: (state, action: PayloadAction<string>) => {
			state.referencer = action.payload
		}
  }
})

export const { register, deleteAccount, setReferencer } = registerSlice.actions

// Export functions that can be used to access members within the state
export const getRegisterStatus = (state: RootState) => state.register.isRegistered
export const getReferencer = (state: RootState) => state.register.referencer

export default registerSlice.reducer