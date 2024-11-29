// Импортируем функцию createAsyncThunk из reduxjs/toolkit для создания асинхронных thunk-функций
import { createAsyncThunk } from "@reduxjs/toolkit";

// Импортируем тип AxiosError из axios для обработки ошибок API
import { AxiosError } from "axios";

// Импортируем тип AuthResponse из локального индекса
import { Question } from ".";

// Импортируем класс UserService из папки api для работы с API
import { BookService } from "../api";

// Определяем тип RejectValue для значения rejectWithValue
type RejectValue = {
  message: string;
};

// Создаем перечисление с префиксом типов для уникальных имен действий
enum BOOK_THUNK_TYPES_PREFIX {
  INIT_BOOKS = "book/loadbooks",
  ADD_BOOK = "book/create",
  UPDATE_BOOK = "book/update",
  DELETE_BOOK = "book/delete",
}

export const loadBooks = createAsyncThunk<
  BookList,
  void,
  { rejectValue: RejectValue }
>(BOOK_THUNK_TYPES_PREFIX.INIT_BOOKS, async (_, { rejectWithValue }) => {
  try {
    // Пытаемся выполнить запрос к API для обновления токена
    return await BookService.getAllBooks();
  } catch (error) {
    // Обрабатываем ошибку, приводя ее к типу AxiosError
    const err = error as AxiosError<{ message: string }>;

    // Возвращаем значение rejectWithValue с сообщением об ошибке
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const createBook = createAsyncThunk<
  Book,
  BookCreate,
  { rejectValue: RejectValue }
>(
  BOOK_THUNK_TYPES_PREFIX.ADD_BOOK,
  async ({ title, author, pages, category_id }, { rejectWithValue }) => {
    try {
      // Пытаемся выполнить запрос к API для обновления токена
      return await BookService.createBook(title, author, pages, category_id);
    } catch (error) {
      // Обрабатываем ошибку, приводя ее к типу AxiosError
      const err = error as AxiosError<{ message: string }>;

      // Возвращаем значение rejectWithValue с сообщением об ошибке
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const updateBook = createAsyncThunk<
  Book,
  BookUpdate,
  { rejectValue: RejectValue }
>(
  BOOK_THUNK_TYPES_PREFIX.UPDATE_BOOK,
  async ({ id, title, author }, { rejectWithValue }) => {
    try {
      // Пытаемся выполнить запрос к API для обновления токена
      return await BookService.updateBook(id, title, author);
    } catch (error) {
      // Обрабатываем ошибку, приводя ее к типу AxiosError
      const err = error as AxiosError<{ message: string }>;

      // Возвращаем значение rejectWithValue с сообщением об ошибке
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const deleteBook = createAsyncThunk<
  number,
  number,
  { rejectValue: RejectValue }
>(BOOK_THUNK_TYPES_PREFIX.DELETE_BOOK, async (id, { rejectWithValue }) => {
  try {
    // Пытаемся выполнить запрос к API для обновления токена
    return await BookService.deleteBook(id);
  } catch (error) {
    // Обрабатываем ошибку, приводя ее к типу AxiosError
    const err = error as AxiosError<{ message: string }>;

    // Возвращаем значение rejectWithValue с сообщением об ошибке
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
