import React, { useState } from "react";
import "./QuestionUpdate.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { updateQuestion } from "@/entities/question/model/questionThunk";

export function QuestionUpdate() { 
  const dispatch = useAppDispatch()
  const { questions } = useAppSelector((state) => state.questions)
  const { id } = useParams()
  const navigate = useNavigate()

  const question = questions.find((el) => el.id === Number(id))

  const [title, setTitle] = useState<string>(question?.description || '');
  const [author, setAuthor] = useState<string>(question?.author || '');
  const [pages, setPages] = useState<number>(question?.pages || 0);
  const [category_id, setCategoryId] = useState<number>(question?.category_id || 0);

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (!question) {
        return
      }
    
      dispatch(updateQuestion({id: Number(id), title, author, pages, category_id}));
      navigate('/questions')
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <section>
      <div className="question-update-item">
        <form onSubmit={handleUpdate}>
          <p>Название: </p>
          <input
            type="text"
            onChange={({ target }) => setTitle(target.value)}
            defaultValue={title}
            required
            placeholder="Question title"
          />
          <p>Автор: </p>
          <input
            type="text"
            onChange={({ target }) => setAuthor(target.value)}
            defaultValue={author}
            required
            placeholder="Question author"
          />
          <p>Количество страниц: </p>
          <input
            type="number"
            onChange={({ target }) => setPages(Number(target.value))}
            defaultValue={pages}
            required
            placeholder="Pages"
          />
          <p>Категория: </p>
          <input
            type="text"
            onChange={({ target }) => setCategoryId(Number(target.value))}
            defaultValue={category_id}
            required
            placeholder="Category"
          />
          <button>Update question</button>
        </form>
      </div>
    </section>
  );
}
