import { axiosInstance } from "@/shared/lib/axiosInstance";
import { Book, BookList } from "@/entities/book/model";

export class BookService {
  static async createBook(
    title: string,
    author: string,
    pages: number,
    category_id: number
  ): Promise<Book> {
    const response = await axiosInstance.post("/books", {
      title,
      author,
      pages,
      category_id,
    });
    return response.data.book;
  }

  static async getAllBooks(): Promise<BookList> {
    const response = await axiosInstance.get("/books");
    return response.data.books;
  }

  static async updateBook(
    id: number,
    title: string,
    author: string
  ): Promise<Book> {
    const response = await axiosInstance.put(`/books/${id}`, {
      title,
      author,
    });
    return response.data.book;
  }

  static async deleteBook(id: number): Promise<number> {
    await axiosInstance.delete(`/books/${id}`);
    return id;
  }
}
