import { axiosInstance } from "@/shared/lib/axiosInstance";
import { QuestionList } from "@/entities/question/model";

export class QuestionService {
  static async getAllQuestions(): Promise<QuestionList> {
    const response = await axiosInstance.get("/questions");
    return response.data.questions;
  }
}
