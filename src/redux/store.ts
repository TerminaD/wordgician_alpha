import { configureStore } from '@reduxjs/toolkit';

// This file lists all variables in Redux's store

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
})

// Export types for the root state and the dispatch hook
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
