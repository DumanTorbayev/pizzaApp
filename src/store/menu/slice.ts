import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {MenuTypes} from '../../types/menu'

interface initialStateTypes {
  menuList: null | MenuTypes[]
  isLoading: boolean
  error: null | string
}

const initialState: initialStateTypes = {
  menuList: null,
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
    setMenuSuccess(state, action: PayloadAction<MenuTypes[]>) {
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
