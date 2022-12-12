import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    valueInputSearch: '',
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setValueInputSearch: (state, action) => {
            state.valueInputSearch = action.payload
        }
    }
})

export const { setLoading, setValueInputSearch } = uiSlice.actions

export default uiSlice.reducer