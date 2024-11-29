export type Book = {
  id: number;
  title: string;
  author: string;
  pages: number;
  category_id: number;
  user_id: number;
};
export type BookCreate = {
  title: string;
  author: string;
  pages: number;
  category_id: number;
};

export type BookUpdate = {
  id: number;
  title: string;
  author: string;
};

export type BookId = Book["id"];
export type BookList = Book[];
export type BookWithoutId = Omit<Book, "id">;
