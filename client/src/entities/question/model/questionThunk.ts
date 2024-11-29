// Импортируем функцию createAsyncThunk из reduxjs/toolkit для создания асинхронных thunk-функций
import { createAsyncThunk } from "@reduxjs/toolkit";

// Импортируем тип AxiosError из axios для обработки ошибок API
import { AxiosError } from "axios";

// Импортируем тип AuthResponse из локального индекса
import { Question } from ".";

// Импортируем класс UserService из папки api для работы с API
import { QuestionService } from "../api";

// Определяем тип RejectValue для значения rejectWithValue
type RejectValue = {
  message: string;
};

// Создаем перечисление с префиксом типов для уникальных имен действий
enum QUESTION_THUNK_TYPES_PREFIX {
  INIT = "question/loadquestions",
}

export const loadQuestions = createAsyncThunk<
  Question,
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
