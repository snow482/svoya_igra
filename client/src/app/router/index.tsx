import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { AuthPage, QuestionsPage, HomePage, RegPage, NotFound, QuestionUpdate } from "@/pages";

export enum CLIENT_ROUTES {
    HOME = '/',
    AUTH = '/auth',
    REG = '/registration',
    QUESTIONS = '/questions',
    NOT_FOUND = '*',
    UPDATE = '/questions/:id'
}

export const router = createBrowserRouter([
    {
        path: CLIENT_ROUTES.HOME,
        element: <Layout />,
        children: [
            {
                path: CLIENT_ROUTES.HOME,
                element: <HomePage />,
            },
            {
                path: CLIENT_ROUTES.AUTH,
                element: <AuthPage />
            },
            {
                path: CLIENT_ROUTES.REG,
                element: <RegPage />,
            },
            {
                path: CLIENT_ROUTES.QUESTIONS,
                element: <QuestionsPage />,
            },
            {
                path: CLIENT_ROUTES.NOT_FOUND,
                element: <NotFound />,
            },
            {
                path: CLIENT_ROUTES.UPDATE,
                element: <QuestionUpdate />,
            },
        ]
    }


]);
