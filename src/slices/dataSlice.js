import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSuperHeroes } from "../api";

const initialState = {
    superheroes: [],
}

export const fetchSuperHeroes = createAsyncThunk(
    'data/fetchSuperHeroes',
    async(_, { dispatch }) => {
        const heroesResponse = await getSuperHeroes()
        dispatch(setSuperHeroes(heroesResponse))
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setSuperHeroes: (state, action) => {
            state.superheroes = action.payload
        } ,
    }
})

export const { setSuperHeroes } = dataSlice.actions

export default dataSlice.reducer