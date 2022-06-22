import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSearching: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    onSearch: (state, action) => {
      state.isSearching = true;
    },
  },
});

export const { onSearch } = searchSlice.actions;
export default searchSlice.reducer;
