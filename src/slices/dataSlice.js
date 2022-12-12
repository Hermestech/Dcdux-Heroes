import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSuperHeroes } from "../api";

const initialState = {
    superheroes: [],
    filteredSuperheroes: [],
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
        setFavorite: (state, action) => {
            const currentHeroIndex = state.superheroes.findIndex( hero => hero.id === action.payload.id)
            if (currentHeroIndex >= 0){
                const isFavorite = state.superheroes[currentHeroIndex].favorite
                state.superheroes[currentHeroIndex].favorite = !isFavorite
            }
        },
        setFilter: (state, action) => {
            const inputValue = action.payload.toLowerCase()
            if (action.payload.length > 1){
                const result = state.superheroes.filter( hero => hero.name.toLowerCase().includes(inputValue))
                state.filteredSuperheroes = result
            }else {
                state.filteredSuperheroes = []
            }
        }
    }
})

export const { setSuperHeroes, setFilter, setFavorite } = dataSlice.actions

export default dataSlice.reducer