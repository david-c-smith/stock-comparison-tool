import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '.'

// Use throughout the app instead of regular `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector