// Импортируем редьюсер для пользователя из файла user.ts
import userReducer from "@/entities/user/model/userSlice";
import questionReducer from "@/entities/question/model/questionSlice"
// Импортируем функцию configureStore из Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Создаем хранилище с помощью configureStore
// В параметрах передаем объект конфигурации
// Внутри этого объекта определяем редьюсер для пользователя

// Редьюсер - это функция, которая принимает действие и текущее состояние,
// и возвращает новое состояние после обработки действия
const store = configureStore({
  reducer: {
    user: userReducer,
    questions: questionReducer,
  },
});

// Определяем тип состояния всего хранилища
// Используем typeof для получения типа getState функции хранилища
export type RootState = ReturnType<typeof store.getState>;

// Определяем тип диспатча для отправки действий
export type AppDispatch = typeof store.dispatch;

// Экспортируем созданное хранилище как дефолтный экспорт
// Теперь мы можем использовать это хранилище во всем приложении
export default store;
