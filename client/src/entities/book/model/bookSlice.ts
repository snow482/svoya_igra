import { createSlice } from "@reduxjs/toolkit";
import { BookList } from "./index";
import { loadBooks, createBook, deleteBook, updateBook } from "./bookThunk";

interface BookState {
  books: BookList;
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // INIT_BOOKS
      .addCase(loadBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loadBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })

      .addCase(loadBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // ADD_BOOK
      .addCase(createBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // DELETE_BOOK
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books = state.books.filter((book) => book.id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      // UPDATE_BOOK
      .addCase(updateBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBook = action.payload;
        state.books = state.books.map((book) =>
          book.id === updatedBook.id ? updatedBook : book
        );
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default bookSlice.reducer;
