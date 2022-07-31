import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// This file creates a typed wrapper for the hook useDispatch and useSelector provided by Redux Toolkit

import type { RootState, AppDispatch } from './store'

// Use useTypedDispatch and useTypedSelector in place of their non-typed counterparts
export const useTypedDispatch: () => AppDispatch = useDispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector