import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UiState {
  searchQuery: string
  isMenuOpen: boolean
  currentPage: number
  itemsPerPage: number
}

const initialState: UiState = {
  searchQuery: "",
  isMenuOpen: false,
  currentPage: 1,
  itemsPerPage: 15,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
    },
  },
})

export const { setSearchQuery, toggleMenu, setCurrentPage, setItemsPerPage } = uiSlice.actions
export default uiSlice.reducer
