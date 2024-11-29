import { axiosInstance } from "@/shared/lib/axiosInstance";
import { Book, BookList } from "@/entities/book/model";

export class QuestionService {
  static async getAllQuestions(): Promise<BookList> {
    const response = await axiosInstance.get("/questions");
    return response.data.questions;
  }
}
