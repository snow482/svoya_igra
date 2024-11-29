import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { QuestionList } from ".";
import { QuestionService } from "../api";

type RejectValue = {
  message: string;
};

enum QUESTION_THUNK_TYPES_PREFIX {
  INIT = "question/loadquestions",
}

export const loadQuestions = createAsyncThunk<
  QuestionList,
  void,
  { rejectValue: RejectValue }
>(QUESTION_THUNK_TYPES_PREFIX.INIT, async (_, { rejectWithValue }) => {
  try {
    // Пытаемся выполнить запрос к API для обновления токена
    return await QuestionService.getAllQuestions();
  } catch (error) {
    // Обрабатываем ошибку, приводя ее к типу AxiosError
    const err = error as AxiosError<{ message: string }>;

    // Возвращаем значение rejectWithValue с сообщением об ошибке
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
