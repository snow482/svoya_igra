export type Question = {
  id: number;
  description: string;
  answer: string;
  category_id: number;
  price: number;
};

export type QuestionList = Question[];
