import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    menu: null
}

const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
setMenu() {

}
    }
})

export const {} = menu.actions
export default menu.reducer