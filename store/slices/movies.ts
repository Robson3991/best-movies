import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../instance';
import { MovieT } from 'types';

type MoviesState = {
  data: MovieT[] | [];
};

const inistialState: MoviesState = {
  data: [],
};

const moviesSlice = createSlice({
  name: 'moviesData',
  initialState: inistialState,
  reducers: {
    moviesDataChange: (state, action: PayloadAction<MovieT[]>) => {
      state.data = action.payload;
    },
  },
});

export const { moviesDataChange } = moviesSlice.actions;
export const selectmovies = (state: RootState) => state.movies;

export default moviesSlice.reducer;
