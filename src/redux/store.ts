import { configureStore } from '@reduxjs/toolkit';

// This file lists all variables in Redux's store

const store = configureStore({
	reducer: {}
})

export default store

// Export types for the root state and the dispatch hook
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;