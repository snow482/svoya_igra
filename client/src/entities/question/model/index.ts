export type Category = {
  id: number;
  name: string;
}

export type Question = {
  id: number;
  description: string;
  answer: string;
  category_id: number;
  price: number;
  Category: Category 
};

export type QuestionList = Question[];
