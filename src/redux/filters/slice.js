import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '@redux/auth/operations';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { search: '' },
  reducers: {
    changeFilter(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, state => {
      state.search = '';
    });
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
