import { createSlice } from "@reduxjs/toolkit";
import { UserWithoutPasswordType, UserUpdateType} from ".";
import { refreshAccessToken, registration, authorization, logout, userPointsUpdate } from "./userThunk";

// Определяем тип состояния для хранилища пользователя
type UserState = {
  user: UserWithoutPasswordType | UserUpdateType | null;
  error: string | null;
  loading: boolean;
};

// Устанавливаем начальное состояние
const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

// Создаем слайс для управления состоянием пользователя
const userSlice = createSlice({
  name: "user", // Имя слайса для генерации типов действий
  initialState, // Начальное состояние
  reducers: {}, // Здесь можно определить синхронные редьюсеры
  extraReducers: (builder) => {
    // Добавляем обработчики для асинхронных действий
    builder
      // Обработка обновления токена доступа
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true; // Устанавливаем состояние загрузки в true
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.loading = false; // Устанавливаем состояние загрузки в false
        state.user = action.payload.user; // Обновляем пользователя
        state.error = null; // Очищаем ошибку
      })
      .addCase(refreshAccessToken.rejected, (state) => {
        state.loading = false; // Устанавливаем состояние загрузки в false
        // Здесь можно добавить дополнительную логику обработки ошибки
      })

      // Аналогичные обработчики для авторизации, регистрации и выхода
      .addCase(authorization.pending, (state) => {
        state.loading = true;
      })
      .addCase(authorization.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(authorization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Authorization fail"; // Используем сообщение ошибки или стандартное сообщение
      })

      .addCase(registration.pending, (state) => {
        state.loading = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(registration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Registration fail";
      })

      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null; // Очищаем пользователя после выхода
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Logout fail";
      })
      
      .addCase(userPointsUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(userPointsUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Очищаем пользователя после выхода
        state.error = null;
      })
      .addCase(userPointsUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Points update fail;";
      });
  },
});

// Экспортируем редьюсер для использования в store
export default userSlice.reducer;
