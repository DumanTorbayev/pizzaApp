import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {IMenu} from '../../types/menu'

interface IInitialState {
  menuList: IMenu[]
  isLoading: boolean
  error: null | string
}

const initialState: IInitialState = {
  menuList: [],
  isLoading: false,
  error: null,
}

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu(state) {
      state.isLoading = true
    },
    setMenuSuccess(state, action: PayloadAction<IMenu[]>) {
      state.isLoading = false
      state.menuList = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {setMenu, setMenuSuccess, setError} = menu.actions
export default menu.reducer
