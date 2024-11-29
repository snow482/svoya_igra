import { createSlice } from "@reduxjs/toolkit";
import { Question, QuestionList } from "./index";
import { loadQuestions } from "./questionThunk";

interface QuestionState {
  questions: QuestionList;
  loading: boolean;
  error: string | null;
}

const initialState: QuestionState = {
  questions: [],
  loading: false,
  error: null,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loadQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })

      .addCase(loadQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default questionSlice.reducer;
