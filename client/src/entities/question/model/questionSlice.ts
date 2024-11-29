import { createSlice } from "@reduxjs/toolkit";
import { QuestionList } from "./index";
import { loadQuestions } from "./questionThunk";

interface QuestionState {
  questions: QuestionList;
  error: string | null;
  loading: boolean;
}

const initialState: QuestionState = {
  questions: [],
  error: null,
  loading: false,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadQuestions.pending, (state) => {
        state.loading = true;
      })

      .addCase(loadQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
        state.error = null;
      })

      .addCase(loadQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default questionSlice.reducer;
