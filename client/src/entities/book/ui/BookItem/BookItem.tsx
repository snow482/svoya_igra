import { Book } from "../../model";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { deleteBook } from "../../model/bookThunk";
import { Link } from "react-router-dom";

export function BookItem({ book }: { book: Book }) {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    try {
      dispatch(deleteBook(book.id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <section style={{ border: `1px solid white`, marginTop: "5px" }}>
      <h2>Title: {book.title}</h2>
      <p>Author: {book.author}</p>
      {user && user.id === book.user_id && (
        <button onClick={handleDelete}>Delete book</button>
      )}
      (<Link to={`/books/${book.id}`}>Изменить форму</Link>)
    </section>
  );
}
